import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { Loading } from '../Loading/Loading';
import './blog.css';

const Blog = () => {

  const { data: blogs, isLoading } = useQuery('blogs',
    async () => {
      try {
        const { data } = await axios.get('https://rasel-web-server.onrender.com/allblogs');
        return data;
      } catch (error) {
        console.log(error)
      }
    }
  )
  const navigate = useNavigate();
  const handleReadMore = slug => {
    navigate(`/blog/${slug}`);
  }

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className='blog bg-neutral pb-10'>
      <div className='lg:max-w-5xl max-w-xl lg:mx-auto px-4'>
        <h1 className='lg:text-3xl text-2xl uppercase font-extrabold py-10'>Latest Blog</h1>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
          {
            blogs.map(item => (
              <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src={item.thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: item.content.slice(0, 60) + ' ...' }}></p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm" onClick={() => handleReadMore(item.slug)}>Read More</button>
                  </div>
                </div>
              </div>
            ))
          }


        </div>
      </div>
    </div>
  );
};

export default Blog;