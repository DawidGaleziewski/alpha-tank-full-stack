import { pipe, getCookie } from "./generalUtils";

const getAuthHeader = (tokenState) => {
  return pipe(
    getUserToken,
    formatBearerToken,
    formatAuthorizationHeader
  )(tokenState);
};

const formatAuthorizationHeader = (bearerToken) => {
  if (!bearerToken) {
    return null;
  }
  return {
    Authorization: bearerToken,
  };
};

const formatBearerToken = (userToken) => {
  if (!userToken) {
    return null;
  }
  const bearerToken = `Bearer ${userToken}`;
  return bearerToken;
};

const getUserToken = (tokenState) => {
  let userToken = null;

  if (tokenState) {
    console.log("utils token state is:", tokenState);
    userToken = tokenState;
  } else if (document.cookie.indexOf("token") !== -1) {
    try {
      // console.log("user token:", getCookie("token"));
      userToken = getCookie("token");
    } catch (error) {
      console.log(error);
    }
  }
  return userToken;
};

export {
  getAuthHeader,
  formatAuthorizationHeader,
  formatBearerToken,
  getUserToken,
};
