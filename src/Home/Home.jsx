import React, { useEffect, useState } from 'react';
import Header from "../Sections/Header/Header";
import Services from "../Sections/Services/Services";
import Projects from "../Sections/Projects/Projects";
import { userInfoFunc } from '../API/UserInfo';
export const UserContext = React.createContext();

const Home = () => {
    const [user, setUser] = useState([]);
    const getUserData = async () => {
        const userData = await userInfoFunc();
        setUser(userData);
    };
    useEffect(() => {
        getUserData();
        // getInfoFuncFetch();
    }, []);

    return (
        <>
            <UserContext.Provider value={user}>
                <Header />
                <main>
                    <Services />
                    <Projects />
                </main>
            </UserContext.Provider>
        </>
    )
}

export default Home;