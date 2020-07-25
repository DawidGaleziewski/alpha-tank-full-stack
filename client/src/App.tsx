// Libs
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { Global, css, jsx } from "@emotion/core";
import ReactGa from "react-ga";
import { v4 as uuidv4 } from "uuid";

// Components
import MainContainer from "./components/MainContainer/MainContainer";
import Tank from "./components/Pages/Tank";
import Login from "./components/Pages/Login";
import TanksHome from "./components/Pages/TanksHome";
import UserProfile from "./components/Pages/UserProfile";
import About from "./components/Pages/About";
// Utils
import {
  getUserToken,
  formatAuthorizationHeader,
  formatBearerToken,
} from "./utils/tokenUtils";
import { pipe, deepCopy } from "./utils/generalUtils";

/** @jsx jsx */
const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
  }
  body {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    background-color: #f0f3f8;
    margin: 0;
    padding: 0;
  }
  ul,
  li,
  ol {
    margin: 0;
    padding-inline-start: 0;
  }
`;

function App() {
  const [tokenState, setTokenState] = useState<string | null>(null);
  const [userAccountInfo, setUserAccountInfo] = useState({});
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [alerts, setAlerts] = useState<any>([]);
  const loginOnMount = async (isUserLoggedIn: any, tokenState: any) => {
    const token = getUserToken(tokenState);
    // console.log("token is:", token);
    if (!isUserLoggedIn && token) {
      console.log(token);
      const authHeader = pipe(
        formatBearerToken,
        formatAuthorizationHeader
      )(token);
      console.log(authHeader);
      try {
        const { data } = await axios.get("/users/me", { headers: authHeader });
        setTokenState(token);
        setIsUserLoggedIn(true);
        setUserAccountInfo(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    ReactGa.initialize("UA-172045582-1");
    //report page view
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  useEffect(() => {
    loginOnMount(isUserLoggedIn, tokenState);
  }, [isUserLoggedIn]);

  // useEffect(() => {}, [alerts]);

  const addAlert = (
    alertType: any,
    alertText: any,
    alertTimeMilliseconds: any
  ) => {
    const id = uuidv4();
    // const interval = expireAlertInterval(id, alertTimeMilliseconds);
    const updatedAlerts = [
      ...alerts,
      {
        text: alertText,
        type: alertType,
        id: id,
        // interval: interval,
      },
    ];
    setAlerts(updatedAlerts);
  };

  const lastTimeout = useRef<any>(null);

  useEffect(() => {
    if (alerts.length > 0) {
      clearTimeout(lastTimeout.current);
      const timeoutFn = setTimeout(() => {
        removeAlert(alerts[alerts.length - 1].id);
      }, 3000);
      lastTimeout.current = timeoutFn;
    }
  }, [alerts]);

  const removeAlert = (id: any) => {
    console.log(id);
    setAlerts([...alerts].filter((alert) => alert.id !== id));
  };

  return (
    <div className="App">
      <Global styles={globalStyles} />
      <Router>
        <MainContainer
          setIsUserLoggedIn={setIsUserLoggedIn}
          setTokenState={setTokenState}
          // setAlerts={setAlerts}
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
                // tokenState={tokenState}
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
          {/* Started working on fixing this route */}
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
                // setIsUserLoggedIn={setIsUserLoggedIn}
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
