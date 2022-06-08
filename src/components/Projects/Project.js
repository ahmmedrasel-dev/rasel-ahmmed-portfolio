import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
  const { project_name, project_thubnail, projects_feature, live_link, client_site_link, server_site_link, project_description, technology, _id } = project;

  const navigate = useNavigate();
  const navigateToPurchase = (id) => {
    navigate(`/purchase/${id}`);
  }

  return (
    <div className="shadow-xl p-4">
      <h2 className="text-2xl uppercase py-4">{project_name}</h2>

      <figure><img className='w-full rounded-lg' src={project_thubnail} alt="Album" /></figure>
      <div className="ml-4">

        <ul className='my-4'>
          <li>Main Features:</li>
          {
            projects_feature.map(feature => <li className='text-sm pl-4'>{feature}</li>)
          }
        </ul>
        <div className="flex lg:flex-row flex-col justify-between">
          <div className='flex gap-4'>
            <button className="btn btn-warning btn-sm" onClick={() => navigateToPurchase(_id)}>Code Link</button>
            <button className='btn btn-sm btn-success'>Live Link</button>
            <button className='btn btn-sm btn-success'>Server Code Link</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Project;