import React from 'react';

const Project = ({ project }) => {
  const { project_name, project_thubnail, projects_feature, live_link, client_site_link, server_site_link } = project;

  return (
    <div className="shadow-2xl p-4">
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
          <div className='flex lg:flex-row flex-col gap-4'>
            <a className='btn btn-success btn-sm' rel='noreferrer' href={client_site_link} target="_blank">Client Site</a>

            <a className='btn btn-warning btn-sm' rel='noreferrer' href={live_link} target="_blank">Live Site</a>

            <a className='btn btn-success btn-sm' rel='noreferrer' href={server_site_link} target="_blank">Server Site</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Project;