import React, { useContext, useEffect, useState } from 'react';
import "./Projects.css";
import { allProductFunc } from '../../API/AllProjects';
import { UserContext } from '../../Home/Home';

const Projects = () => {
    const [allProduct, setAllProduct] = useState([]);
    const user = useContext(UserContext);
    const getAllProduct = async () => {
        let data = await allProductFunc();
        setAllProduct(data);
    };
    useEffect(() => {
        getAllProduct();
    }, []);

    return (
        <section className='projects'>
            <h3 className='text-3xl py-1 text-center mb-5 dark:text-white'>Portfolio</h3>
            <p className='text-md leading-8 text-gray-500 dark:text-gray-400 text-center'>{user[0]?.paragraph03}</p>

            <div className="projects_box flex flex-col gap-10 py-10 md:flex-row md:flex-wrap">
                {
                    allProduct.length > 0 ?
                        allProduct.map((project, index) => {
                            return (
                                <div key={index} className='project basis-1/3 flex-1 max-h-96'>
                                    <img src={`http://localhost/MyPortfolioAPI/uploads/${project.productImage}`} alt={project.productName} className='object-cover' />
                                    <div className="info_box">
                                        <h3 className='text-white font-medium'>Tools</h3>
                                        <ul className="tools_box flex flex-row flex-wrap justify-center">
                                            {project.productTools.split(",").map((ele, index) => {
                                                return (
                                                    <li key={index} className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>{ele}</li>
                                                )
                                            })}
                                        </ul>
                                        <h4 className='text-white font-medium mt-5'>URL</h4>
                                        <a href={project.productUrl} target={"_blank"} rel="noreferrer" className='text-white bg-cyan-500 rounded px-2 py-1'>{project.productUrl}</a>
                                    </div>
                                </div>
                            )
                        })

                        :
                        <p className='bg-red-500 text-white text-center w-full'>No projects</p>
                }

            </div>

        </section>
    )
}

export default Projects;