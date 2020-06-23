import React from 'react';
import {css, jsx} from '@emotion/core';
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
`;

const labelStyle = css`
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 1.6rem;
    transform: translate(-50%, -50%);
    color: #92a2ae;
    input:focus + & {
        transform: translate(-50%, -150%) scale(0.8);
    }
    transition: transform ease-in 0.3s;
`;

const InputSlider = () => {

    return (
        <div css={inputWrapperStyle}>
            <input css={inputStyle} id="test" type="text" name="test" />
            <label css={labelStyle} htmlFor="test">Test input</label>
        </div>
    )
}

export default InputSlider;