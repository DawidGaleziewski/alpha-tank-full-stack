// Libs
import React, { useState, Fragment } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/core";
// Components
import InputSlider from "../atoms/inputs/InputSlider";
import FormButton from "../atoms/buttons/FormButton";
import LoadingDefault from "../atoms/loadings/LoadingDefault";
// Utils
import { setCookie } from "../../utils/generalUtils";
// Styles
import formDefaultStyle from "./styles/formDefaultStyle";

/** @jsx jsx */

const RegisterForm = ({ setIsUserLoggedIn, setTokenState, addAlert }) => {
  const initialState = {
    email: "",
    password: "",
    name: "",
    surname: "",
    age: "",
  };
  const [formState, setFormState] = useState(initialState);
  const [isLoading, setIsloading] = useState(false);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setIsloading(true);
    axios
      .post("/users", formState)
      .then((res) => {
        const {
          data: { token },
        } = res;

        setIsloading(false);
        setIsUserLoggedIn(true);
        setTokenState(token);
        setCookie("token", token);
      })
      .catch((error) => {
        setIsloading(false);
        console.log(error.response);
        const emailExsistsErrorCode = 409;
        if (error.response.status === emailExsistsErrorCode) {
          addAlert("danger", "This email is taken. Try another one", 3000);
        } else {
          addAlert(
            "danger",
            "Ups, unable to register. Check your data and try once again",
            3000
          );
        }
      });
  };
  const onChangeHandler = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormState({
      ...formState,
      [event.target.name]: value,
    });
  };

  return (
    <form css={formDefaultStyle} onSubmit={onSubmitHandler}>
      {isLoading ? (
        <LoadingDefault />
      ) : (
        <Fragment>
          <InputSlider
            id={"registerEmail"}
            type={"email"}
            name={"email"}
            labelText={"Your email"}
            value={formState.email}
            onChange={onChangeHandler}
          />
          <InputSlider
            id={"registerPassword"}
            type={"password"}
            name={"password"}
            labelText={"Password"}
            value={formState.password}
            onChange={onChangeHandler}
          />
          <InputSlider
            id={"registerName"}
            type={"text"}
            name={"name"}
            labelText={"Your name"}
            value={formState.name}
            onChange={onChangeHandler}
          />
          <InputSlider
            id={"registerSurname"}
            type={"text"}
            name={"surname"}
            labelText={"Your surname"}
            value={formState.surname}
            onChange={onChangeHandler}
          />
          <InputSlider
            id={"registerAge"}
            type={"number"}
            name={"age"}
            labelText={"Your age"}
            value={formState.age}
            onChange={onChangeHandler}
          />

          <FormButton btnText="register" />
        </Fragment>
      )}
    </form>
  );
};

export default RegisterForm;
