import React from 'react';
import About from '../About/About';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import './aboutme.css';

const AboutMe = () => {
  return (
    <div className='bg-neutral py-8'>
      <About></About>
      <Skills></Skills>
      <Education></Education>
    </div>
  );
};

export default AboutMe;