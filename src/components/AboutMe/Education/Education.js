import React from 'react';
import EducationItem from './EducationItem';



const Education = () => {
  return (
    <div className='lg:max-w-7xl max-w-xl lg:mx-auto mx-4 mt-8'>
      <h2 className='lg:text-5xl text-3xl text-center text-white uppercase font-extrabold'>My Education</h2>

      <div className='grid lg:grid-cols-2 grid-cols-1'>
        <div>
          <EducationItem
            year="2011-2015"
            degree="Bachelor of Business Administration"
            institute="Daffodil International University"
          />

          <EducationItem
            year="2008-2010"
            degree="Higher Secondary School Certificate"
            institute="Adhypak Abdul Mojid College"
          />
        </div>

        <div>
          <EducationItem
            year="2021-2022"
            degree="Professional Web Development"
            institute="Creative II institute"
          />

          <EducationItem
            year="2022-Present"
            degree="MERN Stack Development"
            institute="Programming Hero"
          />
        </div>


      </div>
    </div>
  );
};

export default Education;