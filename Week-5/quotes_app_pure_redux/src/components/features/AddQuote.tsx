import "./addQuote.css";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Input from "../shared/Input";
import { addQuote } from "../../reduxStore/actions/actions";
import { Quote } from "../../dataTypes/Quote";

const AddQuote = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Quote>();

  function submitHandler(quote:any) {
    dispatch(addQuote(quote as Quote));
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

