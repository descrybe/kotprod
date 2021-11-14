import React from 'react';

const HeaderMenu = ({ items }) => {
    return (
        <ul className='header-menu'>
            {items.map(item => {
                return (
                    <li key={item.title} className='header-menu__item'>
                        <a href={item.url} className='header-menu__item-link'>{item.title.toUpperCase()}</a>
                    </li>
                )
            })}
        </ul>
    )
}

export default HeaderMenu;
