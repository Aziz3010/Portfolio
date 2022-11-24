import React from 'react';

const ProjectCard = ({ project }) => {
    const { productImage, productName, productTools, productUrl } = project;
    return (
        <div className='project basis-1/3 flex-1 max-h-96'>
            <img src={`http://localhost/MyPortfolioAPI/uploads/${productImage}`} alt={productName} className='object-cover' />
            <div className="info_box">
                <h3 className='text-white font-medium'>Tools</h3>
                <ul className="tools_box flex flex-row flex-wrap justify-center">
                    {productTools?.split(",").map((ele, index) => {
                        return (
                            <li key={index} className='text-white bg-cyan-500 rounded px-2 py-1 mr-1 mb-1'>{ele}</li>
                        )
                    })}
                </ul>
                <h4 className='text-white font-medium mt-5'>URL</h4>
                <a href={productUrl} target={"_blank"} rel="noreferrer" className='text-white bg-cyan-500 rounded px-2 py-1'>{productUrl}</a>
            </div>
        </div>
    )
}

export default ProjectCard;