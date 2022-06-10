import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams()
  const [project, setProject] = useState({})

  const { project_name,
    img_1,
    img_2,
    img_3,
    projects_feature,
    live_link,
    client_site_link,
    server_site_link,
    project_description,
    technology } = project


  useEffect(() => {
    const url = `http://localhost:5000/project/${id}`;
    const data = async () => {
      const { data } = await axios.get(url);
      setProject(data)
    }
    data()

  }, [id])



  return (
    < div className='bg-neutral py-8' >
      <div className='lg:max-w-7xl w-full lg:mx-auto mx-4'>
        <h1 className='text-5xl text-center py-4'>{project_name}</h1>
        <img className='text-center' src={img_1} alt="" />

        <p className='text-xl py-4'>{project_description}</p>

        <img src={img_2} alt="" />
        <p className='text-2xl py-4'>Main Features: </p>
        <ul>
          {
            projects_feature.map((feature, index) => <li
              className='text-lg py-2'
              key={index}
            >
              {feature}
            </li>)
          }
        </ul>
        <img src={img_3} alt="" />
        {
          technology.map((tech, index) => <button
            key={index}
            className="btn btn-outline m-2 btn-sm btn-warning"
          >#{tech}</button>
          )
        }


        <div className='flex gap-5'>
          <a className='btn btn-xl btn-success' href={live_link}>Live Link</a>
          <a className='btn btn-xl btn-success' href={client_site_link}>Client Site Link</a>

          {
            server_site_link && <a className='btn btn-xl btn-success' href={server_site_link}>Server Site Link</a>
          }
        </div>
      </div>
    </div >

  );
};

export default ProjectDetails;