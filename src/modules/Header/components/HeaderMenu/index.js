import React from 'react';

const HeaderMenu = ({ items }) => {
    const onClickHandler = () => {
        window.scrollTo({
            top: 1000,
            behavior: 'smooth',
        });
    };

    return (
        <ul className='header-menu'>
            {items.map(({ title }) => {
                return (
                    <li key={title} className='header-menu__item'>
                        <div
                            onClick={onClickHandler}
                            className='header-menu__item-link'>
                            {title.toUpperCase()}
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default HeaderMenu;
