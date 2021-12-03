import React, { FC, useState } from "react";
import Link from "next/link";

import scss from "./Header.module.scss";

const Header: FC = () => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <header className={ scss.header }>
            <div className={ "inner " + scss.inner }>
                <h1><Link href="/">kyoya0819</Link></h1>

                <input
                    type="checkbox" checked={ open } id={ scss.checkbox }
                    onChange={ (e) => setOpen(e.target.checked) }
                />

                <ul className={ scss.menu }>
                    <li><Link href="/">Top</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </header>
    );
};
export default Header;