import React from "react";
import { css, jsx } from "@emotion/core";
/** @jsx jsx */

const inputWrapperStyle = css`
  position: relative;
  display: inline-block;
`;

const inputStyle = css`
  padding: 0.8rem;
  border: none;
  border-bottom: 1px solid #92a2ae;
  outline: none;
  &:focus {
    border-bottom: 1px solid #5a95e6;
  }
`;

const labelStyle = ({ isValueFilled }) => css`
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 1.6rem;
  transform: ${isValueFilled
    ? "translate(-50%, -150%) scale(0.8)"
    : "translate(-50%, -50%)"};
  color: #92a2ae;
  input:focus + & {
    transform: translate(-50%, -150%) scale(0.8);
    color: #5a95e6;
  }
  transition: all ease-in 0.3s;
  pointer-events: none;
`;

const InputSlider = ({ id, type, name, labelText, value, onChange }) => {
  const isValueFilled = value.length > 0;

  return (
    <div className="input-slider-wrapper" css={inputWrapperStyle}>
      <input
        onChange={onChange}
        css={inputStyle}
        id={id}
        type={type}
        name={name}
        value={value}
      />
      <label css={labelStyle({ isValueFilled })} htmlFor={id}>
        {labelText}
      </label>
    </div>
  );
};

export default InputSlider;