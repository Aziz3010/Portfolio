import React from 'react';
import pro01 from "../../assets/image/Ahmed Abdelaziz.jpg";

const Projects = () => {
    return (
        <section className='projects mb-24'>
            <h3 className='text-3xl py-1 text-center mb-5'>Portfolio</h3>
            <p className='text-md leading-8 text-gray-500 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique unde tenetur reprehenderit quo atque necessitatibus dicta voluptate alias corporis minima!
                Lorem ipsum dolor sit amet, <span className='text-teal-500'>consectetur</span> elit. Similique unde tenetur reprehenderit quo atque necessitatibus dicta <span className='text-teal-500'>voluptate</span> alias corporis minima!</p>

            <div className="projects_box flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">

                <div className='project basis-1/3 flex-1'>
                    <img src={pro01} alt="pro01" />
                    <div className="info_box">
                        <h3 className='text-white font-medium'>Tools</h3>
                        <ul className="tools_box flex flex-row flex-wrap justify-center">
                            <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>test</li>
                            <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>test</li>
                            <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>test</li>
                        </ul>
                        <h4 className='text-white font-medium mt-5'>Url</h4>
                        <a href='/' target={"_blank"} className='text-white bg-cyan-500 rounded px-2 py-1'>www.google.com</a>
                    </div>
                </div>

                <div className='project basis-1/3 flex-1'>
                    <img src={pro01} alt="pro01" />
                    <div className="info_box">
                        <h3 className='text-white font-medium'>Tools</h3>
                        <ul className="tools_box flex flex-row flex-wrap justify-center">
                            <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>test</li>
                            <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>test</li>
                            <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>test</li>
                        </ul>
                        <h4 className='text-white font-medium mt-5'>Url</h4>
                        <a href='/' target={"_blank"} className='text-white bg-cyan-500 rounded px-2 py-1'>www.google.com</a>
                    </div>
                </div>

                <div className='project basis-1/3 flex-1'>
                    <img src={pro01} alt="pro01" />
                    <div className="info_box">
                        <h3 className='text-white font-medium'>Tools</h3>
                        <ul className="tools_box flex flex-row flex-wrap justify-center">
                            <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>test</li>
                            <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>test</li>
                            <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>test</li>
                        </ul>
                        <h4 className='text-white font-medium mt-5'>Url</h4>
                        <a href='/' target={"_blank"} className='text-white bg-cyan-500 rounded px-2 py-1'>www.google.com</a>
                    </div>
                </div>

                <div className='project basis-1/3 flex-1'>
                    <img src={pro01} alt="pro01" />
                    <div className="info_box">
                        <h3 className='text-white font-medium'>Tools</h3>
                        <ul className="tools_box flex flex-row flex-wrap justify-center">
                            <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>test</li>
                            <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>test</li>
                            <li className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>test</li>
                        </ul>
                        <h4 className='text-white font-medium mt-5'>Url</h4>
                        <a href='/' target={"_blank"} className='text-white bg-cyan-500 rounded px-2 py-1'>www.google.com</a>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Projects;