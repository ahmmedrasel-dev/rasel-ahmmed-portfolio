import React from 'react';

const Skills = () => {
  return (
    <div className='max-w-7xl mx-auto mt-8'>
      <h2 className='text-5xl text-center text-white uppercase font-extrabold'>My Skills</h2>

      <div class=" mt-8">
        <table class="table table-zebra w-full">
          <tbody>
            <tr>
              <th>Frontend Technology</th>
              <td>Javascript, React Js, Html5, Css3, Bootstrap, Tailwind, Firebase, React Query, React Hooks</td>
            </tr>
            <tr>
              <th>Backend Techonlogy</th>
              <td>Node Js, Express Js, PHP, Laravel, MongoDb, Mysql</td>
            </tr>
            <tr>
              <th>Comfortable Technology</th>
              <td>Rest API, Payment Getaway, Context API, JWT-Auth, SASS, Firebase Auth, Firebase Hosting.</td>
            </tr>

            <tr>
              <th>Familier Technology</th>
              <td>TypeScript, Next Js, React Native, Mongoose.</td>
            </tr>

            <tr>
              <th>Tools</th>
              <td>GitHub, VS Code, Chrome Dev Tools, Heroku, Netlify, Firebase, Postman, Figma, Adobe XD, Photoshop, Illustrator.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Skills;