import { createContext } from 'react';
export type ContextType={
    darkMode:boolean,
    setDarkMode:React.Dispatch<React.SetStateAction<boolean>>,
    themeColor:string,
    setInitialThemeColor:React.Dispatch<React.SetStateAction<string>>
}
export const ThemeContext = createContext<ContextType | undefined>(undefined);
