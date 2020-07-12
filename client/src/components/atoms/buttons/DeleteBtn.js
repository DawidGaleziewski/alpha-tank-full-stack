import React, { useState, Fragment } from "react";
import { jsx, css } from "@emotion/core";
/** @jsx jsx */
const buttonStyle = css`
  border-radius: 2px;
  border: 0;
  color: #fff;
  cursor: pointer;
  padding: 0.8rem;
`;

const deleteBtnStyle = css`
  ${buttonStyle}
  background-color: #db2828;
`;

const modalStyle = css`
  padding: 2rem 4rem;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: -1px 1px 21px 10px rgba(240, 243, 248, 1);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const DeleteBtn = ({ btnText, modalText, onConfimHandler }) => {
  const toggleModalHandler = () => {
    setIsToggled(!isToggled);
  };
  const [isToggled, setIsToggled] = useState(false);
  return (
    <Fragment>
      <button onClick={toggleModalHandler} css={deleteBtnStyle}>
        {btnText}
      </button>
      {isToggled ? (
        <div css={modalStyle}>
          {modalText}{" "}
          <button onClick={onConfimHandler} css={deleteBtnStyle}>
            Yes
          </button>
          <button onClick={toggleModalHandler} css={buttonStyle}>
            No
          </button>
        </div>
      ) : null}
    </Fragment>
  );
};

export default DeleteBtn;
