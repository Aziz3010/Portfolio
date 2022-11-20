import React from 'react';
import Header from "../Sections/Header/Header";
import Services from "../Sections/Services/Services";
import Projects from "../Sections/Projects/Projects";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Services />
                <Projects />
            </main>
        </>
    )
}

export default Home;