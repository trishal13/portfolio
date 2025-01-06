import React from 'react';
import { technicalSkills, codingProfiles, miscallenious, info } from '../utils/data';
import { Link } from 'react-router-dom';
import EducationSection from '../components/Education';

const AboutMe = () => {
  return (
    <div className="bg-transparent text-white py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold text-center text-white">Know Me</h1>
        <p className="text-lg">
          Hi! My name is <strong>{info?.firstName} {info?.lastName}</strong>, and I'm a Computer Science & Engineering student
          at Maulana Azad National Institute of Technology, Bhopal M.P.
        </p>
        <p className="text-lg">
          I'm a passionate software engineering enthusiast dedicated to crafting innovative solutions for real-world challenges. 
          Combining hard work with strategic thinking, I tackle problems with creativity and determination, continuously seeking 
          opportunities to learn and grow. My enthusiasm for problem-solving inspires me to develop impactful applications that 
          make a meaningful difference.
        </p>
        <EducationSection />
        {/* Technical Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold text-orange-400">Technical Skills</h2>
          <div className="space-y-4">
            {Object.keys(technicalSkills).map((key) => (
              <div key={key}>
                <h3 className="text-xl font-medium">{key}</h3>
                <div className="flex flex-wrap gap-3 mt-2">
                  {technicalSkills[key].map((item, index) => (
                    <span
                      key={index}
                      className="bg-orange-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium hover:bg-orange-600 transition duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coding Profiles Section */}
        <section>
          <h2 className="text-2xl font-semibold text-orange-400">Coding Profile Links</h2>
          <div className="flex flex-wrap gap-6 mt-4">
            {codingProfiles.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform duration-300"
              >
                <Link
                  to={item?.profileurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={item?.logo}
                    alt={`${item?.platform}_${item?.userId}`}
                    className="w-12 h-12 rounded-full"
                  />
                  <p className="text-sm font-medium mt-2">{item?.platform}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Miscellaneous Section */}
        <section>
          <h2 className="text-2xl font-semibold text-orange-400">Miscellaneous</h2>
          <div className="space-y-2 mt-4">
            {miscallenious.map((item, index) => (
              <p
                key={index}
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition duration-300"
              >
                {item}
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
