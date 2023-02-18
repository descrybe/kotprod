import React from 'react';
import HeaderMenu from './components/HeaderMenu';

import { menuItems } from './constants/items';

import logo from '../../assets/white-logo_small.png';
import './index.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-wrapper'>
                <img src={logo} className='logo' alt='main-frame' />
            </div>
            <HeaderMenu items={menuItems} />
        </div>
    )
};

export default Header;