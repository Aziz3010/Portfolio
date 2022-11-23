import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./styles/sidenav.css";
import { AiFillSetting, AiFillHome, AiFillPieChart } from 'react-icons/ai';
import { IoMdAddCircle } from "react-icons/io";
import { BsFillCollectionFill } from "react-icons/bs";
import { RiLogoutBoxFill } from "react-icons/ri";

const SideNav = ({ toggleContentView, setToggleContentView }) => {
    const [toggleSideNav, setToggleSideNav] = useState(false);
    const toggleSideNavBar = () => {
        setToggleSideNav(!toggleSideNav);
        setToggleContentView(!toggleContentView);
    };
    useEffect(() => {
        if (window.innerWidth <= 425) {
            setToggleSideNav(true);
        }
    }, []);
    return (
        <section className={`sideNav ${toggleSideNav ? "close" : ""}`}>
            <ul>
                <li>
                    <h2 className='text-xl font-burtons text-white'>controller</h2>
                </li>
                <hr className='mt-2 mb-4' />
                <li className='mb-3'>
                    <Link to={"/"} className='bg-slate-100 hover:bg-slate-300 rounded-md text-md font-medium transition-all duration-500 hover:pl-5 pl-3 py-3 flex items-center gap-2'>
                        <AiFillHome />
                        Home
                    </Link>
                </li>
                <li className='mb-3'>
                    <Link to={"/dashboard"} className='bg-slate-100 hover:bg-slate-300 rounded-md text-md font-medium transition-all duration-500 hover:pl-5 pl-3 py-3 flex items-center gap-2'>
                        <AiFillPieChart />
                        Analysis
                    </Link>
                </li>
                <li className='mb-3'>
                    <Link to={"/projects"} className='bg-slate-100 hover:bg-slate-300 rounded-md text-md font-medium transition-all duration-500 hover:pl-5 pl-3 py-3 flex items-center gap-2'>
                        <BsFillCollectionFill />
                        All Projects
                    </Link>
                </li>
                <li className='mb-3'>
                    <Link to={"/addproducts"} className='bg-slate-100 hover:bg-slate-300 rounded-md text-md font-medium transition-all duration-500 hover:pl-5 pl-3 py-3 flex items-center gap-2'>
                        <IoMdAddCircle />
                        New Projects
                    </Link>
                </li>
                <li className='mb-3'>
                    <Link to={"/settings"} className='bg-slate-100 hover:bg-slate-300 rounded-md text-md font-medium transition-all duration-500 hover:pl-5 pl-3 py-3 flex items-center gap-2'>
                        <AiFillSetting />
                        Settings
                    </Link>
                </li>
                <li>
                    <Link to={"/logout"} className='bg-slate-100 hover:bg-slate-300 rounded-md text-md font-medium transition-all duration-500 hover:pl-5 pl-3 py-3 flex items-center gap-2'>
                        <RiLogoutBoxFill />
                        Logout
                    </Link>
                </li>
            </ul>
            <div onClick={toggleSideNavBar} className="sideNav_btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
    )
}

export default SideNav;