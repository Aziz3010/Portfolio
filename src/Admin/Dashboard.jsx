import React, { useEffect, useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { BsFillCollectionFill } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { useAllProjectsContext } from '../Context/AllProjects';
import SideNav from './SideNav';
import "./styles/dashboard.css";

const Dashboard = () => {
  const [toggleContentView, setToggleContentView] = useState(false);
  const [projectsLength, setProjectsLength] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState(0);
  const allProjectsContext = useAllProjectsContext();
  useEffect(() => {
    const getFireContext = async () => {
      const data = await allProjectsContext.getProjectsFromApi();
      setProjectsLength(data?.length);
      const onlyVisibleProducts = data?.filter(pro => pro.productDisplay === "1");
      setVisibleProjects(onlyVisibleProducts);
    };
    getFireContext();
  }, [allProjectsContext]);

  return (
    <section className='dashboard'>
      <SideNav toggleContentView={toggleContentView} setToggleContentView={setToggleContentView} />
      <section className={`ContentView ${toggleContentView ? "sideNavClosed" : ""}`}>
        <h2 className='text-lg font-medium mb-8'>Analysis</h2>
        {/* Analysis */}
        <div className="flex flex-row flex-wrap justify-start gap-8">
          <div className='bg-teal-500 basis-full md:basis-1/4 flex-1 px-8 py-3 rounded-md relative flex items-center justify-between'>
            <h2 className='text-2xl text-white'>Projects</h2>
            <span className='text-2xl p-1 rounded bg-white'>{projectsLength}</span>
            <div className='p-3 text-xl rounded-full bg-like-parent absolute -top-5 -left-4'><BsFillCollectionFill /></div>
          </div>
          <div className='bg-teal-500 basis-full md:basis-1/4 flex-1 px-8 py-3 rounded-md relative flex items-center justify-between'>
            <h2 className='text-2xl text-white'>Visitor</h2>
            <span className='text-2xl p-1 rounded bg-white'>00</span>
            <div className='p-3 text-xl rounded-full bg-like-parent absolute -top-5 -left-4'><FaUsers /></div>
          </div>
          <div className='bg-teal-500 basis-full md:basis-1/4 flex-1 px-8 py-3 rounded-md relative flex items-center justify-between'>
            <h2 className='text-2xl text-white'>Visible Projects</h2>
            <span className='text-2xl p-1 rounded bg-white'>{visibleProjects?.length}</span>
            <div className='p-3 text-xl rounded-full bg-like-parent absolute -top-5 -left-4'><AiFillEye /></div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Dashboard;