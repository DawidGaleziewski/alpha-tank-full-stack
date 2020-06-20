import React, {Fragment} from 'react';
import RegisterForm from '../Forms/RegisterForm';
import LoginForm from '../Forms/LoginForm';

const Login = ({setUserAuth}) => {
    return (
        <Fragment>
            <RegisterForm setUserAuth={setUserAuth} />
            <LoginForm setUserAuth={setUserAuth} />
        </Fragment>
    )
}

export default Login;