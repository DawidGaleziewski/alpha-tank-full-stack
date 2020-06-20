import React, {Fragment} from 'react';
import RegisterForm from '../Forms/RegisterForm';
import LoginForm from '../Forms/LoginForm';
import {Redirect} from 'react-router-dom';

const Login = ({setUserAuth, userAuthState, isUserLoggedIn, setIsUserLoggedIn}) => {

    if(isUserLoggedIn){
        return <Redirect to={'/tanks'} />
    } else {
        return (
            <Fragment>
                <RegisterForm setUserAuth={setUserAuth} setIsUserLoggedIn={setIsUserLoggedIn} />
                <LoginForm setUserAuth={setUserAuth} setIsUserLoggedIn={setIsUserLoggedIn} />
            </Fragment>
        )   
    }

}

export default Login;