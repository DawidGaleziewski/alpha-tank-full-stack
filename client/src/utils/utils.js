const setCookie = (data) => {
    const newCookieObj = document.cookie.length > 0 ? {...JSON.parse(document.cookie), ...data} : {...data};
    document.cookie = JSON.stringify(newCookieObj);
    return newCookieObj; 
}

export default setCookie