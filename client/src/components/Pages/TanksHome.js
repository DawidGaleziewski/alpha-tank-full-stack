import React, {Fragment} from 'react';

import AddTankForm from '../Forms/AddTankForm';
import TankListing from '../Listings/TanksListing';

const TanksHome = ({setUserAuth, userAuthState }) => {

    return(
        <Fragment>
            <AddTankForm setUserAuth={setUserAuth} userAuthState={userAuthState} />
            <TankListing userAuthState={userAuthState} />
        </Fragment>
    )
}


export default TanksHome;