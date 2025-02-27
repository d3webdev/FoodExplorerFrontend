import { createContext, useCallback, useState } from "react";
import Cookies from 'js-cookie';
import { useEffect } from "react";
import PropTypes from "prop-types";

const ThemeChangeContext = createContext();

const ThemeChangeProvider = ({ children }) => {
    const [themeStatus, setThemeStatus] = useState(true);
    const [initialized, setInitialized] = useState(false);

    const toggleTheme = useCallback(() => setThemeStatus((prev) => !prev), []);

        useEffect(() => {
            if (!initialized) {
                const dataCookie = Cookies.get('theme');
                if (dataCookie) {
                    setThemeStatus(JSON.parse(dataCookie));
                }
                setInitialized(true);
            }
        }, [initialized]);
    
        useEffect(() => {
            if (initialized) {
                Cookies.set('theme', JSON.stringify(themeStatus), {
                    expires: 1,
                    secure: false,
                    sameSite: 'strict',
                });
            }
        }, [initialized, themeStatus]);

    return (
        <ThemeChangeContext.Provider value={{ themeStatus, toggleTheme }}>
            {children}
        </ThemeChangeContext.Provider>
    );
};

ThemeChangeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ThemeChangeProvider, ThemeChangeContext };