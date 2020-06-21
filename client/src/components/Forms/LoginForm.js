// Libs
import React, {useState} from 'react';
import axios from 'axios';
// Components
// Utils
import {setCookie} from '../../utils/generalUtils';

const LoginForm = ({setTokenState, setIsUserLoggedIn}) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('/users/login', formState).then(res => {
            const {data:{token}} = res;
            setTokenState(token);
            setIsUserLoggedIn(true);
            setCookie({token});
        })
    }
    const onChangeHandler = (event) => {
        const {target:{value, name}} = event;
        setFormState({
            ...formState,
            [name] : value 
        })
    }

    const initialState = {
        email: '',
        password: ''
    }

    const [formState, setFormState] = useState(initialState);

    return (
        <form onSubmit={onSubmitHandler}> 
            <input onChange={onChangeHandler} name="email" type="email" placeholder="email" />
            <input onChange={onChangeHandler} name="password" type="password" placeholder="password" />
            <input onChange={onChangeHandler} type="submit" value="login"/>
        </form>
    )
}

export default LoginForm;