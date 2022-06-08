import React from 'react';

const Skills = () => {
  return (
    <div className='lg:max-w-7xl max-w-xl lg:mx-auto mx-4 mt-8'>
      <h2 className='lg:text-5xl text-3xl text-center text-white uppercase font-extrabold'>My Skills</h2>

      <div className="mt-8 overflow-x-auto">
        <table className="table w-full">
          <tbody>
            <tr>
              <th className='lg:text-xl text-sm'>Frontend Technology</th>
              <td>Javascript, React Js, Html5, Css3, Bootstrap, Tailwind, Firebase, React Query, React Hooks</td>
            </tr>
            <tr>
              <th className='lg:text-xl text-sm'>Backend Techonlogy</th>
              <td>Node Js, Express Js, PHP, Laravel, MongoDb, Mysql</td>
            </tr>
            <tr>
              <th className='lg:text-xl text-sm'>Comfortable Technology</th>
              <td>Rest API, Payment Getaway, Context API, JWT-Auth, SASS, Firebase Auth, Firebase Hosting.</td>
            </tr>

            <tr>
              <th className='lg:text-xl text-sm'>Familier Technology</th>
              <td>TypeScript, Next Js, React Native, Mongoose.</td>
            </tr>

            <tr>
              <th className="lg:text-xl text-sm">Tools</th>
              <td>GitHub, VS Code, Chrome Dev Tools, Heroku, Netlify, Firebase, Postman, Figma, Adobe XD, Photoshop, Illustrator.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Skills;