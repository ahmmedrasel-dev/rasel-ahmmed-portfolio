import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';

const Dashboard = ({ header, headerTop }) => {
  header(false)
  headerTop(true);
  const [user] = useAuthState(auth);

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col px-8">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-300 text-base-content">
          <li><Link className='text-white' to="/dashboard/post">Manage Post</Link></li>
          <li><Link className='text-white' to="/dashboard/addpost">Add Post</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;