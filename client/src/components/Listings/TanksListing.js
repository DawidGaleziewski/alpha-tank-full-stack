import React from 'react';
import {Link} from 'react-router-dom';


const TanksListing = ({tanksListingState}) => {

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