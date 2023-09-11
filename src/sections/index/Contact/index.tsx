import React, { FC } from "react";

import scss from "./index.module.scss";

const Contact: FC = () => {

    return (
        <section className={ scss.contact }>
            <div className="inner">

                <h2>Contact & Links</h2>
                <p>
                    基本高速返信を心がけています。
                </p>

                <ul>
                    <li>
                        <a href="mailto:kyoya0819@gmail.com" className={ scss.link }>
                            <span>Email</span>
                            <div>kyoya0819@gmail.com</div>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/kyoya0819" className={ scss.link } target="_blank" rel="noopener noreferrer">
                            <span>Twitter</span>
                            <div>@kyoya0819</div>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/kyoya0819" className={ scss.link } target="_blank" rel="noopener noreferrer">
                            <span>GitHub</span>
                            <div>@kyoya0819</div>
                        </a>
                    </li>
                    <li>
                        <a href="https://ky-y.dev/" className={ scss.link } target="_blank" rel="noopener noreferrer">
                            <span>ky-y.</span>
                            <div>ky-y.dev</div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};
export default Contact;