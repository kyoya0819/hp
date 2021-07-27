import React, { FC } from "react";

import scss from "./Contact.module.scss";
import Title from "components/Title/Title";

const Contact: FC = () => {

    return (
        <section className={ scss.contact }>
            <div className="inner">
                <Title>お問い合わせ / Contact</Title>
                <a href="mailto:kyoya0819@gmail.com" rel="noopener noreferrer" target="_blank">kyoya0819@gmail.com</a>
            </div>
        </section>
    );
};

export default Contact;