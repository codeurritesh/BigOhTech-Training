import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerActions } from "../../ReduxManagement/Actions/Register-Actions/register-Actions";
import { SignUp } from "../../datatypes/SignUp";
import Input from "../../components/Common/Input";
import { Validations } from "../../datatypes/Validations";
import { RoutesManager } from "../../utils/RoutesManager";
import { useRouter } from "next/router";
import { styles } from "./styles";
import { Box, Button } from "@mui/material";

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<SignUp>();

  function registerHandler(data: SignUp) {
    if (data.newPassword !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
      });
    } else {
      const { newPassword, ...formData } = data;
      dispatch(registerActions(formData));
      router.push(RoutesManager.LOGIN);
    }
  }

  return (
    <Box sx={styles.mainContainer}>
      <form style={styles.formBox} onSubmit={handleSubmit(registerHandler)}>
        <Box sx={styles.formDetails}>
          <h1>Register</h1>
        </Box>

        <Box sx={styles.formDetails}>
          <Input
            register={register}
            name="name"
            placeholder="Full Name"
            type="text"
            validations={{ ...basicValidations }}
            errors={errors}
          />
          <Input
            register={register}
            name="email"
            placeholder="Email Address"
            type="email"
            validations={{
              ...basicValidations,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            }}
            errors={errors}
          />
          <Input
            register={register}
            name="number"
            placeholder="Phone number"
            type="number"
            validations={{ required: true, minLength: 10, maxLength: 12 }}
            errors={errors}
          />
          <Input
            register={register}
            name="address"
            placeholder="Current Address"
            type="text"
            validations={basicValidations}
            errors={errors}
          />
          <Input
            register={register}
            name="city"
            placeholder="City"
            type="text"
            validations={basicValidations}
            errors={errors}
          />
          <Input
            register={register}
            name="state"
            placeholder="State"
            type="text"
            validations={basicValidations}
            errors={errors}
          />
          <Input
            register={register}
            name="pinCode"
            placeholder="Pin Code"
            type="number"
            validations={basicValidations}
            errors={errors}
          />
          <Input
            register={register}
            name="newPassword"
            placeholder="Create New Password"
            type="password"
            validations={basicValidations}
            errors={errors}
          />
          <Input
            register={register}
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            validations={basicValidations}
            errors={errors}
          />
        </Box>

        <Box style={styles.formDetails} className="button-box">
          <Button variant={'contained'}
            sx={{ ...styles.formButton, ...styles.submit }}
            type="submit"
          >
            Register
          </Button>
          <Button
          variant={'contained'}
            sx={{ ...styles.formButton, ...styles.reset }}
            type="reset"
          >
            Reset <i className="fa-solid fa-rotate-left"></i>
          </Button>
        </Box>
      </form>
    </Box>
  );
};
const basicValidations: Validations = { required: true, minLength: 5 };

export default Register;
