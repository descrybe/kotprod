import React from 'react';
import '../scss/footer.scss';

const Footer = (props) => {
    const { city, phone, email, instagram } = props.contacts;
    return (
        <div id='footer'>
            <div className='contacts'>
                <h3 className='contacts__header'>КОНТАКТЫ</h3>
                <ul className='contacts__list'>
                    <li>{city}</li>
                    <li>тел. {phone}</li>
                    <li>электронная почта {email}</li>
                    <li>instagram {instagram}</li>
                </ul>
            </div>
        </div>
    )
};

export default Footer;