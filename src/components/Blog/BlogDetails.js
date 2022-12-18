import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState({});
  const { slug } = useParams();


  useEffect(() => {
    try {
      const getDetails = async () => {
        const { data } = await axios.get(`https://rasel-web-server.onrender.com/blog/${slug}`);

        setBlogDetails(data);
      }
      getDetails()
    } catch (error) {
      console.log(error);
    }
  }, [slug])


  return (
    <div className='bg-neutral'>
      <div className='max-w-7xl  mx-auto'>
        <h1 className='py-10 text-2xl uppercase'>{blogDetails.title}</h1>
        <div>
          <img src={blogDetails.thumbnail} alt="" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: blogDetails.content }}>

        </div>
      </div>
    </div>
  );
};

export default BlogDetails;