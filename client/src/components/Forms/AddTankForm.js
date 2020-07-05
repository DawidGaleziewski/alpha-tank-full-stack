// Libs
import React, { useState } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/core";
// Components
import InputSlider from "../atoms/inputs/InputSlider";
import FormButton from "../atoms/buttons/FormButton";
import CloseWindowButton from "../atoms/buttons/CloseWindowButton";
// Utils
import { getAuthHeader } from "../../utils/tokenUtils";
// Styles
import { barFormStyle, formWrapper } from "./styles/barFormStyle";

/** @jsx jsx */

const formToggleStyle = css`
  background-color: #3fbe90;
  border: none;
  padding: 0.8rem;
  border-radius: 2px;
  cursor: pointer;
  text-transform: uppercase;
  color: #ffffff;
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const AddTankForm = ({
  tokenState,
  setTanksListingState,
  tanksListingState,
}) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const authHeader = getAuthHeader(tokenState);
    axios
      .post("/tanks", formState, { headers: authHeader })
      .then((res) => {
        setTanksListingState([...tanksListingState, res.data]);
      })
      .catch((error) => {
        console.log(error);
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
    name: "",
    sizeX: "",
    sizeY: "",
    sizeZ: "",
    aquariumType: "",
  };

  const [formState, setFormState] = useState(initialState);
  const [isMobileFormToggled, setIsMobileFormToggled] = useState(false);

  const toggleMobileFormHandler = () => {
    setIsMobileFormToggled(!isMobileFormToggled);
    console.log(isMobileFormToggled);
  };
  return (
    <section css={formWrapper}>
      <button onClick={toggleMobileFormHandler} css={formToggleStyle}>
        New tank
      </button>
      <form css={barFormStyle(isMobileFormToggled)} onSubmit={onSubmitHandler}>
        <CloseWindowButton onClickHandler={toggleMobileFormHandler} />
        <InputSlider
          id={"tankName"}
          type={"text"}
          name={"name"}
          labelText={"tank name"}
          value={formState.name}
          onChange={onChangeHandler}
        />
        <InputSlider
          id={"TankSizeX"}
          type={"number"}
          name={"sizeX"}
          labelText={"tank size on X axis"}
          value={formState.sizeX}
          onChange={onChangeHandler}
        />
        <InputSlider
          id={"TankSizeY"}
          type={"number"}
          name={"sizeY"}
          labelText={"tank size on Y axis"}
          value={formState.sizeY}
          onChange={onChangeHandler}
        />
        <InputSlider
          id={"TankSizeZ"}
          type={"number"}
          name={"sizeZ"}
          labelText={"tank size on Z axis"}
          value={formState.sizeZ}
          onChange={onChangeHandler}
        />
        <InputSlider
          id={"tankAquariumType"}
          type={"text"}
          name={"aquariumType"}
          labelText={"aquarium type"}
          value={formState.sizeZ}
          onChange={onChangeHandler}
        />

        <FormButton btnText="Add tank" />
      </form>
    </section>
  );
};

export default AddTankForm;
