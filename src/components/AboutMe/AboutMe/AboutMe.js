import React from 'react';
import About from '../About/About';
import Skills from '../Skills/Skills';
import './aboutme.css';

const AboutMe = () => {
  return (
    <div className='bg-neutral py-8'>
      <About></About>
      <Skills></Skills>
    </div>
  );
};

export default AboutMe;