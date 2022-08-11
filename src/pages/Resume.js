import React from 'react';
import resume from '../assets/resume.png';
import '../styles/Resume.css';

function Resume(){
    return (
        <div className='Resume' >
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <embed src={resume} width="100%" height="100%"/>
        </div>
    )
}

export default Resume;