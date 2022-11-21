import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles/login.css";

const Login = () => {
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [errorMSG, setErrorMSG] = useState("");
  const adminEmail = "a.abdelazizg@gmail.com";
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (adminEmail !== "" && passwordInputValue !== "") {
      setErrorMSG("");
      const formData = new FormData(e.target);
      formData.append("email", adminEmail);
      formData.append("password", passwordInputValue);

      // send data to server
      // then receive the token from db
      // then put the token in localstorage
      // any action in dashboard - i must check the db token with localstorage token


    } else {
      setErrorMSG("All fields are required");
    }


    navigate("/dashboard");
  };

  return (
    <section className='login'>
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input value={adminEmail} disabled className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input onChange={(e) => { setPasswordInputValue(e.target.value) }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
          </div>
          {errorMSG !== "" ? <p className="text-red-500 text-sm italic mb-2">{errorMSG}</p> : ''}
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-1" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login;