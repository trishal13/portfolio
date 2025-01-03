import React, { useState } from 'react';
import { info } from '../utils/data';
import { TypeAnimation } from 'react-type-animation';
import { FaBirthdayCake, FaGraduationCap, FaCity, FaExternalLinkAlt } from 'react-icons/fa';
import "./Home.css";
import { Link } from 'react-router-dom';

const InfoCard = ({ icon, label, infoValue }) => {
  const [textColor, setTextColor] = useState("text-red-500");
  return (
    <div
      onMouseEnter={() => setTextColor("text-white")}
      onMouseLeave={() => setTextColor("text-red-500")}
      style={{ fontFamily: 'Consolas, monospace' }}
      className="flex flex-col items-center justify-center text-white rounded-full border-4 border-transparent p-6 bg-transparent hover:border-red-600 hover:animate-shine hover:scale-110 transition-all duration-300 ease-in-out hover:cursor-pointer"
    >
      <div className={`text-6xl font-extrabold ${textColor}`}>
        {icon}
      </div>
      <span className={`text-xs mt-1 font-extrabold ${textColor}`}>
        {infoValue || label}
      </span>
    </div>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-full max-w-xs md:max-w-md lg:max-w-lg flex items-center justify-center">
        <img
          src={info?.profilePhoto}
          alt="profile"
          className="w-60 h-60 rounded-full border-4 border-white object-cover shadow-lg transition-all transform hover:scale-105 hover:border-8 hover:border-red-700 hover:shadow-2xl hover:ring-4 hover:ring-red-500"
        />
      </div>

      <div className="flex flex-col items-center mt-4 px-4 md:px-8">
        <p className="text-3xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text animate-gradient-background hover:scale-110 transition-transform duration-300 ease-in-out">
          {info?.firstName} {info?.lastName}
        </p>
        <TypeAnimation
          sequence={[
            "I'm a",
            500,
            "I'm a Software",
            500,
            "I'm a Software Developer",
            500,
            "I'm a Software Developer Engineer",
            500,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-4xl font-bold"
        />
      </div>

      <div className="text-white flex flex-wrap space-x-6 mt-8 justify-center items-center">
        <InfoCard
          icon={<FaBirthdayCake />}
          infoValue={info?.dateOfBirth}
        />
        <InfoCard
          icon={<FaGraduationCap />}
          label="Bachelor of Technology"
        />
        <InfoCard
          icon={<FaCity />}
          label="Indore, M.P."
        />
      </div>

      {/* Resume Button */}
      <div className="mt-7">
        <Link
          to={info?.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 font-bold text-white text-lg hover:text-purple-400 transition-colors duration-300 ease-in-out"
        >
          <span className="text-xl" style={{ fontFamily: 'Consolas, monospace' }}>Get My Resume</span>
          <FaExternalLinkAlt className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
