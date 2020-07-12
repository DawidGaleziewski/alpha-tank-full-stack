// Libs
import React, { useState } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/core";
// Components
import InputSlider from "../atoms/inputs/InputSlider";
import DatePicker from "../atoms/inputs/DatePicker";
import FormButton from "../atoms/buttons/FormButton";
import ToggleFormButton from "../atoms/buttons/ToggleFormButton";
import CloseWindowButton from "../atoms/buttons/CloseWindowButton";
// Utils
import { getAuthHeader } from "../../utils/tokenUtils";
// Styles
import { barFormStyle, formWrapper } from "./styles/barFormStyle";

/**@jsx jsx */

const AddTestForm = ({
  tokenState,
  tankID,
  setTestsState,
  testsState,
  addAlert,
}) => {
  const initialState = {
    dateOfTest: "",
    nh3: "",
    nh4: "",
    no3: "",
    ph: "",
    tempCelc: "",
  };
  const [formState, setFormState] = useState(initialState);
  const [isMobileFormToggled, setIsMobileFormToggled] = useState(false);

  const toggleMobileFormHandler = (event) => {
    event.preventDefault();
    setIsMobileFormToggled(!isMobileFormToggled);
    console.log(isMobileFormToggled);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const authHeader = getAuthHeader(tokenState);
    try {
      const { data } = await axios.post(
        "/tests",
        { ...formState, tankID },
        { headers: authHeader }
      );
      setTestsState([...testsState, data]);
    } catch (error) {
      addAlert(
        "danger",
        "Ups. Unable to add test. Check data and try again",
        3000
      );
      console.log(error);
    }
  };
  const onChangeHandler = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormState({ ...formState, [event.target.name]: value });
  };

  return (
    <section css={formWrapper}>
      <ToggleFormButton
        buttonText="New test"
        onClickHandler={toggleMobileFormHandler}
      />
      <form css={barFormStyle(isMobileFormToggled)} onSubmit={onSubmitHandler}>
        <CloseWindowButton onClickHandler={toggleMobileFormHandler} />
        <DatePicker
          id={"testDate"}
          name={"dateOfTest"}
          labelText={"date of testing"}
          value={formState.dateOfTest}
          onChangeHandler={onChangeHandler}
        />
        <InputSlider
          id={"testNH3"}
          type={"number"}
          name={"nh3"}
          labelText={"NH3"}
          value={formState.nh3}
          onChange={onChangeHandler}
        />
        <InputSlider
          id={"testNH4"}
          type={"number"}
          name={"nh4"}
          labelText={"NH4"}
          value={formState.nh4}
          onChange={onChangeHandler}
        />
        <InputSlider
          id={"testNO3"}
          type={"number"}
          name={"no3"}
          labelText={"NO3"}
          value={formState.no3}
          onChange={onChangeHandler}
        />
        <InputSlider
          id={"testPH"}
          type={"number"}
          name={"ph"}
          labelText={"PH"}
          value={formState.ph}
          onChange={onChangeHandler}
        />
        <InputSlider
          id={"tempCelc"}
          type={"number"}
          name={"tempCelc"}
          labelText={"temperature C"}
          value={formState.tempCelc}
          onChange={onChangeHandler}
        />
        <FormButton btnText={"add test"} />
      </form>
    </section>
  );
};

export default AddTestForm;
