import React, {Fragment, useState, useEffect, useRef} from 'react';
import {Redirect} from 'react-router-dom';
import AddTankForm from '../Forms/AddTankForm';
import TankListing from '../Listings/TanksListing';
import getBearerToken from '../../utils/getBearerToken';
import axios from 'axios';


const CancelToken = axios.CancelToken;

const TanksHome = ({setUserAuth, userAuthState, isUserLoggedIn }) => {
    const [tanksListingState, setTanksListingState] = useState([]);

    const cancelSource = useRef(null);
    useEffect(()=> {
        cancelSource.current = CancelToken.source()
        const bearerToken = getBearerToken(userAuthState);
        bearerToken[cancelToken] = cancelSource.current;
        console.log(bearerToken)
        axios.get('/tanks', bearerToken).then(res => {
            setTanksListingState(res.data)
        }).catch(error => {
            console.log(error)
        })

        return ()=> {
            cancelSource.current.cancel()
        }
    }, [userAuthState])

    if(isUserLoggedIn){
        return(
            <Fragment>
                <AddTankForm setUserAuth={setUserAuth} userAuthState={userAuthState}  setTanksListingState={setTanksListingState} tanksListingState={tanksListingState}/>
                <TankListing tanksListingState={tanksListingState} />
            </Fragment>
        )
    } else {
        return <Redirect to={'/'} />
    }

}


export default TanksHome;