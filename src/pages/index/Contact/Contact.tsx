import React from 'react';

import scss from './Contact.module.scss';

const Contact = () => {

    return (
        <div className={ scss.contact }>
            <div className="inner">
                <h2>お問い合わせ / Contact</h2>
                <a href="mailto:kyoya0819@gmail.com" rel="noopener noreferrer" target="_blank">kyoya0819@gmail.com</a>
            </div>
        </div>
    );
};

export default Contact;