import React, {Fragment} from 'react';
import RegisterForm from '../Forms/RegisterForm';
import LoginForm from '../Forms/LoginForm';
import {Redirect} from 'react-router-dom';

const Login = ({setUserAuth, userAuthState}) => {

    if(true){
        return <Redirect to={'/tanks'} />
    } else {
        return (
            <Fragment>
                <RegisterForm setUserAuth={setUserAuth} />
                <LoginForm setUserAuth={setUserAuth} />
            </Fragment>
        )   
    }

}

export default Login;