import React, {useState} from 'react';
import axios from 'axios';

const LoginForm = ({setUserAuth}) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('/users/login', formState).then(res => {
            const oldCookie = JSON.parse(document.cookie);
            const newCookie = {...oldCookie,...res.data};
            setUserAuth(newCookie);
            document.cookie = JSON.stringify(newCookie); 
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