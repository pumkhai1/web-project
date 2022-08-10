import React from 'react';
import {
  VerticalTimeline, 
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

import "../styles/Experiences.css"

function Experience() {
  return (
    <div className='experience'>
      <br />
      <br />
      <br />
      <br />
      <br />

      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2014-2018'
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon/>}
          >
            <h3 className='vertical-timeline-element-title'> 
              Logansport High School, Logansport, IN
            </h3>
            <p> Academic Honor Diploma</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--education' 
            date='2018-2022'
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<SchoolIcon/>}
          >
            <h3 className='vertical-timeline-element-title'> 
              Purdue University, West Lafayette, IN
            </h3>
            <p> Bachelor of Science in Math-Computer Science</p>
          </VerticalTimelineElement>
      </VerticalTimeline>

      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className='vertical-timeline-element--work' 
        date='2018-present'
        iconStyle={{background: "#e9d35b", color: "#fff"}}
        icon={<WorkIcon/>}
          >
            <h3 className='vertical-timeline-element-title'> 
              Interpreter - Tyson Foods
            </h3>
            <h4 className='vertical-timeline-element-title'>
            Logansport, IN
            </h4>
            <p> I was responsible for interpreting from Burmese to English and vice versa to bridge the language barrier by utilizing my knowledge of the Burmese language. At the same time maintain all interpretations between clients confidential and professional.  </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--education' 
            date='2020-2021'
            iconStyle={{background: "#e9d35b", color: "#fff"}}
            icon={<WorkIcon/>}
          >
            <h3 className='vertical-timeline-element-title'> 
              Undergraduate Data Science Researcher - The Data Mine - Purdue University 
            </h3>
            <h4 className='vertical-timeline-element-title'>
              West Lafayette, IN
            </h4>
            <p>As part of my role as an Undergraduate Data Science Researcher for the academic year 2020 to 2021, I collaborated with Ford Motor Company with their NLP model. I analyzed the performance of the NLP model on strengths and weaknesses and as well as a brainstormed solutions on how to improve the performance of the NLP model initially. </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--education' 
            date='2021-2022'
            iconStyle={{background: "#e9d35b", color: "#fff"}}
            icon={<WorkIcon/>}
          >
            <h3 className='vertical-timeline-element-title'> 
              Undergraduate Data Science Researcher - The Data Mine - Purdue University 
            </h3>
            <h4 className='vertical-timeline-element-title'>
              West Lafayette, IN
            </h4>
            <p>As part of my role as an Undergraduate Data Science Researcher for the academic year 2021 to 2022, I collaborated with Caterpillar. My main contribution is the overall project's high level plan.</p>
          </VerticalTimelineElement>
      </VerticalTimeline>    
    </div>
  )
}

export default Experience