import React, {useState} from 'react';
import axios from 'axios';
import setCookie from '../../utils/utils';

const LoginForm = ({setUserAuth, setIsUserLoggedIn}) => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('/users/login', formState).then(res => {
            const {data} = res
            console.log(setUserAuth)
            setUserAuth(data);
            setIsUserLoggedIn(true);
            setCookie(data);
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