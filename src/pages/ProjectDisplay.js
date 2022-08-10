import React from 'react';
import { useParams } from 'react-router-dom';
import "../styles/ProjectDisplay.css"

import { projectList } from '../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Button } from '@material-ui/core';

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id];
  return (
    <div className='project'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>{project.name}</h1>
        <img src={project.image} alt=""/>
        <p>
            <b>Desc:</b> {project.desc}
            <br />
            <br />
            <b>Skills:</b> {project.skills}
        </p>
      
        <Button href = {project.gitLink}><GitHubIcon/></Button>
        <br />
        <br />
        <br />
  
    </div>
  )
}

export default ProjectDisplay