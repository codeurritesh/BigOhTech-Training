import { useEffect } from "react";
import { styles } from "./style"; 
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../ReduxManagement/Actions/Auth-Actions/Auth-Actions";
import { getLoggedInUser } from "../../ReduxManagement/Reducers/Auth-Reducers/Auth-Reducers";
import { Login as LoginType } from "../../datatypes/Login";
import Input from "../../components/Common/Input";
import { Validations } from "../../datatypes/Validations";
import { RoutesManager } from "../../utils/RoutesManager";
import { useRouter } from "next/router";
import { Box, Button } from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const loggedInUser = useSelector(getLoggedInUser);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginType>();

  useEffect(() => {
      if (loggedInUser) {
        router.push(RoutesManager.PRODUCTS); 
      }
    }
  , [loggedInUser]);

  function loginHandler(data: LoginType) {
    console.log(data)
    dispatch(loginActions(data));
  }
  return (
    <Box sx={styles.mainContainer}>
    <form style={styles.formLoginBox} onSubmit={handleSubmit(loginHandler)}>
      <Box sx={styles.formDetails}>
        <h1>Login</h1>
      </Box>

      <Box sx={styles.formDetails}>
        <Input
          register={register} 
          name="email"
          placeholder=" Email Address"
          type="email"
          validations={{
            ...basicValidations,
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
          }}
          errors={errors}
        />
        <Input
          register={register}
          name="password"
          placeholder="Password"
          type="password"
          validations={basicValidations}
          errors={errors}
        />
      </Box>

      <Box sx={styles.formDetails}>
        <Button           variant={'contained'}
 sx={{ ...styles.formButtons, ...styles.submit }} type="submit">
          Login
        </Button>
        <Button           variant={'contained'}
 sx={{ ...styles.formButtons, ...styles.reset }} type="reset">
          Reset <i className="fa-solid fa-rotate-left"></i>
        </Button>
      </Box>
    </form>
    </Box>
  );
};
const basicValidations: Validations = { required: true, minLength: 5 };

export default Login;
