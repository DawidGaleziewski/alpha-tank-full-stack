import React, {Fragment} from 'react';
import Header from '../Header/Header';

const MainContainer = ({children})=> {

    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    )
}

export default MainContainer;