const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const setCookie = (data) => {
    let newCookieObj = '';
    try {
        newCookieObj = document.cookie.length > 0 ? {...JSON.parse(document.cookie), ...data} : {...data};
        document.cookie = JSON.stringify(newCookieObj);
    } catch(error){
        console.log('Error setting cookies')
    }
    return newCookieObj; 
}

export {
    pipe,
    setCookie
}