import React from "react";
import { deleteFromCookie } from "../../../utils/generalUtils";
import { css, jsx } from "@emotion/core";

/**@jsx jsx */

const buttonStyle = css`
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #7e84cc;
  border-radius: 16px;
  color: #7e84cc;
  cursor: pointer;
  margin-left: auto;
`;

const LogoutButton = ({ btnText, setIsUserLoggedIn, setTokenState }) => {
  const onClickHandler = () => {
    deleteFromCookie("token");
    setIsUserLoggedIn(false);
    setTokenState(null);
  };

  return (
    <button css={buttonStyle} onClick={onClickHandler}>
      {btnText}
    </button>
  );
};

export default LogoutButton;
