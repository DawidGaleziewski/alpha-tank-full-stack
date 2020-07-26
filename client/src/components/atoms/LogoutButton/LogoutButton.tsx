import React from "react";
import { deleteFromCookie } from "../../../utils/generalUtils";
import { css, jsx } from "@emotion/core";

/**@jsx jsx */

const buttonStyle = css`
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #7e84cc;
  padding: 0.8rem 4rem;
  border-radius: 16px;
  color: #7e84cc;
  cursor: pointer;
  margin-left: auto;
  font-size: 1.2rem;
`;

const LogoutButton = ({
  btnText,
  setIsUserLoggedIn,
  setTokenState,
}: {
  btnText: string;
  setIsUserLoggedIn: (isLogged: boolean) => {};
  setTokenState: (tokenState: null | string) => {};
}) => {
  const onClickHandler = () => {
    deleteFromCookie("token");
    setIsUserLoggedIn(false);
    setTokenState(null);
  };

  return (
    <button
      className="logout-button"
      css={buttonStyle}
      onClick={onClickHandler}
    >
      {btnText}
    </button>
  );
};

export default LogoutButton;
