import { createContext } from 'react';
import { ContextType } from '../dataTypes/ContextType';

export const MyContext = createContext<ContextType | undefined>(undefined);
