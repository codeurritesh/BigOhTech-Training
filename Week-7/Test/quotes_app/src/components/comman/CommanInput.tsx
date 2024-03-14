import { Control, Controller } from "react-hook-form";
import { Quote } from "../../dataTypes/Quote";
import { TextField } from "@mui/material";
import "./commanInput.css"
// import { FormValues, FormValuesForLogin } from '../utils/DataTypes/ResponsedataType';

// where you are using this erro ?
type InputProps<T extends Quote> = {
  type: string;
  control:  any;
  name: string;
  validationOptions?: Record<string, any>;
  // valid generic
  error?: string;
};

// make generic control,
// pass error objt not string

const Input = <T extends Quote>({
  type,
  control,
  name,
  validationOptions,
  error,
}: InputProps<T>) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextField
            id="outlined-basic"
            className="form-control"
            sx={{ margin: "10px" }}
            label={name}
            variant="outlined"
            {...field}
          />
        )}
        rules={validationOptions}
      />
      {error && <p className="form-error">{error}</p>}

      {/* {error[name].type==='requred'} */}
    </>
  );
};

export default Input;


// make mapping of the errors
// map error based on the type

const errors  = {
  number: 'Data should be nujber',
  minMax: 'Value should be valid',
  required: 'field is required'
}