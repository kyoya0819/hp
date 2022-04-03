import React, { FC, useState } from "react";
import Link from "next/link";

import Hamburger from "./components/Hamburger/Hamburger";

import scss from "./Header.module.scss";

const Header: FC = () => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <header className={ scss.header }>
            <div className={ "inner " + scss.inner }>
                <h1><Link href="/">kyoya0819</Link></h1>

                <label htmlFor="hamburger"><Hamburger open={ open } /></label>
                <input
                    type="checkbox" checked={ open } id="hamburger"
                    onChange={ (e) => setOpen(e.target.checked) }
                />
                <label htmlFor="hamburger" className={ scss.black } />

                <ul className={ scss.menu }>
                    <li><Link href="/">Top</Link></li>
                    <li><Link href="/about">About</Link></li>
                    {/*
                        <li><Link href="/products">Products</Link></li>
                    */}
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </header>
    );
};
export default Header;
