import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
// Components
import Dashboard from "../Dashboard/Dashboard";
import TestsListing from "../Listings/TestsListing";
import AddTestForm from "../Forms/AddTestForm";
// Utils
import { getAuthHeader } from "../../utils/tokenUtils";

const Tank = ({ isUserLoggedIn, tokenState, match, addAlert }) => {
  console.log(isUserLoggedIn, tokenState, match);
  console.log(isUserLoggedIn);
  const {
    params: { tankID },
  } = match;
  const [tankState, setTankState] = useState([]);
  const [testsState, setTestsState] = useState([]);

  const populateTankAndTestsInformation = async (tokenState, tankID) => {
    const authHeader = getAuthHeader(tokenState);
    const {
      data: { tank, tests },
    } = await axios.get(`/tanks/${tankID}`, { headers: authHeader });
    console.log(tests);
    setTankState(tank);
    setTestsState(tests);
  };

  useEffect(() => {
    populateTankAndTestsInformation(tokenState, tankID);
  }, [tokenState, tankID]);

  if (isUserLoggedIn) {
    return (
      <Dashboard>
        <h2>{tankState.name}</h2>
        <AddTestForm
          tankID={tankID}
          tokenState={tokenState}
          testsState={testsState}
          setTestsState={setTestsState}
          addAlert={addAlert}
        />
        <TestsListing testsState={testsState} />
      </Dashboard>
    );
  } else {
    return <Redirect to={"/"} />;
  }
};

export default Tank;
