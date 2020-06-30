import React from "react";
import { Link } from "react-router-dom";
import { css, jsx } from "@emotion/core";
// Components
import TankCard from "../atoms/cards/TankCard";

/** @jsx jsx */

const tanksListingStyle = css`
  /* padding: 2rem 4rem; */
  /* background-color: #fff; */
  /* border-radius: 0 0 16px 16px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > .tank-card {
    flex-basis: calc(50% - 2rem);
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const TanksListing = ({ tanksListingState }) => {
  return (
    <ul css={tanksListingStyle}>
      {tanksListingState.map((tank) => (
        <TankCard key={tank._id} tankData={tank} />
      ))}
    </ul>
  );
};

export default TanksListing;
