import React from 'react';
import HeaderMenu from './header-menu';
import '../scss/header.scss';
import logo from '../../../assets/white-logo.png'

const menuItems = [
    {
        title: 'Наши проекты',
        url: '#ourprojects'
    },
    {
        title: 'О нас',
        url: '#aboutus'
    },
    {
        title: 'Контакты',
        url: '#contacts'
    },
];

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-wrapper'>
                <img src={logo} className='logo'/>
            </div>
            <HeaderMenu items={menuItems}/>
        </div>
    )
};

export default Header;