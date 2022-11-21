import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
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
  // console.log(blogs)

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className='blog bg-neutral '>
      <div className='max-w-7xl  mx-auto '>
        <h1 className='py-10 text-2xl uppercase'>Latest Blog</h1>
        <div className='grid grid-cols-3 gap-6'>
          {
            blogs.map(item => (
              <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src={item.thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: item.content.slice(0, 60) + ' ...' }}></p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm" >Read More</button>
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