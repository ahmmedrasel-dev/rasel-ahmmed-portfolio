import React from 'react';

const About = () => {
  return (
    <div className='lg:max-w-7xl max-w-xl lg:mx-auto mx-4 border-b border-slate-100 pb-10'>
      <h2 className='lg:text-5xl text-3xl text-center uppercase font-extrabold'>About Me</h2>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10 justify-content-between align-items-center'>
        <div className=''>
          <h2 className='text-xl font-bold mb-5'>A Professional Web Application Developer.</h2>
          <p className='leading-7 text-white'>
            I am a MERN Stack Developer, and I'm very passionate and dedicated to my work. With 2 years of experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I have developed a wide range of websites from simple HTML5 and CSS3 to fully dynamic web applications using React Js and Node and Express Js.

            <span className='block mt-2'>
              I can create any type of responsive web design and a highly scalable backend system for your business. So I have the insight to provide consulting on what internet-based technology tools to use as well.
            </span>
          </p>

          <a className='btn btn-success' href="https://drive.google.com/uc?export=download&id=1nHHEZYDAaBm0TZACWobwluFFSYwLYG-M">Downalod Resume</a>
        </div>

        <div className=''>
          <h3 className='lg:text-3xl text-xl uppercase'>Personal Information</h3>
          <ul className='personal_info'>
            <li>Name: <span className='text-white text-md lg:text-xl font-bold'>Rasel Ahmmed</span></li>
            <li>Email: <span className='text-white text-md lg:text-xl font-bold'>rahmmed.info@gmail.com</span></li>
            <li>Phone: <span className='text-white text-md lg:text-xl font-bold'>966572868132</span></li>
            <li>Nationality: <span className='text-white font-bold'>Bangladeshi</span></li>
            <li>Address: <span className='text-white text-md lg:text-xl font-bold'>Dammam, Saudi Arabia</span></li>
            <li>Language: <span className='text-white text-md lg:text-xl font-bold'>Bangeli, English, Arabic</span></li>
            <li>Skype: <span className='text-white text-md lg:text-xl font-bold'>rasel_47</span></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;