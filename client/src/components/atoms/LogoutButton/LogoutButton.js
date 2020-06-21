import React from 'react';
import {deleteFromCookie} from '../../../utils/generalUtils'

const LogoutButton = ({btnText, setIsUserLoggedIn, setTokenState})=> {
    const onClickHandler = () => {
        deleteFromCookie('token');
        setIsUserLoggedIn(false);
        setTokenState(null)
    }

    return (
        <button onClick={onClickHandler}>
            {btnText}
        </button>
    )
}

export default LogoutButton;