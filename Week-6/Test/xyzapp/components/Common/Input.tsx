import React from "react";
import "./input.css";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { SignUp } from "../../datatypes/SignUp";
import { Validations } from "../../datatypes/Validations";
import { Login } from "../../datatypes/Login";

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
  //use <Controller, why....
  
  return (
    <div className="form-input-control">
      <input
        className="add-quote-input"
        {...formState}
        {...register(name as Path<T>, validations)}
      />
      {errors[name]?.type === "required" && (
        <small className="error">Field Can not be Empty</small>
      )}
      {errors[name]?.type === "minLength" && (
        <small className="error">
          Min Length should be {validations?.minLength} Characters
        </small>
      )}
      {errors[name]?.type === "maxLength" && (
        <small className="error">
          Max Length can be {validations?.maxLength} Characters Only
        </small>
      )}
      {errors[name]?.type === "pattern" && (
        <small className="error">Invalid {name} Format</small>
      )}
      {errors[name]?.type === "manual" && (
        <span className="error">Password Do Not Match</span>
      )}
    </div>
  );
};

export default Input;
