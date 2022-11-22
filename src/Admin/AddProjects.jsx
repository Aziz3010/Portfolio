import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./styles/addProjects.css";
import axios from "axios";

const AddProjects = () => {
  const [errorMSG, setErrorMSG] = useState("");
  const [productName, setProductName] = useState("");
  const [productArrange, setProductArrange] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [productTools, setProductTools] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName !== '' && productArrange !== '' && productUrl !== '' && productTools !== '' && productImage !== null) {
      setErrorMSG("");
      const formData = new FormData(e.target);
      formData.append("productName", productName);
      formData.append("productArrange", productArrange);
      formData.append("productUrl", productUrl);
      formData.append("productTools", productTools);
      formData.append("productImage", productImage);

      addProductFunc(formData);

      // get token from localstorage
      // write headers
      // send data to db by axios
    } else {
      setErrorMSG("All fields are required");
    }

  };

  // //////////////////////////////////////
  const config = {
    mode: 'no-cors',
    headers: {
      'Content-Type': "multipart/form-data",
    }
  };
  const addProductFunc = async (formData) => {
    let { data } = await axios.post("http://localhost/MyPortfolioAPI/InsertProjects.php", formData, config);
    console.log(data);
  };
  // //////////////////////////////////////

  return (
    <section className='addProducts'>
      <div className='flex items-center justify-between mb-10 w-full'>
        <h2 className='text-lg font-medium'>Add Products</h2>
        <Link to={"/dashboard"}>Dashboard</Link>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-lg shadow-md rounded px-8 pt-6 pb-8">

        <div className="flex flex-wrap -mx-3 mb-6">

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Product-name">
              Product Name
            </label>
            <input onChange={(e) => { setProductName(e.target.value) }} name='Product-Name' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-Product-name" type="text" placeholder="Ecommerce" />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Product-Arrange">
              Product Arrange
            </label>
            <input onChange={(e) => { setProductArrange(e.target.value) }} name='Product-Arrange' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-Product-Arrange" type="number" placeholder="1" />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Product-Url">
              Product Url
            </label>
            <input onChange={(e) => { setProductUrl(e.target.value) }} name='Product-Url' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-Product-Url" type="text" placeholder="www.example.com" />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Product-Tools">
              Product Tools
            </label>
            <input onChange={(e) => { setProductTools(e.target.value) }} name='Product-Tools' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-Product-Tools" type="text" placeholder="Html, css, javascript" />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Product-Image">
              Product Image
            </label>
            <input onChange={(e) => { setProductImage(e.target.files[0]) }} type="file" className='appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="grid-Product-Tools" />
          </div>
        </div>

        {errorMSG !== '' ? <p className="text-red-500 text-sm italic mb-3">{errorMSG}</p> : ''}

        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-1" type="submit">
            Add
          </button>
        </div>

      </form>
    </section>
  )
}

export default AddProjects;