const getBearerToken = (userAuthState) => {
    const bearerToken = {headers: {Authorization: null}, cancelToken:null};
    try {
        const userToken = userAuthState ? userAuthState.token : JSON.parse(document.cookie).token;
        bearerToken.headers.Authorization = `Bearer ${userToken}`
    } catch(error){
        console.log(error)
    }

    return bearerToken
}

export default getBearerToken;