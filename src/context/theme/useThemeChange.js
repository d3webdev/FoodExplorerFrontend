import { useContext } from 'react';
import { ThemeChangeContext } from './themeChangeProvider';

const useThemeChange = () => {
    const context = useContext(ThemeChangeContext);
    if(!context){
        throw new Error('useThemeChange must be used within a ThemeChangeProvider');
    }
    
    return context;
};

export { useThemeChange };