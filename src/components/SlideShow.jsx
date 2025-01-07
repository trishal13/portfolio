import { useState, useEffect } from "react";
import { technicalSkills } from "../utils/data";
import { 
  Code, 
  Globe, 
  Database, 
  Terminal,
  Wrench, 
  BookOpen,
  Braces,
  Monitor
} from "lucide-react";

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
      "Databases": <Database className="w-6 h-6 text-orange-600" />
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

  const getSlideItems = () => {
    const firstIndex = currentIndex;
    const secondIndex = (currentIndex + 1) % skillEntries.length;
    return [skillEntries[firstIndex], skillEntries[secondIndex]];
  };

  const slideItems = getSlideItems();

  return (
    <section className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-red-500">Technical Skills</h2>
      <div className="relative overflow-hidden mt-4 h-96">
        <div 
          className={`absolute w-full transition-transform duration-500 ease-in-out ${
            isTransitioning ? '-translate-y-1/2' : 'translate-y-0'
          }`}
        >
          {slideItems.map(([category, skills], index) => (
            <>
              <div
                key={`${category}-${index}`}
                className="relative flex items-start space-x-4 p-4 h-48"
              >
                <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center ${getCategoryBgColor(category)} rounded-full transition-all duration-300 hover:scale-110`}>
                  {getCategoryIcon(category)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                        <span
                            key={idx}
                            style={{ fontFamily: 'Consolas, monospace' }}
                            className="bg-gradient-to-r from-red-700 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                        >
                            {skill}
                        </span>
                  
                    ))}
                  </div>
                </div>
              </div>
              {index === 0 && (
                <div className="h-px bg-red-500/60 max-w-xl"></div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slideshow;