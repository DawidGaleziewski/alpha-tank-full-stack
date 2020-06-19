import React, {Fragment ,useState, useEffect} from 'react';
import axios from 'axios';
import getBearerToken from '../../utils/getBearerToken';

import TestsListing from '../Listings/TestsListing';
import AddTestForm from '../Forms/AddTestForm';


const Tank = ({userAuthState, tankID}) => {
    const [tankState, setTankState] = useState([]);
    const [testsState, setTestsState] = useState([]);

    useEffect(()=> {
        const bearerToken = getBearerToken(userAuthState);
        axios.get(`/tanks/${tankID}`, bearerToken ).then(res => {
            const {tank, tests} = res.data;
            console.log(tests)
            setTankState(tank);
            setTestsState(tests);
        })
    }, [userAuthState, tankID])

    return (
        <Fragment>
            <h2>{tankState.name}</h2>
            <TestsListing testsState={testsState} />
            <AddTestForm userAuthState={userAuthState} tankID={tankID} />
        </Fragment>
    )
}

export default Tank;