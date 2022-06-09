import React, { useEffect, useState } from 'react';
import Project from './Project';


const Projects = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch('projects.json')
      .then(res => res.json())
      .then(data => setProject(data))
  }, [])

  return (
    <div className='bg-neutral py-8'>
      <div className='lg:max-w-7xl max-w-xl lg:mx-auto mx-4 pb-10 mt-10'>
        <h2 className='lg:text-5xl text-3xl text-center uppercase font-extrabold'>My Projects</h2>


        <div className='max-w-7xl mx-auto my-12'>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
            {
              project.map((project) => <Project
                key={project._id}
                project={project}
              >
              </Project>)
            }
          </div>
        </div>

      </div>
    </div>

  );
};

export default Projects;