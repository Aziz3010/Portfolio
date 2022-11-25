import React, { useEffect, useState } from 'react';
import Header from "../Sections/Header/Header";
import Services from "../Sections/Services/Services";
import Projects from "../Sections/Projects/Projects";
import { userInfoFunc } from '../API/UserInfo';
// import { userInfoFuncFetch } from '../API/Fetching';

export const UserContext = React.createContext();

const Home = () => {
    const [user, setUser] = useState([]);
    const getUserData = async () => {
        const userData = await userInfoFunc();
        setUser(userData);
    };
    // const getInfoFuncFetch = async () => {
    //     const userData = await userInfoFuncFetch(); /////// Test
    //     // setUser(userData);
    //     // console.log(userData);
    // };
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