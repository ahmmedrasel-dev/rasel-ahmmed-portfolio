import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../Api/AxiosPrivate';
import { Loading } from '../../components/Loading/Loading';
import auth from '../../firebase.init';
import Blog from './Blog';

const Blogs = () => {
  const navigate = useNavigate();
  const { data: blogs, isLoading, refetch } = useQuery('blogs',
    async () => {
      try {
        const { data } = await axiosPrivate.get('https://rasel-web-server.onrender.com/blogs');
        return data;
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          localStorage.removeItem('accessToken');
          navigate('/')
        }
      }
    }
  )

  if (isLoading) {
    return <Loading></Loading>
  }
  return (

    <div className="overflow-x-auto mt-6">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Sl</th>
            <th>Images</th>
            <th>Post Title</th>
            <th>Category</th>
            <th className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            blogs.map((item, index) => <Blog
              key={index}
              sl={index}
              blog={item}
              refetch={refetch}
            ></Blog>)
          }
        </tbody>
      </table>

    </div>

  );
};

export default Blogs;