import { useEffect } from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../ReduxManagement/Actions/Auth-Actions/Auth-Actions";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser } from "../../ReduxManagement/Reducers/Auth-Reducers/Auth-Reducers";
import { Login as LoginType } from "../../datatypes/Login";
import Input from "../../components/Common/Input";
import { Validations } from "../../datatypes/Validations";
import { RoutesManager } from "../../utils/RoutesManager";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector(getLoggedInUser);
  console.log("login rerender....");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginType>();

  useEffect(() => {
      if (loggedInUser) {
        navigate(RoutesManager.PRODUCTS); 
      }
    }
  , [loggedInUser]);

  function loginHandler(data: LoginType) {
    dispatch(loginActions(data));
  }
  return (
    <form className="form-login-box" onSubmit={handleSubmit(loginHandler)}>
      <div className="form-details">
        <h1>Login</h1>
      </div>

      <div className="form-details">
        <Input
          register={register} // learn it using, control, rule
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
