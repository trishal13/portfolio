import { useState, useEffect } from "react";
import { technicalSkills } from "../utils/data";
import { Code, Globe, Database, Wrench, BookOpen, Braces, Monitor } from "lucide-react";

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const skillEntries = Object.entries(technicalSkills);

  const getCategoryIcon = (category) => {
    const icons = {
      "Languages": <Braces className="w-6 h-6 text-blue-600" />,
      "Web Development": <Globe className="w-6 h-6 text-green-600" />,
      "Familiar with": <Code className="w-6 h-6 text-purple-600" />,
      "Tools": <Wrench className="w-6 h-6 text-red-600" />,
      "Coursework": <BookOpen className="w-6 h-6 text-yellow-600" />,
      "Databases": <Database className="w-6 h-6 text-orange-600" />,
    };
    return icons[category] || <Monitor className="w-6 h-6 text-gray-600" />;
  };

  const getCategoryBgColor = (category) => {
    const colors = {
      "Languages": "bg-blue-100",
      "Web Development": "bg-green-100",
      "Familiar with": "bg-purple-100",
      "Tools": "bg-red-100",
      "Coursework": "bg-yellow-100",
      "Databases": "bg-orange-100"
    };
    return colors[category] || "bg-gray-100";
  };

  useEffect(() => {
    if (skillEntries.length === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % skillEntries.length);
        setIsTransitioning(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [skillEntries]);

  const currentSlide = skillEntries[currentIndex];
  const nextSlide = skillEntries[(currentIndex + 1) % skillEntries.length];

  return (
    <section className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-red-500">Technical Skills</h2>
      <div className="relative overflow-hidden mt-2 h-60">
        {/* Current Slide */}
        <div 
          className={`absolute w-full transition-all duration-500 ease-in-out transform ${
            isTransitioning ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'
          }`}
        >
          <div className="relative flex items-start space-x-4 p-4">
            <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center ${getCategoryBgColor(currentSlide[0])} rounded-full transition-all duration-300 hover:scale-110`}>
              {getCategoryIcon(currentSlide[0])}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium mb-4">{currentSlide[0]}</h3>
              <div className="flex flex-wrap gap-3">
                {currentSlide[1].map((skill, idx) => (
                  <span
                    key={idx}
                    style={{ fontFamily: 'Consolas, monospace' }}
                    className="bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Next Slide (for smooth transition) */}
        <div 
          className={`absolute w-full transition-all duration-500 ease-in-out transform ${
            isTransitioning ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
        >
          <div className="relative flex items-start space-x-4 p-4">
            <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center ${getCategoryBgColor(nextSlide[0])} rounded-full transition-all duration-300 hover:scale-110`}>
              {getCategoryIcon(nextSlide[0])}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium mb-4">{nextSlide[0]}</h3>
              <div className="flex flex-wrap gap-3">
                {nextSlide[1].map((skill, idx) => (
                  <span
                    key={idx}
                    style={{ fontFamily: 'Consolas, monospace' }}
                    className="bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;