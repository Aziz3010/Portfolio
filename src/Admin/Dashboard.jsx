import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/addproducts"}>Add Products</Link>
    </div>
  )
}

export default Dashboard;