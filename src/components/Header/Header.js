import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import { IoHome } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';
import { HiOutlineViewGrid, HiChat } from 'react-icons/hi';


const Header = () => {
  return (
    <div className='sideMenu lg:w-80 w-full z-40'>
      <ul className='menuItem'>
        <li className='flex lg:flex-row-reverse lg:items-center'>
          <NavLink className='p-4 bg-slate-700 rounded-full hover:bg-success' to='/'><IoHome className='text-2xl' /></NavLink>
          <h2>Home</h2>
        </li>
        <li className='flex lg:flex-row-reverse lg:items-center'>
          <NavLink className='p-4 bg-slate-700 rounded-full hover:bg-success' to='/about-me'><FaUserAlt className='text-2xl' /></NavLink>
          <h2>About Me</h2>
        </li>
        <li className='flex lg:flex-row-reverse lg:items-center'>
          <NavLink className='p-4 bg-slate-700 rounded-full hover:bg-success' to='/projects'><HiOutlineViewGrid className='text-2xl' /></NavLink>
          <h2>Projects</h2>
        </li>
        <li className='flex lg:flex-row-reverse lg:items-center'>
          <NavLink className='p-4 bg-slate-700 rounded-full hover:bg-success' to='/contact'><HiChat className='text-2xl' /></NavLink>
          <h2>Contact Us</h2>
        </li>
      </ul>
    </div>
  );
};

export default Header;