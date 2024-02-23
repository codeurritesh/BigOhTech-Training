import "./addQuote.css";
import { useDispatch } from "react-redux";
import { addQuote } from "../../reduxStore/quoteSlice";
import { FieldValues, useForm } from "react-hook-form";
import Input from "../shared/Input";

const AddQuote = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // {author: string, newQuote: string}
  function submitHandler(data:any) {
    dispatch(addQuote(data));
    console.log(data);
    console.log("Data dispatched");
    reset();
  }
  return (
    <form
      action=""
      className="form-container"
      onSubmit={handleSubmit(submitHandler)}
    >

      <Input
        name="author"
        placeholder="Author Name"
        register={register}
        errors={errors}
        required={true}
      />

      <Input
        name="newQuote"
        placeholder="Add Quote"
        register={register}
        required={true}
        errors={errors}
      />

      <input className="add-quote-button" type="submit"></input>
    </form>
  );
};

export default AddQuote;

export const validationOfQuotes = {
  auth: {
    required: true,
    minLength: 5,
  },
} satisfies Record<string, FieldValues>;
