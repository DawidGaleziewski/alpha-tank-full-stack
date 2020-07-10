import React, { Fragment } from "react";
import RegisterForm from "../Forms/RegisterForm";
import LoginForm from "../Forms/LoginForm";
import { Redirect } from "react-router-dom";

const Login = ({
  setIsUserLoggedIn,
  setTokenState,
  isUserLoggedIn,
  addAlert,
}) => {
  if (isUserLoggedIn) {
    return <Redirect to={"/tanks"} />;
  } else {
    return (
      <Fragment>
        <LoginForm
          setIsUserLoggedIn={setIsUserLoggedIn}
          setTokenState={setTokenState}
          addAlert={addAlert}
        />
        <RegisterForm
          setIsUserLoggedIn={setIsUserLoggedIn}
          setTokenState={setTokenState}
          addAlert={addAlert}
        />
      </Fragment>
    );
  }
};

export default Login;
