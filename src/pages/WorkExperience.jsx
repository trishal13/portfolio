import React from 'react';
import { work } from '../utils/data';

const WorkExperience = () => {
  return (
    <>
      <div>WorkExperience</div>
      {work.length === 0 &&(
        <p>Currently no work expreience</p>
      )}
      {work.length !==0 &&
        work.map((item, index) => (
          <div key={index}>
            <h3>{item.company}</h3>
            <p>{item.duration}</p>
            <p>{item.role}</p>
            <p>{item.description}</p>
          </div>
        ))
      }
    </>
  )
}

export default WorkExperience;