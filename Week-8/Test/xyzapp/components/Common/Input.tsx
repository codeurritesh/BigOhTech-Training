import React from "react";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { Validations } from "../../datatypes/Validations";
import styles from "./styles";
type FormData = Record<string,any>;

interface CustomInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  validations?: Validations;
  errors: FieldErrors<FieldValues>;
  name: keyof T & string;
}

const Input = <T extends FormData>({
  register,
  name,
  validations,
  errors,
  ...formState
}: CustomInputProps<T> &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => {
  
  return (
    <div style={styles.formInputControl}>
      <input
        style={styles.addQuoteInput}
        {...formState}
        {...register(name as Path<T>, validations)}
      />
      {errors[name]?.type === "required" && (
        <small style={styles.error}>Field Can not be Empty</small>
      )}
      {errors[name]?.type === "minLength" && (
        <small style={styles.error}>
          Min Length should be {validations?.minLength} Characters
        </small>
      )}
      {errors[name]?.type === "maxLength" && (
        <small style={styles.error}>
          Max Length can be {validations?.maxLength} Characters Only
        </small>
      )}
      {errors[name]?.type === "pattern" && (
        <small style={styles.error}>Invalid {name} Format</small>
      )}
      {errors[name]?.type === "manual" && (
        <span style={styles.error}>Password Do Not Match</span>
      )}
    </div>
  );
};

export default Input;
