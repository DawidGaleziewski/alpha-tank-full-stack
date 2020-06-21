import React, {Fragment} from 'react';
import RegisterForm from '../Forms/RegisterForm';
import LoginForm from '../Forms/LoginForm';
import {Redirect} from 'react-router-dom';

const Login = ({setIsUserLoggedIn, setTokenState, isUserLoggedIn}) => {

    if(isUserLoggedIn){
        return <Redirect to={'/tanks'} />
    } else {
        return (
            <Fragment>
                <RegisterForm setIsUserLoggedIn={setIsUserLoggedIn} setTokenState={setTokenState} />
                <LoginForm setIsUserLoggedIn={setIsUserLoggedIn} setTokenState={setTokenState} />
            </Fragment>
        )   
    }
}

export default Login;