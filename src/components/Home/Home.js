import React from 'react';
import myphoto from '../../assets/my_photo.png';
import './home.css';
import { VscGithub } from 'react-icons/vsc';
import { FiLinkedin, FiFacebook } from 'react-icons/fi';
import TypeAnimation from 'react-type-animation';

const Home = () => {

  return (
    <div className="hero min-h-screen bg-neutral">
      <div className="hero-content flex-col lg:flex-row lg:mr-24">
        <div className='photo_bg bg-success lg:block hidden'></div>
        <div className='lg:w-2/4'>
          <img className='bg-accent lg:rounded-2xl lg:w-4/5 w-full rounded-full shadow-2xl' src={myphoto} alt="" />
        </div>
        <div className='lg:w-2/4 w-4/4'>
          <h1 className="lg:text-5xl text-4xl lg:text-left text-center font-bold uppercase text-success text-bold mb-2">I'm Rasel Ahmmed</h1>
          <div>
            <TypeAnimation
              className='text-white lg:text-4xl lg:text-left text-xl text-center uppercase'
              cursor={true}
              sequence={['MERN Stack Developer.', 3000, 'React Js Developer.', 3000]}
              wrapper="h2"
              repeat={Infinity}
            />
          </div>
          <p className="py-6 lg:mr-10 lg:text-left text-center text-white">I am an ambitious and hardworking individual with broad skills and experience in Full-stack web develop- ment. I have experience working as part of a team and individually. I am always energetic and eager to learn new skills and techniques. I have been able to deliver my work with a consistent approach throughout a challenging periods.</p>
          <button className="btn btn-success mr-2">More About Me</button>
          <button className="btn btn-success">Downalod Resume</button>

          <div className='flex gap-5 mt-8'>
            <a className='border-2 rounded-full p-2 hover:border-success hover:text-success' href="https://www.linkedin.com/in/ahmmedrasel-dev/" target='_blank' rel="noreferrer"><FiLinkedin className='text-2xl shadow-md' /></a>
            <a className='border-2 rounded-full p-2 hover:border-success hover:text-success' href="https://www.linkedin.com/in/ahmmedrasel-dev/" target='_blank' rel='noreferrer'><VscGithub className='text-2xl shadow-md' /></a>
            <a className='border-2 rounded-full p-2 hover:border-success hover:text-success' href="https://www.linkedin.com/in/ahmmedrasel-dev/" target='_blank' rel='noreferrer'><FiFacebook className='text-2xl shadow-md' /></a>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Home;