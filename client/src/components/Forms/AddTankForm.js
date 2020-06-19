import React, {useState} from 'react';
import axios from 'axios';
// import setCookie from '../../utils/utils';
import getBearerToken from '../../utils/getBearerToken';

const AddTankForm = ({setUserAuth, userAuthState})=> {

    // console.log(userToken)
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const bearerToken = getBearerToken(userAuthState);
        axios.post('/tanks', formState, bearerToken ).then(res => {
            console.log(res)
        }).catch(error => {
            console.log(error)
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
        name: '',
        sizeX: '',
        sizeY: '',
        sizeZ: '',
        aquariumType: ''
    }

    const [formState, setFormState] = useState(initialState);

    return (
        <form onSubmit={onSubmitHandler}>
            <input onChange={onChangeHandler} name="name" type="text" placeholder="tank name"/>
            <input onChange={onChangeHandler} name="sizeX" type="number" placeholder="Size on the X axis"/>
            <input onChange={onChangeHandler} name="sizeY" type="number" placeholder="Size on the Y axis"/>
            <input onChange={onChangeHandler} name="sizeZ" type="number" placeholder="Size on the Z axis"/>
            <input onChange={onChangeHandler} name="aquariumType" type="text" placeholder="aquarium type"/>
            <input type="submit" value="Add tank" />
        </form>
    )
}

export default AddTankForm;