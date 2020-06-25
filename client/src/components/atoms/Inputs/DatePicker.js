import React from "react";
import { css, jsx } from "@emotion/core";

/** @jsx jsx */
const inputWrapperStyle = css`
  min-width: 18rem;
  position: relative;

  & > label {
    position: absolute;
    left: 0.8rem;
    top: 50%;
    font-size: 1.6rem;
    /* transform: translate(0, -50%); */
    transform: translate(-16%, -170%) scale(0.8);
    pointer-events: none;
    color: #92a2ae;
  }

  & > input {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    border-bottom: 1px solid #92a2ae;
    outline: none;
    display: block;
  }
`;

const DatePicker = ({ id, name, labelText, value, onChangeHandler }) => {
  return (
    <div
      className="input-slider-wrapper--date"
      css={inputWrapperStyle}
      className="inputWrapper"
    >
      <input
        id={id}
        type="date"
        name={name}
        onChange={onChangeHandler}
        value={value}
      />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
};

export default DatePicker;
