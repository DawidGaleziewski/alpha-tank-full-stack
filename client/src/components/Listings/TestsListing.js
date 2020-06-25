import React from "react";
import { css, jsx } from "@emotion/core";

/** @jsx jsx */

const tableStyle = css`
  /* display: block; */
  font-size: 1.6rem;
  text-align: left;
  background-color: #fff;
  padding: 2rem 4rem;
  border-collapse: collapse;

  & thead tr {
    font-weight: 700;
    color: #7e84cc;
    border-bottom: 1px solid #b4b8e1;
  }

  th,
  td {
    padding: 1.6rem;
    /* &:first-of-type {
      padding: 0.8rem 0.8rem 0.8rem 0;
    } */
    &:nth-of-type(2n + 1) {
      background-color: #f8f8fc;
    }
  }
`;

const TestsListing = ({ testsState }) => {
  return (
    <table css={tableStyle}>
      <thead>
        <tr>
          <th>Date of test</th>
          <th>NH3</th>
          <th>NH4</th>
          <th>NO3</th>
          <th>PH</th>
          <th>temperature (celc)</th>
        </tr>
      </thead>
      <tbody>
        {testsState.map((test) => (
          <tr key={test._id}>
            <td>{test.dateOfTest}</td>
            <td>{test.nh3}</td>
            <td>{test.nh4}</td>
            <td>{test.no3}</td>
            <td>{test.ph}</td>
            <td>{test.tempCelc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TestsListing;
