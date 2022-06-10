import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { AiFillCheckSquare } from "react-icons/ai";

const ProjectDetails = () => {
  const { id } = useParams()

  const { data: project, isLoading } = useQuery('project',
    async () => {
      try {
        const { data } = await axios.get(`https://rasel-web-portfolio.herokuapp.com/project/${id}`);
        // console.log(data);
        return data;
      }
      catch (error) {
        console.log(error.message)
      }
    }
  )

  if (isLoading) {
    return 'Loadign ....'
  }


  return (
    < div className='bg-neutral py-8' >
      <div className='lg:max-w-7xl w-full lg:mx-auto mx-4'>
        <h1 className='text-5xl text-center py-8'>{project.project_name}</h1>
        <img className='text-center' src={project.img_1} alt="" />

        <p className='text-xl py-4'>{project.project_description}</p>

        <img src={project.img_2} alt="" />
        <p className='text-2xl py-4'>Main Features: </p>
        <ul className='mb-8'>
          {
            project.projects_feature.map((feature, index) => <li
              key={index}
              className="flex items-center"
            ><AiFillCheckSquare className='mr-3' /> {feature}</li>)
          }
        </ul>

        <img src={project.img_3} alt="" />

        <p className='text-2xl py-4'>Technology Used: </p>
        {
          project.technology.map(tech => <button
            class="btn btn-outline btn-warning m-2"

          >{tech}</button>)
        }
        <div className='flex gap-5 mt-8'>
          <a className='btn btn-xl btn-success' href={project.live_link} target="_blank" rel="noreferrer">Live Link</a>
          <a className='btn btn-xl btn-success' href={project.client_site_link} target="_blank" rel="noreferrer">Client Site Code Link</a>

          {
            project.server_site_link && <a className='btn btn-xl btn-success' href={project.server_site_link}>Server Site Code Link</a>
          }

        </div>
      </div>
    </div >

  );
};

export default ProjectDetails;