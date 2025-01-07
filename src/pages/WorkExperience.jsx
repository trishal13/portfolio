// redesign this using claude ai
import React from 'react';
import { work } from '../utils/data';
import "./WorkExperience.css";

const WorkExperience = () => {
  return (
    <>
      <div className="bg-transparent text-white py-10 px-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-6">Work Experience</h1>
        {work.length === 0 && (
          <p className="text-sm text-gray-400 italic" style={{ fontFamily: 'Consolas, monospace' }}>
            Currently no work experience
          </p>
        )}
      </div>

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