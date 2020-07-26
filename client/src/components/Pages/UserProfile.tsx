import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";

const UserProfile = ({
  userAccountInfo,
  isUserLoggedIn,
}: {
  userAccountInfo: any;
  isUserLoggedIn: boolean;
}) => {
  console.log("profile ingfo is:", userAccountInfo);

  if (isUserLoggedIn) {
    const { name, email, surname, age, date } = userAccountInfo;
    return (
      <Fragment>
        <h2>Hello {name}</h2>
        <p>Email: {email} </p>
        <p>
          Name and surname: {name} {surname}
        </p>
        <p>age: {age}</p>
        <p>account created date: {date} </p>
      </Fragment>
    );
  } else {
    return <Redirect to={"/"} />;
  }
};

export default UserProfile;
