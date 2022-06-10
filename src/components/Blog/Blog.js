import React from 'react';
import { FaEdit } from 'react-icons/fa';
import './blog.css';

const Blog = () => {
  return (
    <div className='blog bg-neutral'>
      <div className='blog-inner flex items-center flex-col'>
        <h1 className='text-5xl'>New Blog</h1>
        <h2 className='text-8xl py-4'>Comming Soon...</h2>
        <FaEdit className='text-5xl' />
      </div>
    </div>
  );
};

export default Blog;