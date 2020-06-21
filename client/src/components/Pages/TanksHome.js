import React, {Fragment, useState, useEffect, useRef} from 'react';
import {Redirect} from 'react-router-dom';
import AddTankForm from '../Forms/AddTankForm';
import TankListing from '../Listings/TanksListing';
import axios from 'axios';
import { getAuthHeader} from '../../utils/tokenUtils';


const TanksHome = ({isUserLoggedIn, tokenState }) => {

    const [tanksListingState, setTanksListingState] = useState([]);
    const populateTanksListing = async (tokenState) => {
        const authHeader = getAuthHeader(tokenState);
        try {
            const {data} = await axios.get('/tanks', {headers: authHeader});
            setTanksListingState(data);
        } catch(error){
            console.log(error)
        }
    }
    useEffect(()=> {
        isUserLoggedIn && populateTanksListing();
    }, [isUserLoggedIn, tokenState])

    if(isUserLoggedIn){
        return(
            <Fragment>
                <AddTankForm tokenState={tokenState} setTanksListingState={setTanksListingState} tanksListingState={tanksListingState}/>
                <TankListing tanksListingState={tanksListingState} />
            </Fragment>
        )
    } else {
        return <Redirect to={'/'} />
    }

}


export default TanksHome;