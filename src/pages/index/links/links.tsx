import React from 'react';
import scss from './links.module.scss';

const Links = () => {

    return (
        <section>
            <h3>LINKS</h3>
            <ul className={ scss.links }>
                <li><a href="https://twitter.com/kyoya0819" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100054776536464" target="_blank" rel="noreferrer">Facebook</a></li>
                <li><a href="https://github.com/kyoya0819" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://www.resume.id/kyoya0819" target="_blank" rel="noreferrer">RESUME</a></li>
                <li><a href="https://teratail.com/users/kyoya0819" target="_blank" rel="noreferrer">teratail</a></li>
                <li><a href="https://qiita.com/kyoya0819" target="_blank" rel="noreferrer">Qiita</a></li>
                <li><a href="https://pw.kyoya0819.com/" target="_blank" rel="noreferrer">PasswordMarker</a></li>
            </ul>
        </section>
    );
}

export default Links;