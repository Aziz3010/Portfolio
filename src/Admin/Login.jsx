import React, { useState } from 'react';
import "./styles/login.css";
import { loginFunc } from '../API/Login';
import { useAuth } from '../Context/Auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const auth = useAuth();
  const adminEmail = "a.abdelazizg@gmail.com";
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [errorMSG, setErrorMSG] = useState("");
  const navigate = useNavigate();

  const sendDataToServerForLogin = async (formData) => {
    const userData = await loginFunc(formData);
    if (userData.access_token) {
      auth.loginFunc();
      sessionStorage.setItem("access_token",JSON.stringify(userData.access_token));
      navigate("/dashboard", {replace: true});
    } else {
      setErrorMSG("Email or Password aren't correct.");
      sessionStorage.removeItem("access_token");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (adminEmail !== "" && passwordInputValue !== "") {
      setErrorMSG("");
      const formData = new FormData();
      formData.append("email", adminEmail);
      formData.append("password", passwordInputValue);
      sendDataToServerForLogin(formData);
    } else {
      setErrorMSG("Password is required");
    }
  };

  return (
    <section className='login'>
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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