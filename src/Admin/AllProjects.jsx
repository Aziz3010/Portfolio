import React, { useState } from 'react';
import SideNav from './SideNav';
import Pro01 from "../assets/image/front.png";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const AllProjects = () => {
    const [toggleContentView, setToggleContentView] = useState(false);
    const projectId = 100;

    const handleDelete = (projectId) => {
        console.log("handleDelete");
        console.log("############");
        console.log(projectId);
        // send to server the id and check it then delete it
    };

    return (
        <section className='allProjects'>
            <SideNav toggleContentView={toggleContentView} setToggleContentView={setToggleContentView} />
            <section className={`ContentView ${toggleContentView ? "sideNavClosed" : ""}`}>
                <h2 className='text-lg font-medium mb-5'>Projects</h2>
                {/* Table */}
                <div className="overflow-x-scroll">
                    <table className="border-collapse border border-slate-400 table-auto w-full text-center">
                        <thead className='bg-slate-200'>
                            <tr>
                                <th className="border border-slate-300 p-4">Serial</th>
                                <th className="border border-slate-300 p-4">Image</th>
                                <th className="border border-slate-300 p-4">Name</th>
                                <th className="border border-slate-300 p-4">URL</th>
                                <th className="border border-slate-300 p-4">Arrange</th>
                                <th className="border border-slate-300 p-4">Display</th>
                                <th className="border border-slate-300 p-4">Controls</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border font-medium border-slate-300 p-3">1</td>
                                <td className="border font-medium border-slate-300 p-3">
                                    <img src={Pro01} alt="Pro01" className='w-20 h-20 inline-block' />
                                </td>
                                <td className="border font-medium border-slate-300 p-3">test</td>
                                <td className="border font-medium border-slate-300 p-3">
                                    <a href="www.test.com" target={'_blank'}>www.test.com</a>
                                </td>
                                <td className="border font-medium border-slate-300 p-3">2</td>
                                <td className="border font-medium border-slate-300 p-3">No</td>
                                <td className="border border-slate-300 p-3">
                                    <div className='flex flex-row justify-center items-center gap-4'>
                                        <Link to={`/updateprojects?${projectId}`} className='bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded'><AiFillEdit /></Link>
                                        <button onClick={()=>{handleDelete(projectId)}} className='bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'><AiFillDelete /></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </section>
    )
}

export default AllProjects;