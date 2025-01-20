import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { Github } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { projects } from "../utils/data";

const Projects = () => {
  return (
    <div className="bg-transparent text-white py-10 px-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-6">Featured Projects</h1>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          spaceBetween={30}
          slidesPerView="auto"
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full max-w-6xl"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="w-full max-w-lg">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="relative group">
                  <img
                    src={project?.thumbnail}
                    alt={project?.title}
                    className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 space-y-2">
                      <div className="flex gap-4">
                        <button
                          onClick={() => window.open(project?.githubUrl, "_blank")}
                          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full transition-colors duration-300"
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3">{project?.title}</h2>
                  <p className="text-gray-400 text-sm mb-4">{project?.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project?.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-red-700 text-white text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="text-center mt-8 text-sm text-gray-400">
          Swipe or use arrow keys to navigate through projects
        </p>
    </div>
  );
};

export default Projects;