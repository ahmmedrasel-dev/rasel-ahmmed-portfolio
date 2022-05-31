import React from 'react';
import myphoto from '../../assets/my_photo.png';
import './home.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import AnimatedCursor from 'react-animated-cursor';
import TypeAnimation from 'react-type-animation';

const Home = () => {

  return (
    <div className="hero min-h-screen bg-neutral">
      <div className="hero-content flex-col lg:flex-row ">
        <div className='photo_bg bg-gradient-to-r from-secondary to-success'></div>
        <div className='w-2/4'>
          <img className='bg-base-100 rounded-2xl w-4/5 shadow-2xl' src={myphoto} alt="" />
        </div>
        <div className='w-2/4'>
          <h1 className="text-5xl font-bold uppercase text-success text-bold mb-2">I'm Rasel Ahmmed</h1>
          <div>
            <TypeAnimation
              className='text-white text-4xl uppercase'
              cursor={true}
              sequence={['MERN Stack Developer.', 3000, 'React Js Developer.', 3000]}
              wrapper="h2"
              repeat={Infinity}
            />
          </div>
          <p className="py-6 text-white">I am an ambitious and hardworking individual with broad skills and experience in Full-stack web develop- ment. I have experience working as part of a team and individually. I am always energetic and eager to learn new skills and techniques. I have been able to deliver my work with a consistent approach throughout a challenging periods.</p>
          <button className="btn btn-success">More About Me</button>

          <div className='flex gap-5 mt-8'>
            <a href="https://www.linkedin.com/in/ahmmedrasel-dev/" target='_blank' rel="noreferrer"><BsLinkedin className='text-3xl text-blue-500 shadow-md' /></a>
            <a href="https://www.linkedin.com/in/ahmmedrasel-dev/" target='_blank' rel='noreferrer'><BsGithub className='text-3xl text-white shadow-md' /></a>
            <a href="https://www.linkedin.com/in/ahmmedrasel-dev/" target='_blank' rel='noreferrer'><FaFacebookF className='text-3xl text-blue-600 shadow-md' /></a>
          </div>
        </div>
      </div >
      <AnimatedCursor />
    </div >
  );
};

export default Home;