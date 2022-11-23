import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Auth'

const Logout = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    auth.logoutFunc();
    sessionStorage.removeItem("access_token");
    navigate("/", {replace:true});
  })

  return (
    <div>Logout</div>
  )
}

export default Logout