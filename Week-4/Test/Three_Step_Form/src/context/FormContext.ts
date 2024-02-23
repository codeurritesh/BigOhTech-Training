import { createContext } from "react";
type ContextType={
    setFormType:any,
    setIsSubmitted:any
}
export const FormContext=createContext<ContextType|undefined>(undefined);
// export const TempDataBase=