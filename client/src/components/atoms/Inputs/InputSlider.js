import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
/** @jsx jsx */

const inputWrapperStyle = css`
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
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
`;

const InputSlider = () => {
  const [isValueFilled, setIsValueFilled] = useState(false);

  const onChangeHandler = (event) => {
    setIsValueFilled(event.target.value.length > 0);
    console.log(isValueFilled);
  };

  return (
    <div css={inputWrapperStyle}>
      <input
        onChange={onChangeHandler}
        css={inputStyle}
        id="test"
        type="text"
        name="test"
        min="1"
      />
      <label css={labelStyle({ isValueFilled })} htmlFor="test">
        Test input
      </label>
    </div>
  );
};

export default InputSlider;
