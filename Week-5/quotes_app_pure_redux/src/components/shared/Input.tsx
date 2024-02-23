import React from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { Quote } from "../../dataTypes/Quote";

interface CustomInputProps {
  register: UseFormRegister<Quote>;
  required?: boolean;
  pattern?: RegExp;
  errors: FieldErrors<FieldValues>;
  name: "newQuote" | "date" | "author";
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
        {...register(name, {
          required: required,
        })}
      />
      {errors[name]?.type === "required" && (
        <small className="error">Author Name Can not be Empty</small>
      )}
      {errors[name]?.type === "minLength" && (
        <small className="error">Min Length should be 5 Characters</small>
      )}
    </div>
  );
};

export default Input;
