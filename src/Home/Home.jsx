import React from 'react';
import Header from "../Sections/Header/Header";
import Services from "../Sections/Services/Services";
import Projects from "../Sections/Projects/Projects";
import Footer from "../Sections/Footer/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Services />
                <Projects />
            </main>
            <Footer />
        </>
    )
}

export default Home;