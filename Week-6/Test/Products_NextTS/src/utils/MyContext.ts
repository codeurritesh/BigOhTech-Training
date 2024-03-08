import { createContext } from 'react';
import { ContextType } from '../datatypes/ContextType';
export const MyContext = createContext<ContextType | undefined>(undefined);
