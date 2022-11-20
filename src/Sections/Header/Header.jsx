import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import myPhoto from "../../assets/image/Ahmed Abdelaziz.jpg";

const Header = () => {
    const [toggleAdminIcon, setToggleAdminIcon] = useState(false);
    const [clickedNumberOnLogo, setClickedNumberOnLogo] = useState(0);
    const clickOnLogo = ()=>{
        setClickedNumberOnLogo(clickedNumberOnLogo + 1);
    };
    useEffect(()=>{
        if(clickedNumberOnLogo === 2){
            setToggleAdminIcon(!toggleAdminIcon);
            setClickedNumberOnLogo(0);
        }
    },[clickedNumberOnLogo,toggleAdminIcon]);

    return (
        <header className='min-h-screen mb-24'>
            <nav className='py-10 mb-5 flex justify-between items-center md:mb-12'>
                <h1 className="text-2xl font-burtons select-none" onClick={clickOnLogo}>portfolio</h1>
                <ul className='flex items-center'>
                    <li className='cursor-pointer text-lg'><BsMoonStarsFill /></li>
                    {toggleAdminIcon ? <li className='text-lg ml-4'><Link to={"/login"}><GrUserAdmin /></Link></li> : null}
                    <li><a href='/' className='bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md capitalize ml-4 text-white'>resume</a></li>
                </ul>
            </nav>
            <section className='text-center px-1'>
                <div className="caption mb-5">
                    <h2 className='text-5xl py-2 text-teal-600 font-medium'>Ahmed Abdelaziz</h2>
                    <h3 className='text-2xl py-2'>Full stack developer</h3>
                    <p className='text-md py-5 leading-8 text-gray-500'>Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing elit. Voluptates, molestiae.</p>
                </div>
                <ul className='social flex items-center justify-center gap-5 mb-10'>
                    <li>
                        <a href='https://github.com/Aziz3010?tab=repositories' rel="noreferrer" target={"_blank"} className="text-gray-600 p-2 rounded-full block text-3xl"><AiFillGithub /></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/ahmedgomaa3/' rel="noreferrer" target={"_blank"} className="text-gray-600 p-2 rounded-full block text-3xl"><AiFillLinkedin /></a>
                    </li>
                    <li>
                        <a href='mailto:a.abdelazizg@gmail.com?Subject=Email from website' rel="noreferrer" target={"_blank"} className="text-gray-600 p-2 rounded-full block text-3xl"><SiGmail /></a>
                    </li>
                    <li>
                        <a href='https://wa.me/201069855288' rel="noreferrer" target={"_blank"} className="text-gray-600 p-2 rounded-full block text-3xl"><IoLogoWhatsapp /></a>
                    </li>
                </ul>
                <div className="flex justify-center">
                    <img src={myPhoto} alt="Ahmed Abdelaziz" className='w-60 h-60 rounded-full p-2 bg-gradient-to-b from-cyan-200 to-teal-500' />
                </div>
            </section>
        </header>
    )
}

export default Header;