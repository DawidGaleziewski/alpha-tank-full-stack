import React, {Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import AddTankForm from '../Forms/AddTankForm';
import TankListing from '../Listings/TanksListing';

const TanksHome = ({setUserAuth, userAuthState, isUserLoggedIn }) => {
    if(isUserLoggedIn){
        return(
            <Fragment>
                <AddTankForm setUserAuth={setUserAuth} userAuthState={userAuthState} />
                <TankListing userAuthState={userAuthState} />
            </Fragment>
        )
    } else {
        return <Redirect to={'/'} />
    }

}


export default TanksHome;