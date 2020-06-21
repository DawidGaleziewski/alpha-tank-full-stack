import React, {useState} from 'react';
import axios from 'axios';
import setCookie from '../../utils/utils';


const RegisterForm = ({ setIsUserLoggedIn, setTokenState}) => {
    const initialState = {
        email: '',
        password: '',
        name: '',
        surname: '',
        age: ''
    }
    const [formState, setFormState] = useState(initialState);
    const onSubmitHandler = event => {
        event.preventDefault();
        axios.post('/users', formState).then(res => {
            const {data:{token}} = res
            setIsUserLoggedIn(true);
            setTokenState(token)
            setCookie({token});
        })
    }
    const onChangeHandler = event => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setFormState({
            ...formState,
            [event.target.name]: value
        })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input name="email" onChange={onChangeHandler} value={formState.email} type="email" placeholder="email"/>
            <input name="password" onChange={onChangeHandler} type="password" placeholder="password" />
            <input name="name" onChange={onChangeHandler} type="text" placeholder="name" />
            <input name="surname" onChange={onChangeHandler} type="text" placeholder="surname" />
            <input name="age" onChange={onChangeHandler} type="number" placeholder="age"/>
            <input type="submit" value="register"/>
        </form>
    )
}

export default RegisterForm