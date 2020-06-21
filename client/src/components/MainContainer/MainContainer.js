import React, {Fragment} from 'react';
import Header from '../Header/Header';

const MainContainer = ({setIsUserLoggedIn, children, setTokenState})=> {

    return (
        <Fragment>
            <Header setIsUserLoggedIn={setIsUserLoggedIn} setTokenState={setTokenState} />
            {children}
        </Fragment>
    )
}

export default MainContainer;