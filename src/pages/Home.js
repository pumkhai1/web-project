import React from 'react';
import "../styles/Home.css";

import { Button } from '@material-ui/core';

import {useTypewriter} from "react-simple-typewriter";

function Home() {
  function handleClick(){
    const win = window.open("/resume", "_self");
    win.focus();
  }

  const {text} = useTypewriter({
    words: ['Hi, My Name is Pum Khai.', 'Welcome to My Webpage.', 'Feel Free to Check My', 'Skills', 'Projects', 'Experiences', 'Blogs', 'and Resume.'],
    loop: 0 // Infinit
  });

  return (
    <div className='home'>
      <div className='about'>
        <h2>
          {text}
        </h2>
        <div className='prompt'> 
          <p> 
            A student with a passion for learning and creating want to become a software engineer. Feel free to take a look at my resume below.
          </p>
          <Button variant="outlined" size="large" color="primary" onClick={handleClick} > View Resume</Button>
        </div>
      </div>

      <div className='photo'>
          
      </div>

      <div className='skills'>
        <h1> Skills </h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End Stacks</h2>
            <span> ReactJS, HTML, CSS, MaterialUI, StyledComponents, React Native</span>
          </li>
          <li className='item'>
            <h2> Back-End Stacks</h2>
            <span> NodeJS, MS SQL</span>
          </li>
          <li className='item'>
            <h2> Programming Languages</h2>
            <span> JavaScript, Java, Python, C, MATLAB</span>
          </li>
          <li className='item'>
            <h2> Version Control</h2>
            <span> Git</span>
          </li>
          <li className='item'>
            <h2> Data Science</h2>
            <span> Machine Learning, Deep Learning, Data Mining, Natural Languages Process</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home