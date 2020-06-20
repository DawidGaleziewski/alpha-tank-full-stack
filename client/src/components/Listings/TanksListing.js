import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import getBearerToken from '../../utils/getBearerToken';

const TanksListing = ({userAuthState}) => {
    const [tanksListingState, setTanksListingState] = useState([]);

    useEffect(()=> {
        const bearerToken = getBearerToken(userAuthState);
        axios.get('/tanks', bearerToken).then(res => {
            setTanksListingState(res.data)
            console.log(res.data)
        }).catch(error => {
            console.log(error)
        })
    }, [userAuthState])


    return (
        <ul> 
            {
            tanksListingState.map(tank => <li key={tank._id}>
                    <header>
                        <Link to={`/tanks/${tank._id}`} >
                            {tank.name}
                        </Link>
                    </header>
                </li>)
            }
        </ul>
    )
}

export default TanksListing