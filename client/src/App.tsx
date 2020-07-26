// Libs
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Global } from "@emotion/core";
import ReactGa from "react-ga";
import { v4 as uuidv4 } from "uuid";

// Components
import MainContainer from "./components/MainContainer/MainContainer";
import Tank from "./components/Pages/Tank";
import Login from "./components/Pages/Login";
import TanksHome from "./components/Pages/TanksHome";
import UserProfile from "./components/Pages/UserProfile";
import About from "./components/Pages/About";

// Custome hooks
import useAutoLoginAttempt from "./hooks/useAutoLoginAttempt";
import useAlerts from "./hooks/useAlerts";

// Styles
import globalStyles from "./globalStyles";

function App() {
  const [tokenState, setTokenState] = useState<string | null>(null);
  const [userAccountInfo, setUserAccountInfo] = useState({});
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [alerts, setAlerts] = useState<any>([]);

  useEffect(() => {
    ReactGa.initialize("UA-172045582-1");
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  const removeAlert = (id: any) => {
    setAlerts([...alerts].filter((alert) => alert.id !== id));
  };
  useAlerts(alerts, removeAlert);

  useAutoLoginAttempt(
    isUserLoggedIn,
    tokenState,
    setTokenState,
    setIsUserLoggedIn,
    setUserAccountInfo
  );

  const addAlert = (alertType: any, alertText: any) => {
    const id = uuidv4();
    const updatedAlerts = [
      ...alerts,
      {
        text: alertText,
        type: alertType,
        id: id,
      },
    ];
    setAlerts(updatedAlerts);
  };

  return (
    <div className="App">
      <Global styles={globalStyles} />
      <Router>
        <MainContainer
          setIsUserLoggedIn={setIsUserLoggedIn}
          setTokenState={setTokenState}
          alerts={alerts}
          removeAlert={removeAlert}
        >
          <Route
            path="/"
            exact
            render={() => (
              <Login
                isUserLoggedIn={isUserLoggedIn}
                setIsUserLoggedIn={setIsUserLoggedIn}
                setTokenState={setTokenState}
                addAlert={addAlert}
              />
            )}
          />
          <Route
            path="/tanks"
            exact
            render={() => (
              <TanksHome
                isUserLoggedIn={isUserLoggedIn}
                tokenState={tokenState}
                addAlert={addAlert}
              />
            )}
          />
          <Route
            path="/tanks/:tankID"
            exact
            render={(props) => (
              <Tank
                {...props}
                tokenState={tokenState}
                isUserLoggedIn={isUserLoggedIn}
                addAlert={addAlert}
              />
            )}
          />
          <Route
            path="/me"
            // exec
            render={() => (
              <UserProfile
                userAccountInfo={userAccountInfo}
                isUserLoggedIn={isUserLoggedIn}
              />
            )}
          />
          <Route path="/about" exec component={About} />
        </MainContainer>
      </Router>
    </div>
  );
}

export default App;
