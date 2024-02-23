import React from "react";
import "./input.css"
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

interface CustomInputProps {
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  pattern?: RegExp;
  errors: FieldErrors<FieldValues>;
  name: string;
  isSearchble?:boolean ///look at this
}

const Input = ({
  register,
  required,
  name,
  pattern,
  errors,
  ...formState
}: CustomInputProps &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => {
  return (
    <div className="form-input-control">
      <input
        className="add-quote-input"
        {...formState}
        {...register(name, {required})}
      />
      {errors[name]?.type === "required" && (
        <small className="error">Author Name Can not be Empty</small>
      )}
      {errors[name]?.type === "minLength" && (
        <small className="error">Min Length should be 5 Characters</small>
      )}
      {/* You have to improve it using switch cases... */}
      {/* Add all error here... */}
    </div>
  );
};
 

export default Input;
