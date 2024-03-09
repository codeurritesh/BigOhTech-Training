import { Button, Container, TextField, useTheme } from "@mui/material";
import React from "react";
import "./style.css";
import { Quote } from "../../dataTypes/Quote";
import Input from "../../components/comman/CommanInput";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { localStorageManagement } from "../../services/LocalStorageManagement";

const AddQuote = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { control, handleSubmit, formState, register } = useForm<Quote>();
  const { errors } = formState;

  const submitHandler = (data: any) => {
    console.log(data);
    const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString();
    localStorageManagement.setItem("Quotes", {...data,date:formattedDate});
    navigate("/all-quotes");
  };
  return (
    <div
      className="form-container"
      style={{ backgroundColor: theme.palette.secondary.main }}
    >
      <form onSubmit={handleSubmit(submitHandler)}>
        <h1>Add New Quote</h1>

        <Input
          name="quote"
          type="text"
          control={control}
          validationOptions={{
            required: {
              value: true,
              message: "Quote is required",
            },
          }}
          error={errors.quote?.message}
        />
        <Input
          name="author"
          type="text"
          control={control}
          validationOptions={{
            required: {
              value: true,
              message: "Author is required",
            },
          }}
          error={errors.author?.message}
        />

        <Button variant="contained" color="primary" type="submit">
          Add New
        </Button>
      </form>
    </div>
  );
};

export default AddQuote;
