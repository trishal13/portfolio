import React, { useState } from "react";
import { Calendar } from "lucide-react";
import { education } from "../utils/data";

const EducationSection = () => {
  const [mousePosition, setMousePosition] = useState(null);
  const [borderGradient, setBorderGradient] = useState({});

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const borderThreshold = 200;

    // Determine which border the mouse is nearest to
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
    <section
      className={`space-y-6 p-6 rounded-3xl transition-all duration-300 relative overflow-hidden bg-transparent`}
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

      <h2 className="text-2xl font-semibold text-red-500">Education</h2>
      <div className="space-y-4" style={{ fontFamily: "Consolas, monospace" }}>
        {education.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-transparent hover:scale-105 transform transition-transform duration-300"
          >
            <div className="flex items-center gap-2 text-gray-300 mb-3">
              <Calendar className="h-5 w-5 text-red-500" />
              <span className="font-medium text-red-500">{item?.duration}</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">
              {item?.degree}
            </h3>
            <p className="text-gray-400 italic"> from {item?.institute}</p>
            {(item?.cgpa || item?.percentage) && (
              <p className="text-gray-300 mt-2">
                {item?.cgpa
                  ? `with a cumulative CGPA of ${item?.cgpa}`
                  : `with ${item?.percentage}`}
              </p>
            )}
            <div className="flex items-center justify-center mt-4">
              <div className="flex-grow h-px bg-red-500/60 max-w-sm" />
              <div className="flex-grow h-px bg-red-500/60 max-w-sm" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;