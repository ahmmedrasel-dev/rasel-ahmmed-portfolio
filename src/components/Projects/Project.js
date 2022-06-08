import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
  const { project_name, project_thubnail, projects_feature, live_link, client_site_link, server_site_link, project_description, technology, _id } = project;

  const navigate = useNavigate();
  const navigateToPurchase = (id) => {
    navigate(`/purchase/${id}`);
  }

  return (
    <div className="flex items-center shadow-xl p-4">
      <figure><img className='w-96 rounded-lg' src={project_thubnail} alt="Album" /></figure>
      <div className="ml-4">
        <h2 className="text-xl">{project_name}</h2>
        <ul className='my-4'>
          {
            projects_feature.map(feature => <li className='text-sm'>{feature}</li>)
          }
        </ul>
        <div className="flex lg:flex-row flex-col justify-between">

          <div className='flex'>
            <button className="btn btn-warning btn-sm" onClick={() => navigateToPurchase(_id)}>Code Link</button>
            <button className='btn btn-sm btn-success'>Live Link</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Project;