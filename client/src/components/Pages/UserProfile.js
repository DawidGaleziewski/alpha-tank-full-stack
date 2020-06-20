import React, {Fragment, useEffect} from 'react';
import axios from 'axios';
import getBearerToken from '../../utils/getBearerToken';
import {Redirect} from 'react-router-dom';

const UserProfile = ({userAuthState, setUserAuthState, isUserLoggedIn, setIsUserLoggedIn}) => {

    useEffect(()=> {
        if(!isUserLoggedIn){
          const bearerToken = getBearerToken(userAuthState);
          axios.get('/users/me', bearerToken).then(res => {
            const token = bearerToken.headers.Authorization.replace('Bearer ', '');
            setUserAuthState({data: res.data, token});
            setIsUserLoggedIn(true);
            console.log('user auth state is', userAuthState)
          })
        }
      }, [isUserLoggedIn, userAuthState])

    // console.log(userAuthState)
   
    if(isUserLoggedIn){
         const {name, email, surname, age, date} = userAuthState.data;
        return (
            <Fragment>
                <h2>Hello {name}</h2>
                <p>Email: {email} </p>
                <p>Name and surname: {name} {surname}</p>
                <p>age: {age}</p>
                <p>account created date: {date} </p>
            </Fragment>
        )
    } else {
        return <Redirect to={'/'} />
    }

}

export default UserProfile;