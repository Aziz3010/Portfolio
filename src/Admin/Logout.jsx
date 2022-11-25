import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { LogoutFunc } from '../API/Logout';
import { useAuth } from '../Context/Auth'

const Logout = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const logoutCall = async () => {
    const access_token = JSON.parse(sessionStorage.getItem("access_token"));
    const formData = new FormData();
    formData.append("access_token",access_token);
    const data = await LogoutFunc(formData);
    if (data.msg === "Logout successfully") {
      auth.logoutFunc();
      sessionStorage.removeItem("access_token");
      navigate("/", { replace: true });
    }
  };
  useEffect(() => {
    logoutCall();
  })
  
  return (
    <div>Logout</div>
  )
}

export default Logout