import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { IoHome } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';
import { HiOutlineViewGrid, HiChat } from 'react-icons/hi';


const Header = () => {
  return (
    <div className='sideMenu w-80 z-40 hidden lg:block'>
      <ul className='menuItem'>
        <li className='flex flex-row-reverse items-center'>
          <Link className='p-4 bg-slate-700 rounded-full hover:bg-success' to='/'><IoHome className='text-2xl' /></Link>
          <h2>Home</h2>
        </li>
        <li className='flex flex-row-reverse items-center'>
          <Link className='p-4 bg-slate-700 rounded-full hover:bg-success' to='/about-me'><FaUserAlt className='text-2xl' /></Link>
          <h2>About Me</h2>
        </li>
        <li className='flex flex-row-reverse items-center'>
          <Link className='p-4 bg-slate-700 rounded-full hover:bg-success' to='/'><HiOutlineViewGrid className='text-2xl' /></Link>
          <h2>Projects</h2>
        </li>
        <li className='flex flex-row-reverse items-center'>
          <Link className='p-4 bg-slate-700 rounded-full hover:bg-success' to='/'><HiChat className='text-2xl' /></Link>
          <h2>Contact Us</h2>
        </li>

      </ul>
    </div>
  );
};

export default Header;