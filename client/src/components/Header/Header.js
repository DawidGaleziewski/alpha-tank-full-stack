import React from "react";
import { Link } from "react-router-dom";
import { css, jsx } from "@emotion/core";
// Componets
import LogoutButton from "../atoms/LogoutButton/LogoutButton";

/**@jsx jsx */

const headerStyle = css`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const navbarStyle = css`
  background-color: #fff;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  /* padding: 2rem; */
  border-radius: 16px;
  padding: 0 2rem;

  & > ul {
    list-style: none;
    display: flex;
    & > li:last-of-type {
      margin-left: auto;
    }
  }
`;

const linkStyle = css`
  font-weight: 700;
  color: #7e84cc;
  text-decoration: none;
  padding: 2rem;
  padding-bottom: 1.5rem;
  display: block;
  border-bottom: 5px solid #fff;
  transition: all ease-in 0.3s;
  &:hover {
    border-bottom-color: #b0b3df;
  }
`;

const Header = ({ setIsUserLoggedIn, setTokenState }) => {
  return (
    <header css={headerStyle}>
      <nav css={navbarStyle}>
        <ul>
          <li>
            <Link css={linkStyle} to={"/"}>
              home
            </Link>
          </li>
          <li>
            <Link css={linkStyle} to={"/tanks"}>
              my tanks
            </Link>
          </li>
          <li>
            <Link css={linkStyle} to={"/me"}>
              my Profile
            </Link>
          </li>
          <li>
            <LogoutButton
              btnText={"Logout"}
              setIsUserLoggedIn={setIsUserLoggedIn}
              setTokenState={setTokenState}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
