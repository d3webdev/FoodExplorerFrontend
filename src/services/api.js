import axios from 'axios';

class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL: import.meta.env.VITE_API_URL,
        });
        this.cancelTokens = new Set();
        this.setupInterceptorsCancelTokens();
        this.setupResponseInterceptorError();
    }

    setupResponseInterceptorError = () => {
        this.api.interceptors.response.use(
            (response) => response,
            (error) => {
                if (axios.isCancel(error)) {
                    return Promise.reject(error);
                }

                if (
                    error.response?.data.status === 401 &&
                    error.response.data.message === 'JWT token is missing' &&
                    !error.config.url.includes('/sessions/verify')
                ) {
                    return new Promise(() => {});
                }
                return Promise.reject(error);
            }
        );
    }

    setupInterceptorsCancelTokens = () => {
        this.api.interceptors.request.use((config) => {
            const controller = new AbortController();
            config.signal = controller.signal;
            this.cancelTokens.add(controller);
            return config;
        });
    }

    setupVerifyInterceptors = (verifyAuth) => {
        this.api.interceptors.request.use(
            async (config) => {
                if (
                    config.url.includes('/sessions') ||
                    config.url.includes('/sessions/verify')
                ) {
                    return config;
                }

                await verifyAuth();
                return config;
            },
            (error) => Promise.reject(error)
        );
    };

    cancelAllRequests = async () => {
        this.cancelTokens.forEach((controller) => controller.abort());
        this.cancelTokens.clear();
    }
}

const apiService = new ApiService();
export const api = apiService.api;
export const verifyInterceptors = (verifyAuth) => apiService.setupVerifyInterceptors(verifyAuth);
export const cancelAllRequests = () => apiService.cancelAllRequests();
