import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { MdAdminPanelSettings } from "react-icons/md";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import myPhoto from "../../assets/image/Ahmed Abdelaziz.jpg";
import svg01 from "../../assets/svg/blob.svg";
import svg02 from "../../assets/svg/graph.png";
import "./Header.css";
import { UserContext } from '../../Home/Home';

const Header = () => {
    const [toggleDarkMode, setToggleDarkMode] = useState(false);
    const [toggleAdminIcon, setToggleAdminIcon] = useState(false);
    const [clickedNumberOnLogo, setClickedNumberOnLogo] = useState(0);
    const user = useContext(UserContext);
    const clickOnLogo = () => {
        setClickedNumberOnLogo(clickedNumberOnLogo + 1);
    };
    const darkMode = () => {
        setToggleDarkMode(!toggleDarkMode);
    };
    useEffect(() => {
        if (clickedNumberOnLogo === 2) {
            setToggleAdminIcon(!toggleAdminIcon);
            setClickedNumberOnLogo(0);
        }

        if (toggleDarkMode) {
            window.document.body.classList.add('dark');
        } else {
            window.document.body.classList.remove('dark');
        }
    }, [clickedNumberOnLogo, toggleAdminIcon, toggleDarkMode]);

    return (
        <header className='min-h-screen mb-24'>
            <nav className='py-10 mb-5 flex justify-between items-center md:mb-12'>
                <h1 className="text-2xl font-burtons select-none dark:text-white" onClick={clickOnLogo}>portfolio</h1>
                <img src={svg01} alt="svg01" className='svg01' />
                <ul className='flex items-center'>
                    <li className='cursor-pointer text-lg dark:text-white' onClick={darkMode}> {toggleDarkMode ? <BsFillSunFill /> : <BsMoonStarsFill />}</li>
                    {toggleAdminIcon ? <li className='text-2xl ml-4 dark:text-white'><Link to={"/login"}><MdAdminPanelSettings /></Link></li> : null}
                    <li><a href='/resume.pdf' download="Ahmed Abdelaziz Resume" className='bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md capitalize ml-4 text-white'>resume</a></li>
                </ul>
            </nav>
            <section className='text-center px-1'>
                <div className="caption mb-5">
                    <h2 className='text-5xl py-2 text-teal-600 font-medium capitalize'>{user[0]?.username}</h2>
                    <h3 className='text-2xl py-2 dark:text-white'>{user[0]?.title}</h3>
                    <p className='text-md py-5 leading-8 text-gray-500 dark:text-gray-400'>{user[0]?.paragraph01}</p>
                </div>
                <ul className='social flex items-center justify-center gap-5 mb-10'>
                    <li>
                        <a href={user[0]?.github} rel="noreferrer" target={"_blank"} className="text-gray-600 dark:text-gray-400 hover:dark:text-gray-200 hover:text-gray-500 p-2 rounded-full block text-3xl"><AiFillGithub /></a>
                    </li>
                    <li>
                        <a href={user[0]?.linkedin} rel="noreferrer" target={"_blank"} className="text-gray-600 dark:text-gray-400 hover:dark:text-gray-200 hover:text-gray-500 p-2 rounded-full block text-3xl"><AiFillLinkedin /></a>
                    </li>
                    <li>
                        <a href={`mailto:${user[0]?.gmail}?Subject=Email from website`} rel="noreferrer" target={"_blank"} className="text-gray-600 dark:text-gray-400 hover:dark:text-gray-200 hover:text-gray-500 p-2 rounded-full block text-3xl"><SiGmail /></a>
                    </li>
                    <li>
                        <a href={`https://wa.me/${user[0]?.whatsapp}`} rel="noreferrer" target={"_blank"} className="text-gray-600 dark:text-gray-400 hover:dark:text-gray-200 hover:text-gray-500 p-2 rounded-full block text-3xl"><IoLogoWhatsapp /></a>
                    </li>
                </ul>
                <img src={svg02} alt="svg02" className='svg02' />
                <div className="flex justify-center">
                    <img src={myPhoto} alt="Ahmed Abdelaziz" className='w-60 h-60 rounded-full p-2 bg-gradient-to-b from-cyan-200 to-teal-500' />
                </div>
            </section>
        </header>
    )
}

export default Header;