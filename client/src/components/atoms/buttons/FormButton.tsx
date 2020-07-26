import React from "react";
import { css, jsx } from "@emotion/core";
import ReactGA from "react-ga";

/** @jsx jsx */
const buttonStyle = css`
  background-color: #9da7b4;
  border: none;
  padding: 0.8rem;
  border-radius: 2px;
  cursor: pointer;
  text-transform: uppercase;
  color: #ffffff;
  display: block;
  width: 100%;
`;

const FormButton = ({
  btnText,
  autoFocus,
}: {
  btnText: string;
  autoFocus: boolean;
}) => {
  const googleAnalyticsHandler = () => {
    ReactGA.event({
      category: "Button",
      action: `Click button ${btnText} from ${
        window.location.pathname + window.location.search
      }`,
    });
  };
  return (
    <button
      onClick={googleAnalyticsHandler}
      autoFocus={autoFocus}
      css={buttonStyle}
    >
      {btnText}
    </button>
  );
};

export default FormButton;
