import React from 'react';
import ProjectItem from '../components/ProjectItem';
import "../styles/Projects.css"

import {projectList} from "../helpers/ProjectList";
import {useTypewriter} from "react-simple-typewriter";


function Project() {
  const {text} = useTypewriter({
    words: ['My Personal Projects'],
    loop: 0 // Infinit
  });

  return (
    <div className='projects'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1> {text}</h1>
      <div className='projectList'>
        {projectList.map((project, idx) => {
            return <ProjectItem id={idx} name={project.name} image={project.image}/>
        })}
      </div>
    </div>

    
  )
}

export default Project