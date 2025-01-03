import React from 'react';
import { education, technicalSkills, codingProfiles, miscallenious, info } from '../utils/data';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <>
      <div>
        <div>About Me</div>
        <p>
          Hi! My name is {info?.firstName} {info?.lastName}, and 
          I'm a Computer Science & Engineering student
          at Maulana Azad National Institute of Technology, Bhopal M.P.
        </p>
        <p>
          I'm a passionate software engineering enthusiast 
          dedicated to crafting innovative solutions for real-world challenges. 
          Combining hard work with strategic thinking, I tackle problems with creativity 
          and determination, continuously seeking opportunities to learn and grow. 
          My enthusiasm for problem-solving inspires me to develop impactful 
          applications that make a meaningful difference.
        </p>

        <div>
          <div>Education</div>
          <div>
            {education.map((item, index) => (
              <div key={index}>
                <div>{item?.duration}</div>
                <div>
                  <div>{item?.degree}</div>
                  <div>from {item?.institute}</div>
                </div>
                <div>
                  with {
                  (item?.cgpa ? `a cumulative cgpa of ${item?.cgpa}` : "") || 
                  (item?.percentage ? `${item?.percentage}` : "")
                }</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div>
            <div>Technical Skills</div>
            <div>{
              Object.keys(technicalSkills).map((key) => 
                <div key={key}>
                  <div>{key}</div>
                  <div>
                    {technicalSkills[key].map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </div>
                </div>
            )}</div>
          </div>
          <div>
            <div>Coding Profile Links</div>
            <div>{
                codingProfiles.map((item, index) => (
                  <div key={index}>
                    <Link to={item?.profileurl} target='_blank' rel="noopener noreferrer">
                      <img src={item?.logo} alt={`${item?.platform}_${item?.userId}`} />
                      <div>{item?.platform}</div>
                    </Link>
                  </div>
                ))
            }</div>
          </div>
        </div>
        <div>
          <div>Miscallenious</div>
          <div>
            {
              miscallenious.map((item, index) => (
                <div key={index}>
                  <div>{item}</div>
                </div>
              ))
            }
          </div>
        </div>
        {/* 
          education, technical skills, 
          coding profile links: leetcode, gfg, github, codechef, codeforces
          miscallenious: jee mains rank, gym intrest
        */}
      </div>
    </>

  )
}

export default AboutMe;
