import React, { useState } from 'react';
import SideNav from './SideNav';

const Settings = () => {
    const [toggleContentView, setToggleContentView] = useState(false);
    const [socialSection, setSocialSection] = useState(false);
    const [titleSection, setTitleSection] = useState(false);
    const [descriptionSection, setDescriptionSection] = useState(false);

    const sectionDiplay = (sectionId) => {
        switch (sectionId) {
            case "social":
                setSocialSection(true);
                setTitleSection(false);
                setDescriptionSection(false);
                break;
            case "title":
                setSocialSection(false);
                setTitleSection(true);
                setDescriptionSection(false);
                break;
            case "description":
                setSocialSection(false);
                setTitleSection(false);
                setDescriptionSection(true);
                break;
            default:
                setSocialSection(false);
                setTitleSection(false);
                setDescriptionSection(false);
                break;
        }
    };

    return (
        <section className='settings'>
            <SideNav toggleContentView={toggleContentView} setToggleContentView={setToggleContentView} />
            <section className={`ContentView ${toggleContentView ? "sideNavClosed" : ""}`}>
                <h2 className='text-lg font-medium mb-5'>Settings</h2>
                {/* Taps */}
                <div className="flex flex-row flex-wrap justify-start gap-8 mb-8">
                    <div onClick={(e) => { sectionDiplay(e.target.id) }} id="social" className='bg-teal-500 hover:bg-teal-600 basis-full md:basis-1/4 flex-1 p-3 rounded-md text-center text-white text-xl cursor-pointer'>Social URLs</div>
                    <div onClick={(e) => { sectionDiplay(e.target.id) }} id="title" className='bg-teal-500 hover:bg-teal-600 basis-full md:basis-1/4 flex-1 p-3 rounded-md text-center text-white text-xl cursor-pointer'>Title</div>
                    <div onClick={(e) => { sectionDiplay(e.target.id) }} id="description" className='bg-teal-500 hover:bg-teal-600 basis-full md:basis-1/4 flex-1 p-3 rounded-md text-center text-white text-xl cursor-pointer'>Description</div>
                </div>

                {
                    socialSection ?
                        <div className="urls">
                            <form className="mb-4 flex gap-3">
                                <input className="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="LinkedIn" />
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Save</button>
                            </form>

                            <form className="mb-4 flex gap-3">
                                <input className="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="GitHub" />
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Save</button>
                            </form>

                            <form className="mb-4 flex gap-3">
                                <input className="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Gmail" />
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Save</button>
                            </form>

                            <form className="mb-4 flex gap-3">
                                <input className="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Whatsapp" />
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Save</button>
                            </form>

                        </div>
                        :
                        null
                }

                {
                    titleSection ?
                        <form className="mb-4 flex gap-3">
                            <input className="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Title - Full stack developer" />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Save</button>
                        </form>
                        :
                        null
                }

                {
                    descriptionSection ?
                        <div className="urls">
                            <form className="mb-4 flex gap-3">
                                <input className="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Paragraph 01" />
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Save</button>
                            </form>

                            <form className="mb-4 flex gap-3">
                                <input className="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Paragraph 02" />
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Save</button>
                            </form>

                            <form className="mb-4 flex gap-3">
                                <input className="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Paragraph 03" />
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Save</button>
                            </form>
                        </div>
                        :
                        null
                }

            </section>
        </section>
    )
}

export default Settings;