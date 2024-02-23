import React from "react";
import Input from "../components/shared/Input";
import { useForm } from "react-hook-form";
import "./addQuote.css";

const AddQuote = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm(); // generic

  return (
    <div className="add-section">
      <form action="" className="add-box">
        <h1>Add New Todo</h1>
        <Input
          name="Quote"
          placeholder="Add New Quote"
          register={register}
          errors={errors}
        />
        <Input
          name="Quote"
          placeholder="Author Name"
          register={register}
          errors={errors}
        />
        <button type="submit">Add Quote</button>
      </form>
    </div>
  );
};

export default AddQuote;
