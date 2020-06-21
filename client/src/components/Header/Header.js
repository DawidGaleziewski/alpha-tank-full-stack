import React from 'react';
import {Link} from 'react-router-dom';
import LogoutButton from '../atoms/LogoutButton/LogoutButton';

const Header = ({setIsUserLoggedIn, setTokenState}) => {

    return <header>
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/tanks'}>My tanks</Link>
                </li>
                <li>
                    <Link to={'/me'}>My Profile</Link>
                </li>
                <li>
                    <LogoutButton btnText={'Logout'} setIsUserLoggedIn={setIsUserLoggedIn} setTokenState={setTokenState} />
                </li>
            </ul>
        </nav>
    </header>
}

export default Header;