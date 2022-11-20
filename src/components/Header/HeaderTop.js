import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const HeaderTop = () => {
  const [user] = useAuthState(auth)
  const logOut = () => {
    signOut(auth)
    localStorage.removeItem('accessToken')
  }
  return (
    <div className="navbar bg-neutral">
      <div className="flex-1"></div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li><Link to='/profile'>{user.displayName ? user.displayName : 'Profile'}</Link></li>
          <li><Link to='/dashboard' className="justify-between hidden lg:block">Dashboard</Link></li>
          <li><Link to='#' onClick={logOut}>Logout</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;