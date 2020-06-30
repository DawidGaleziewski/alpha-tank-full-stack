// Libs
import React, { useState } from "react";
import axios from "axios";
// Components
// Utils
import { getAuthHeader } from "../../utils/tokenUtils";

const AddTestForm = ({ tokenState, tankID, setTestsState, testsState }) => {
  const initialState = {
    dateOfTest: "",
    nh3: "",
    nh4: "",
    no3: "",
    ph: "",
    tempCelc: "",
  };
  const [formState, setFormState] = useState(initialState);

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
    <form onSubmit={onSubmitHandler}>
      <input type="date" name="dateOfTest" onChange={onChangeHandler} />
      <input type="number" name="nh3" onChange={onChangeHandler} />
      <input type="number" name="nh4" onChange={onChangeHandler} />
      <input type="number" name="no3" onChange={onChangeHandler} />
      <input type="number" name="ph" onChange={onChangeHandler} />
      <input type="number" name="tempCelc" onChange={onChangeHandler} />
      <input type="submit" value="add test" />
    </form>
  );
};

export default AddTestForm;
