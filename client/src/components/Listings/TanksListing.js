import React from 'react';

const TanksListing = (tanks) => {

    return (<ul> 
        {tanks.map(tank => {
            <li>Tank</li>
        })}
    </ul>)
}

export default TanksListing