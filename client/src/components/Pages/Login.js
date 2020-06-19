import React, {Fragment} from 'react';
import RegisterForm from '../Forms/RegisterForm';
import LoginForm from '../Forms/LoginForm';

const Login = ({setUserAuth}) => {
    return (
        <Fragment>
            <RegisterForm setUserAuthStateHandler />
            <LoginForm setUserAuthStateHandler />
        </Fragment>
    )
}

export default Login;