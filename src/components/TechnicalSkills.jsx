import React, { useState } from 'react';
import { codingProfiles } from '../utils/data';
import { Link } from 'react-router-dom';
import Slideshow from './SlideShow';
import { SiLeetcode, SiGithub, SiGeeksforgeeks, SiCodechef, SiCodeforces } from 'react-icons/si';

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

  const icons = [
    { 
      Icon: SiLeetcode, 
      label: 'LeetCode', 
      url: codingProfiles.find(n => n.platform.toLowerCase() === 'leetcode')?.profileurl,
      color: '#FFA116',
      gradient: '#D88708'
    },
    { 
      Icon: SiGeeksforgeeks, 
      label: 'GeeksforGeeks', 
      url: codingProfiles.find(n => n.platform.toLowerCase() === 'geeksforgeeks')?.profileurl,
      color: '#2F8D46',
      gradient: '#215732'
    },
    { 
      Icon: SiGithub, 
      label: 'GitHub', 
      url: codingProfiles.find(n => n.platform.toLowerCase() === 'github')?.profileurl,
      color: '#24292e',
      gradient: '#171515'
    },
    { 
      Icon: SiCodechef, 
      label: 'CodeChef', 
      url: codingProfiles.find(n => n.platform.toLowerCase() === 'codechef')?.profileurl,
      color: '#5B4638',
      gradient: '#402E23'
    },
    { 
      Icon: SiCodeforces, 
      label: 'CodeForces', 
      url: codingProfiles.find(n => n.platform.toLowerCase() === 'codeforces')?.profileurl,
      color: '#1F8ACB',
      gradient: '#1A71A4'
    },
  ];

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
      <div className="w-full lg:w-1/2">
        <Slideshow />
      </div>

      {/* Coding Profiles Section */}
      <section className="w-full lg:w-1/2">
        <h2 className="text-2xl font-semibold text-red-500 mb-6">Coding Profile Links</h2>
        <div className="flex flex-wrap gap-8 justify-center items-center">
          {icons.map(({ Icon, color, gradient, label, url }) => (
            <Link
              key={label}
              to={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group peer relative w-16 h-16 transform transition-transform duration-300 hover:scale-125"
            >
              {/* Floating effect particles */}
              <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-1/4 w-1 h-1 rounded-full bg-white/30 animate-ping" />
                <div className="absolute bottom-0 right-1/4 w-1 h-1 rounded-full bg-white/30 animate-ping [animation-delay:200ms]" />
                <div className="absolute top-1/2 right-0 w-1 h-1 rounded-full bg-white/30 animate-ping [animation-delay:400ms]" />
              </div>
    
              {/* Bottom layer - shadow */}
              {/* <div className="absolute inset-0 rounded-2xl bg-white/20 transform translate-y-4 blur-md 
                            group-hover:translate-y-6 group-hover:blur-lg transition-all duration-300" /> */}
              
              {/* Middle layer - side panels */}
              <div className="absolute left-0 top-1/2 w-1 h-8 -translate-y-1/2 -translate-x-1 group-hover:h-10 transition-all duration-300 opacity-90"
                   style={{ backgroundColor: color, transform: 'rotateY(-90deg)' }} />
              <div className="absolute right-0 top-1/2 w-1 h-8 -translate-y-1/2 translate-x-1 group-hover:h-10 transition-all duration-300 opacity-90"
                   style={{ backgroundColor: color, transform: 'rotateY(90deg)' }} />
              <div className="absolute bottom-0 left-1/2 w-8 h-1 -translate-x-1/2 translate-y-1 group-hover:w-10 transition-all duration-300 opacity-90"
                   style={{ backgroundColor: color, transform: 'rotateX(90deg)' }} />
              
              {/* Top layer - main icon container */}
              <div 
                className="absolute inset-0 rounded-2xl shadow-lg transform transition-all duration-300 
                           group-hover:-translate-y-4 group-hover:scale-110"
                style={{ 
                  background: `linear-gradient(135deg, ${color}, ${gradient})`,
                  transform: 'perspective(1000px) rotateX(10deg) rotateY(0deg)',
                  opacity: 0.95
                }}
              >
                {/* Icon wrapper */}
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <Icon 
                    className="text-white transform transition-all duration-300 
                             group-hover:scale-110 group-hover:rotate-12"
                    size={24}
                  />
                  
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-all duration-500
                                bg-gradient-to-r from-transparent via-white/40 to-transparent
                                -translate-x-full group-hover:translate-x-full" 
                       style={{ transitionProperty: 'opacity, transform' }}
                  />
                </div>
              </div>
              
              {/* Click effect */}
              <div className="absolute inset-0 rounded-2xl bg-white/0 group-active:bg-white/20 
                             transform transition-all duration-75" />
    
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100
                             transition-opacity duration-300 text-sm text-gray-300 whitespace-nowrap">
                {label}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechnicalSkills;