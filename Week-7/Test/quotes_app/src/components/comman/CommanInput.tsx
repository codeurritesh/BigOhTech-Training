import { Controller } from "react-hook-form";
import { Quote } from "../../dataTypes/Quote";
import { TextField } from "@mui/material";
import "./commanInput.css"
// import { FormValues, FormValuesForLogin } from '../utils/DataTypes/ResponsedataType';

type InputProps<T extends Quote> = {
  type: string;
  control: any;
  name: string;
  validationOptions?: Record<string, any>;
  error?: string;
};

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
    </>
  );
};

export default Input;
