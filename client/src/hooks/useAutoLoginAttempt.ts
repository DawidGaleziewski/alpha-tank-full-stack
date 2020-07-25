// Libraries
import React, { useEffect } from "react";
import axios from "axios";

// Utils
import {
  getUserToken,
  formatAuthorizationHeader,
  formatBearerToken,
} from "../utils/tokenUtils";
import { pipe, deepCopy } from "../utils/generalUtils";

const loginOnMount = async (
  isUserLoggedIn: boolean,
  tokenState: string | null,
  setTokenState: Function,
  setIsUserLoggedIn: Function,
  setUserAccountInfo: Function
) => {
  const token = getUserToken(tokenState);
  // console.log("token is:", token);
  if (!isUserLoggedIn && token) {
    console.log(token);
    const authHeader = pipe(
      formatBearerToken,
      formatAuthorizationHeader
    )(token);
    console.log(authHeader);
    try {
      const { data } = await axios.get("/users/me", { headers: authHeader });
      setTokenState(token);
      setIsUserLoggedIn(true);
      setUserAccountInfo(data);
    } catch (error) {
      console.log(error);
    }
  }
};

const useAutoLoginAttempt = (
  isUserLoggedIn: boolean,
  tokenState: string | null,
  setTokenState: Function,
  setIsUserLoggedIn: Function,
  setUserAccountInfo: Function
) => {
  useEffect(() => {
    loginOnMount(
      isUserLoggedIn,
      tokenState,
      setTokenState,
      setIsUserLoggedIn,
      setUserAccountInfo
    );
  }, [isUserLoggedIn]);
};

export default useAutoLoginAttempt;
