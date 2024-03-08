import { ReactNode } from "react";
import { getLoggedInUser } from "../ReduxManagement/Reducers/Auth-Reducers/Auth-Reducers";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props: { children: ReactNode }) => {
    const isLoggedIn = useSelector(getLoggedInUser);
    return isLoggedIn ? props.children : <Navigate to="/login" />;
  };
  export default PrivateRoute