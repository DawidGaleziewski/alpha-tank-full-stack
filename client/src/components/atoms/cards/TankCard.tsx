import React from "react";
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";

/** @jsx jsx */

const tankCardStyle = css`
  background-color: #fff;
  border-radius: 16px;
  list-style: none;
  box-shadow: -1px 1px 21px 10px rgba(240, 243, 248, 1);
  margin-bottom: 2rem;
  & .card-header {
    color: #7e84cc;
  }
`;

const linkStyle = css`
  text-decoration: none;
  padding: 2rem 4rem;
  display: block;
`;

const TankCard = ({
  tankData,
}: {
  tankData: { _id: string; name: string };
}) => {
  return (
    <li className="tank-card" css={tankCardStyle}>
      <Link css={linkStyle} to={`/tanks/${tankData._id}`}>
        <h3 className="card-header">{tankData.name}</h3>
      </Link>
    </li>
  );
};

export default TankCard;
