import React, { FC, Fragment, lazy, Suspense } from "react";

import First from "./First/First";

const About     = lazy(() => import("./About/About"));
const Histories = lazy(() => import("./Histories/Histories"));
const Created   = lazy(() => import("./Created/Created"));
const Skills    = lazy(() => import("./Skills/Skills"));
const Links     = lazy(() => import("./Links/Links"));
const Contact   = lazy(() => import("./Contact/Contact"));

import Footer from "components/Footer/Footer";

const Index: FC = () => {

    document.title = "kyoya0819 | TOP";

    return (
        <Fragment>
            <main>
                <First />
                <Suspense fallback={<></>}>
                    <About />
                    <Histories />
                    <Created />
                    <Skills />
                    <Links />
                    <Contact />
                </Suspense>
            </main>
            <Footer />
        </Fragment>
    );
};

export default Index;