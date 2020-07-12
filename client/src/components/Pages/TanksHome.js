// Libs
import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
// Components
import Dashboard from "../Dashboard/Dashboard";
import AddTankForm from "../Forms/AddTankForm";
import TankListing from "../Listings/TanksListing";
import LoadingDefault from "../atoms/loadings/LoadingDefault";
// Utils
import { getAuthHeader } from "../../utils/tokenUtils";

const TanksHome = ({ isUserLoggedIn, tokenState, addAlert }) => {
  const [tanksListingState, setTanksListingState] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const populateTanksListing = async (tokenState) => {
    const authHeader = getAuthHeader(tokenState);
    try {
      setIsloading(true);
      const { data } = await axios.get("/tanks", { headers: authHeader });
      setTanksListingState(data);
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    isUserLoggedIn && populateTanksListing();
  }, [isUserLoggedIn, tokenState]);

  if (isUserLoggedIn) {
    return (
      <Fragment>
        <Dashboard>
          <AddTankForm
            tokenState={tokenState}
            setTanksListingState={setTanksListingState}
            tanksListingState={tanksListingState}
            addAlert={addAlert}
          />
          {isLoading ? (
            <LoadingDefault />
          ) : (
            <TankListing tanksListingState={tanksListingState} />
          )}
        </Dashboard>
      </Fragment>
    );
  } else {
    return <Redirect to={"/"} />;
  }
};

export default TanksHome;
