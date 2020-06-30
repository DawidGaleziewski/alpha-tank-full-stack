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
import barFormStyle from "./styles/barFormStyle";

/** @jsx jsx */

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

  return (
    <form css={barFormStyle} onSubmit={onSubmitHandler}>
      <CloseWindowButton />
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
  );
};

export default AddTankForm;
