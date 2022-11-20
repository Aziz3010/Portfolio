import React from 'react';
import Frontendimg from "../../assets/image/front.png";
import Backendimg from "../../assets/image/back.png";
import "./Services.css";

const Services = () => {
    return (
        <section className='services mb-24'>
            <h3 className='text-3xl py-1 dark:text-white'>Services I Offer</h3>
            <p className='text-md leading-8 text-gray-500 dark:text-gray-400 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique unde tenetur reprehenderit quo atque necessitatibus dicta voluptate alias corporis minima!
            Lorem ipsum dolor sit amet, <span className='text-teal-500'>consectetur</span> elit. Similique unde tenetur reprehenderit quo atque necessitatibus dicta <span className='text-teal-500'>voluptate</span> alias corporis minima!</p>
            <div className="cards mt-20 md:flex gap-10">
                <div className="card shadow-lg p-10 rounded-xl flex flex-col items-center my-4 md:w-full dark:bg-slate-300">
                    <img src={Frontendimg} alt="Frontend" className='w-16 h-16' />
                    <h3 className='text-lg font-medium pt-8 pb-2'>Frontend</h3>
                    <p className='text-md leading-8 text-gray-500 dark:text-gray-600 text-center'>Lorem ipsum dolor sit amet.</p>
                    <h4 className='py-2'>Tools I use</h4>
                    <ul className='flex flex-wrap justify-center'>
                        <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>Html</li>
                        <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>Css</li>
                        <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>Javascript</li>
                        <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>Bootstrap</li>
                        <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>React.JS</li>
                    </ul>
                </div>
                <div className="card shadow-lg p-10 rounded-xl flex flex-col items-center my-4 md:w-full dark:bg-slate-300">
                    <img src={Backendimg} alt="Backend" className='w-16 h-16' />
                    <h3 className='text-lg font-medium pt-8 pb-2'>Backend</h3>
                    <p className='text-md leading-8 text-gray-500 dark:text-gray-600 text-center'>Lorem ipsum dolor sit amet.</p>
                    <h4 className='py-2'>Tols I use</h4>
                    <ul className='flex flex-wrap justify-center'>
                        <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>Php</li>
                        <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>MySql</li>
                        <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>Laravel</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Services;