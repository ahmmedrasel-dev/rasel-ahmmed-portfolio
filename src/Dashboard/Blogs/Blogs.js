import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Loading } from '../../components/Loading/Loading';
import Blog from './Blog';

const Blogs = () => {
  const { data: blogs, isLoading, refetch } = useQuery('blogs',
    async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/blogs');
        return data;
      } catch (error) {
        console.log(error.message)
      }
    }
  )

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      {
        blogs.map((item, index) => <Blog
          key={index}
          sl={index}
          blog={item}
          refetch={refetch}
        ></Blog>)
      }
    </div>
  );
};

export default Blogs;