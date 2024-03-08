import { useEffect } from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../ReduxManagement/Actions/Auth-Actions/Auth-Actions";
import { getLoggedInUser } from "../../ReduxManagement/Reducers/Auth-Reducers/Auth-Reducers";
import { Login as LoginType } from "../../datatypes/Login";
import Input from "../../components/Common/Input";
import { Validations } from "../../datatypes/Validations";
import { RoutesManager } from "../../utils/RoutesManager";
import { useRouter } from "next/router";

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
    <form className="form-login-box" onSubmit={handleSubmit(loginHandler)}>
      <div className="form-details">
        <h1>Login</h1>
      </div>

      {/* use controller */}
      <div className="form-details">
        <Input
          register={register} 
          name="email"
          placeholder=" Email Address"
          type="email"
          validations={{
            ...basicValidaions,
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
          }}
          errors={errors}
        />
        <Input
          register={register}
          name="password"
          placeholder="Password"
          type="password"
          validations={basicValidaions}
          errors={errors}
        />
      </div>

      <div className="form-details">
        <button className="form-buttons submit" type="submit">
          Login
        </button>
        <button className="form-buttons reset" type="reset">
          Reset <i className="fa-solid fa-rotate-left"></i>
        </button>
      </div>
    </form>
  );
};
const basicValidaions: Validations = { required: true, minLength: 5 };

export default Login;
