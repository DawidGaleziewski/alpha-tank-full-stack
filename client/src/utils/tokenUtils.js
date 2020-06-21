import {pipe} from './generalUtils';

const getAuthHeader = (tokenState) => {
    return pipe(getUserToken, formatBearerToken, formatAuthorizationHeader)(tokenState)
}

const formatAuthorizationHeader = (bearerToken) => {
    if(!bearerToken){
        return null;
    }
    return {
        Authorization: bearerToken
    }
}

const formatBearerToken = (userToken) => {
    if(!userToken) {
        return null;
    }
    const bearerToken = `Bearer ${userToken}`;
    return bearerToken
}

const getUserToken = (tokenState) => {
    let userToken = null;
    try {
        userToken = tokenState ? tokenState : JSON.parse(document.cookie).token;
    } catch(error){
        console.log(error)
    }
    return userToken
}

export {
    getAuthHeader,
    formatAuthorizationHeader,
    formatBearerToken,
    getUserToken
};