import React from 'react';
import { miscallenious, info } from '../utils/data';
import EducationSection from '../components/Education';
import TechnicalSkills from '../components/TechnicalSkills';

const AboutMe = () => {
  return (
    <div className="bg-transparent text-white py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-white mb-6">Know Me</h1>
      <div className="max-w-6xl mx-auto space-y-10">
        <div>
          <p className="text-lg">
            Hi! My name is <strong>{info?.firstName} {info?.lastName}</strong>, and I'm a Computer Science & Engineering student
            at Maulana Azad National Institute of Technology, Bhopal M.P.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mt-5">
            I'm a passionate software engineering enthusiast dedicated to crafting innovative solutions for real-world challenges. 
            Combining hard work with strategic thinking, I tackle problems with creativity and determination, continuously seeking 
            opportunities to learn and grow. My enthusiasm for problem-solving inspires me to develop impactful applications that 
            make a meaningful difference.
          </p>
        </div>
        <EducationSection />
        <TechnicalSkills />

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
