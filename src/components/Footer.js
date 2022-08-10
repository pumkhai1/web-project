import React from 'react';
import "../styles/Footer.css";

import { Button } from '@material-ui/core';

import LinkedInIcon  from '@material-ui/icons/LinkedIn';
import EmailIcon  from '@material-ui/icons/Email';
import GithubIcon  from '@material-ui/icons/GitHub';


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            
            <Button href='https://www.linkedin.com/in/pumkhai/'> <LinkedInIcon /> </Button>
            <Button href= {`mailto:pumk2000@gmail.com`}><EmailIcon /> </Button>
            <Button href='https://github.com/pumkhai1'> <GithubIcon /> </Button>
        </div>
        <p> &copy; 2022 pumkhaiweb.com</p>
    </div>
  )
}

export default Footer