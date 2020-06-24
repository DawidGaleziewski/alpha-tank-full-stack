// Libs
import React, { useState } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/core";
// Components
import InputSlider from "../atoms/inputs/InputSlider";
import FormButton from "../atoms/buttons/FormButton";
// Utils
import { setCookie } from "../../utils/generalUtils";

/** @jsx jsx */

const formStyle = css`
  background-color: #fff;
  padding: 4rem;
  display: inline-block;
  border-radius: 16px;

  & > .input-slider-wrapper {
    display: block;
    margin-bottom: 1.6rem;
  }
`;
const RegisterForm = ({ setIsUserLoggedIn, setTokenState }) => {
  const initialState = {
    email: "",
    password: "",
    name: "",
    surname: "",
    age: "",
  };
  const [formState, setFormState] = useState(initialState);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios.post("/users", formState).then((res) => {
      const {
        data: { token },
      } = res;
      setIsUserLoggedIn(true);
      setTokenState(token);
      setCookie({ token });
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
    <form css={formStyle} onSubmit={onSubmitHandler}>
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
      {/* <input type="submit" value="register" /> */}
    </form>
  );
};

export default RegisterForm;
