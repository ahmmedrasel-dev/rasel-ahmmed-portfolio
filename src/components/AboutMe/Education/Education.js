import React from 'react';
import EducationItem from './EducationItem';



const Education = () => {
  return (
    <div className='lg:max-w-7xl max-w-xl lg:mx-auto mx-4 my-8'>
      <h2 className='lg:text-5xl text-3xl text-center text-white uppercase font-extrabold'>My Education & Courses</h2>

      <div className='grid lg:grid-cols-3 grid-cols-1'>
        <EducationItem
          year="2011-2015"
          degree="Bachelor of Business Administration"
          institute="Daffodil International University"
        />


        <EducationItem
          year="2022-2023"
          degree="Web Development with Jhankar Mahmud"
          institute="Programming Hero"
        />

        <EducationItem
          year="2021-2022"
          degree="Professional Web Development"
          institute="Creative II institute"
        />


      </div>
    </div>
  );
};

export default Education;