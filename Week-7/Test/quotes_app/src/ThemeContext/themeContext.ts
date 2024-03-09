import { createContext } from 'react';
type ContextType={
    darkMode:boolean;
    setDarkMode:any
}
export const ThemeContext = createContext<ContextType | undefined>(undefined);
