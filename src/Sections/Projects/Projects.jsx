import React, { useContext, useEffect, useState } from 'react';
import "./Projects.css";
import { allProductFunc } from '../../API/AllProjects';
import { UserContext } from '../../Home/Home';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
    const [allProduct, setAllProduct] = useState([]);
    const [moreProjects, setMoreProjects] = useState(3);
    const [showMoreBtn, setShowMoreBtn] = useState(false);
    const user = useContext(UserContext);
    const getAllProduct = async () => {
        let data = await allProductFunc();
        setAllProduct(data);
        if (data.length > 0) {
            setShowMoreBtn(true);
        } else {
            setShowMoreBtn(false);
        }
    };
    const showMoreProgiects = () => {
        if (moreProjects >= allProduct.length) {
            setShowMoreBtn(false);
        } else {
            setMoreProjects(moreProjects + 3);
            setShowMoreBtn(true);
        }
    };
    useEffect(() => {
        getAllProduct();
    }, []);

    return (
        <section className='projects'>
            <h3 className='text-3xl py-1 text-center mb-5 dark:text-white'>Portfolio</h3>
            <p className='text-md leading-8 text-gray-500 dark:text-gray-400 text-center'>{user[0]?.paragraph03}</p>

            <div className="projects_box flex flex-col justify-center gap-10 py-10 md:flex-row md:flex-wrap">
                {
                    allProduct.length > 0 ?
                        allProduct.slice(0, moreProjects).map((project, index) => {
                            return (
                                <ProjectCard key={index} project={project} />
                            )
                        })
                        :
                        <p className='bg-red-500 text-white text-center rounded py-1 px-3'>No projects</p>
                }
            </div>
            {
                showMoreBtn && <div className='flex justify-center mb-5'>
                    <button onClick={showMoreProgiects} className="bg-teal-500 hover:bg-teal-400 text-white py-2 px-3 rounded">More Projects</button>
                </div>
            }
        </section>
    )
}

export default Projects;