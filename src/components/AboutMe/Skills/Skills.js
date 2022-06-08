import React from 'react';

const Skills = () => {
  return (
    <div className='lg:max-w-7xl max-w-xl lg:mx-auto mx-4 mt-8'>
      <h2 className='lg:text-5xl text-3xl text-center text-white uppercase font-extrabold'>My Skills</h2>

      <div className="mt-8 overflow-x-auto">
        <div className="w-full">
          <div className='flex border p-2 m-2 lg:flex-row flex-col rounded-lg'>
            <div className='w-[320px]'> <p className='text-lg uppercase'>Frontend Technology</p></div>
            <div><p className="text-lg">Javascript, React Js, Html5, Css3, Bootstrap, Tailwind, Firebase, React Query, React Hooks</p></div>
          </div>

          <div className='flex border p-2 m-2 lg:flex-row flex-col rounded-lg'>
            <div className='w-[320px]'> <p className='text-lg uppercase'>Backend Technology</p></div>
            <div><p className="text-lg">Node Js, Express Js, PHP, Laravel, MongoDb, Mysql</p></div>
          </div>

          <div className='flex border p-2 m-2 lg:flex-row flex-col rounded-lg'>
            <div className='w-[320px]'> <p className='text-lg uppercase'>Comfortable Technology</p></div>
            <div><p className="text-lg">Rest API, Payment Getaway, Context API, JWT-Auth, SASS, Firebase Auth, Firebase Hosting</p></div>
          </div>

          <div className='flex border p-2 m-2 lg:flex-row flex-col rounded-lg'>
            <div className='w-[320px]'> <p className='text-lg uppercase'>Familier Technology</p></div>
            <div><p className="text-lg">TypeScript, Next Js, React Native, Mongoose.</p></div>
          </div>
          <div className='flex border p-2 m-2 lg:flex-row flex-col rounded-lg'>
            <div className='w-[320px]'> <p className='text-lg uppercase'>Tools</p></div>
            <div><p className="text-lg">GitHub, VS Code, Chrome Dev Tools, Heroku, Netlify, Firebase, Postman, Figma, Adobe XD, Photoshop, Illustrator</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;