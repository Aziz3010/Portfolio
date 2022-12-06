import React, { useEffect, useState } from 'react';
import SideNav from './SideNav';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../API/Axios';
import { allProductFunc } from '../API/AllProjects';
import { toast } from 'react-toastify';

const AllProjects = () => {
    const [allProduct, setAllProduct] = useState([]);
    const [toggleContentView, setToggleContentView] = useState(false);
    const navigate = useNavigate();
    const handleDelete = async (projectId) => {
        let { data } = await axios.get(`DeleteProjects.php?id=${projectId}`, {
            mode: 'no-cors',
            headers: {
                'Content-Type': "application/json; charset=UTF-8",
            }
        });
        if (data.msg === "Project deleted.") {
            getAllProduct();
            toast.success("Project deleted.");
            navigate("/projects");
        } else {
            toast.error("Failed to delete the project.");
        }
    };
    const getAllProduct = async () => {
        let data = await allProductFunc();
        setAllProduct(data);
    };
    useEffect(() => {
        getAllProduct();
    }, []);

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
                            {
                                allProduct.length > 0 ?
                                    allProduct.map((product, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="border font-medium border-slate-300 p-3">{index + 1}</td>
                                                <td className="border font-medium border-slate-300 p-3">
                                                    <img src={product.productImage !== "" && product.productImage !== null ? `https://lowermost-heel.000webhostapp.com/uploads/${product.productImage}` : `https://lowermost-heel.000webhostapp.com/uploads/default.png`} alt={product.productName} className='w-20 h-20 inline-block object-cover' />
                                                </td>
                                                <td className="border font-medium border-slate-300 p-3">{product.productName}</td>
                                                <td className="border font-medium border-slate-300 p-3">
                                                    <a href={product.productUrl} target={'_blank'} rel="noreferrer">{product.productUrl}</a>
                                                </td>
                                                <td className="border font-medium border-slate-300 p-3">{product.productArrange}</td>
                                                <td className="border font-medium border-slate-300 p-3">{product.productDisplay === "1" ? "Yes" : "No"}</td>
                                                <td className="border border-slate-300 p-3">
                                                    <div className='flex flex-row justify-center items-center gap-4'>
                                                        <Link to={`/updateprojects/${product.id}`} className='bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded'><AiFillEdit /></Link>
                                                        <button onClick={() => { handleDelete(product.id) }} className='bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'><AiFillDelete /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    <tr><td className="border font-medium border-slate-300 p-3" colSpan={7}>No projects</td></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </section>
    )
}

export default AllProjects;