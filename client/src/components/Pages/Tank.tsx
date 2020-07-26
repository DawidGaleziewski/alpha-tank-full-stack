import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
// Components
import Dashboard from "../Dashboard/Dashboard";
import TestsListing from "../Listings/TestsListing";
import AddTestForm from "../Forms/AddTestForm";
import LoadingDefault from "../atoms/loadings/LoadingDefault";
// Utils
import { getAuthHeader } from "../../utils/tokenUtils";

const Tank = ({
  isUserLoggedIn,
  tokenState,
  match,
  addAlert,
}: {
  isUserLoggedIn: boolean;
  tokenState: string | null;
  match: any;
  addAlert: (alertType: any, alertText: any) => void;
}) => {
  const {
    params: { tankID },
  } = match;
  const [tankState, setTankState] = useState<any>([]);
  const [testsState, setTestsState] = useState<any | any>([]);
  const [isLoading, setIsloading] = useState<any>(false);

  const removeTestFromState = (testID: string) => {
    setTestsState(testsState.filter((test: any) => test._id !== testID));
  };

  const populateTankAndTestsInformation = async (
    tokenState: string,
    tankID: string
  ) => {
    const authHeader = getAuthHeader(tokenState);
    setIsloading(true);
    const {
      data: { tank, tests },
    } = await axios.get(`/tanks/${tankID}`, { headers: authHeader });
    console.log(tests);
    setTankState(tank);
    setTestsState(tests);
    setIsloading(false);
  };

  useEffect(() => {
    if (tokenState) {
      populateTankAndTestsInformation(tokenState, tankID);
    }
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
        {isLoading ? (
          <LoadingDefault />
        ) : (
          <TestsListing
            testsState={testsState}
            tokenState={tokenState}
            setTestsState={setTestsState}
            removeTestFromState={removeTestFromState}
          />
        )}
      </Dashboard>
    );
  } else {
    return <Redirect to={"/"} />;
  }
};

export default Tank;
