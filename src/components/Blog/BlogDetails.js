import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton } from 'react-share';

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState({});
  const { slug } = useParams();

  const url = window.location.href;


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
      <div className='lg:max-w-5xl  mx-auto lg:pb-8 px-6 pb-24'>
        <div className='pt-8'>
          <img className='w-full' src={blogDetails.thumbnail} alt="" />
        </div>

        <h1 className='py-10 text-white text-3xl uppercase font-extrabold'>{blogDetails.title}</h1>

        <div className='flex justify-between pb-8'>

          <div className='text-left'>
            <h3 className='text-white text-xl mb-4'>Social Share</h3>

            <LinkedinShareButton url={url}>
              <LinkedinIcon round={true} size={40}></LinkedinIcon>
            </LinkedinShareButton>
            <FacebookShareButton url={url} className="ml-2">
              <FacebookIcon round={true} size={40}></FacebookIcon>
            </FacebookShareButton>
          </div>

          <div className='text-right'>
            <h3 className='text-xl font-mono text-white'>Rasel Ahmmed</h3>
            <small className='font-sm text-white'>{blogDetails.create_at}</small>
          </div>


        </div>

        <div className='text-white' dangerouslySetInnerHTML={{ __html: blogDetails.content }} />


      </div >
    </div >
  );
};

export default BlogDetails;