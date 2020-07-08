import React, { Fragment, useState } from "react";
import { css, jsx } from "@emotion/core";
import Header from "../Header/Header";
import BarAlert from "../atoms/alerts/BarAlert";

/** @jsx jsx */
const mainContainerStyle = css`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
`;

const MainContainer = ({
  setIsUserLoggedIn,
  children,
  setTokenState,
  alerts,
  removeAlert,
}) => {
  return (
    <Fragment>
      <Header
        setIsUserLoggedIn={setIsUserLoggedIn}
        setTokenState={setTokenState}
      />
      {alerts.map((alert) => (
        <BarAlert
          key={alert.id}
          alertType={alert.type}
          alertText={alert.text}
          removeAlert={removeAlert}
          id={alert.id}
        />
      ))}
      {/* <BarAlert
        alertText={"Danger: something went wrong!"}
        alertType={"danger"}
      /> */}
      <main css={mainContainerStyle}>{children}</main>
    </Fragment>
  );
};

export default MainContainer;
