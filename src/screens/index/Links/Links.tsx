import React, { FC } from "react";
import Link from "next/link";

import Button from "components/Button/Button";

import scss from "./Links.module.scss";

const Links: FC = () => {

    return (
        <section>
            <div className="inner">
                <div className={ scss.links }>
                    <ul>
                        <li>
                            <Link href="/about">
                                <a>
                                    <Button className={ scss.button }>
                                        About
                                    </Button>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>
                                    <Button className={ scss.button }>
                                        Contact
                                    </Button>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default Links;
