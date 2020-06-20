import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

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
            </ul>
        </nav>
    </header>
}

export default Header;