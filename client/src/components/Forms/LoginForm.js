// Libs
import React, { useState, useEffect } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/core";
// Components
import InputSlider from "../atoms/Inputs/InputSlider";
import FormButton from "../atoms/buttons/FormButton";
// Utils
import { setCookie } from "../../utils/generalUtils";
// Styles
import formDefaultStyle from "./styles/formDefaultStyle";

/** @jsx jsx */

const LoginForm = ({ setTokenState, setIsUserLoggedIn }) => {
  // useEffect(() => {
  //   document.querySelector("form").click();
  // }, []);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios.post("/users/login", formState).then((res) => {
      const {
        data: { token },
      } = res;
      setTokenState(token);
      setIsUserLoggedIn(true);
      setCookie({ token });
    });
  };
  const onChangeHandler = (event) => {
    const {
      target: { value, name },
    } = event;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const initialState = {
    email: "",
    password: "",
  };

  const [formState, setFormState] = useState(initialState);

  return (
    <form css={formDefaultStyle} onSubmit={onSubmitHandler}>
      <InputSlider
        // autoFocus={true}
        id={"loginEmail"}
        type={"email"}
        name={"email"}
        labelText={"Your email"}
        value={formState.email}
        onChange={onChangeHandler}
        autoFocus={true}
      />
      <InputSlider
        id={"loginPassword"}
        type={"password"}
        name={"password"}
        labelText={"Password"}
        value={formState.password}
        onChange={onChangeHandler}
      />
      <FormButton btnText={"login"} />
    </form>
  );
};

export default LoginForm;
