import React from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom



export const Sidebar = () => {
  return (
    <div className="drawer lg:drawer-open bg-white shadow-x10 max-w-[100px]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle bg-blue-200" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden bg-blue-100">
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-blue-100">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay bg-blue-100"></label>
        <ul className="menu text-base-content min-h-full w-25  p-4 bg-blue-900">
          <li className='my-5 font-bold text-white'>
            <MdOutlineDashboard size={20} className="inline mr-2" />
            <Link to="/">Dashboard</Link> 
          </li>
          
          <li>
            <Link to="/salary" className='font-bold text-white'>Salary</Link> 
          </li>
        </ul>
      </div>
    </div>
  );
};
