import React, { useState } from 'react';
import { codingProfiles } from '../utils/data';
import { Link } from 'react-router-dom';
import Slideshow from './SlideShow';

const TechnicalSkills = () => {
  const [mousePosition, setMousePosition] = useState(null);
  const [borderGradient, setBorderGradient] = useState({});

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const borderThreshold = 150;

    const isNearTop = y < borderThreshold;
    const isNearBottom = y > rect.height - borderThreshold;
    const isNearLeft = x < borderThreshold;
    const isNearRight = x > rect.width - borderThreshold;

    const gradientStyles = {};

    if (isNearTop) {
      gradientStyles.borderTop = "2px solid transparent";
      gradientStyles.boxShadow = "0 -8px 15px rgba(236, 72, 153, 0.5)";
      gradientStyles.borderImage = "linear-gradient(to right, #ec4899, #8b5cf6, #6366f1) 1";
    }
    if (isNearBottom) {
      gradientStyles.borderBottom = "2px solid transparent";
      gradientStyles.borderImage = "linear-gradient(to right, #ec4899, #8b5cf6, #6366f1) 1";
      gradientStyles.boxShadow = "0 8px 15px rgba(236, 72, 153, 0.5)";
    }
    if (isNearLeft) {
      gradientStyles.borderLeft = "2px solid transparent";
      gradientStyles.boxShadow = "-8px 0 15px rgba(236, 72, 153, 0.5)";
      gradientStyles.borderImage = "linear-gradient(to bottom, #ec4899, #8b5cf6, #6366f1) 1";
    }
    if (isNearRight) {
      gradientStyles.borderRight = "2px solid transparent";
      gradientStyles.boxShadow = "8px 0 15px rgba(236, 72, 153, 0.5)";
      gradientStyles.borderImage = "linear-gradient(to bottom, #ec4899, #8b5cf6, #6366f1) 1";
    }

    setBorderGradient(gradientStyles);
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition(null);
    setBorderGradient({});
  };

  return (
    <div
      className="flex flex-col lg:flex-row gap-8 p-4 sm:p-6 rounded-3xl transition-all duration-300 relative overflow-hidden bg-transparent"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...borderGradient, transition: "border 0.2s ease, box-shadow 0.2s ease, border-radius 0.2s ease" }}
    >
      {mousePosition && (
        <div
          className="absolute bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-40 rounded-full pointer-events-none blur-[100px]"
          style={{
            width: "300px",
            height: "300px",
            top: `${mousePosition.y - 150}px`,
            left: `${mousePosition.x - 150}px`,
          }}
        />
      )}

      {/* Slideshow Section */}
      <div className="w-full lg:w-3/5">
        <Slideshow />
      </div>

      {/* Coding Profiles Section */}
      <section className="w-full lg:w-2/5">
        <h2 className="text-2xl font-semibold text-red-500 mb-6">Coding Profile Links</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
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
                  loading="lazy"
                />
                <p className="text-sm font-medium mt-2">{item?.platform}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechnicalSkills;