import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
// Components
import Dashboard from "../Dashboard/Dashboard";
import TestsListing from "../Listings/TestsListing";
import AddTestForm from "../Forms/AddTestForm";
// Utils
import { getAuthHeader } from "../../utils/tokenUtils";

const Tank = ({ tokenState, match }) => {
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

  return (
    <Dashboard>
      <h2>{tankState.name}</h2>
      <AddTestForm
        tankID={tankID}
        tokenState={tokenState}
        testsState={testsState}
        setTestsState={setTestsState}
      />
      <TestsListing testsState={testsState} />
    </Dashboard>
  );
};

export default Tank;
