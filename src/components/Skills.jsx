import React, { useEffect } from "react";
import CircularProgress from "./CircularProgress";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <section id="Skills" className="skills-section py-16 text-white">
      <div className="text-center mb-12">
        <h2
          className="text-3xl font-semibold"
          data-aos="fade-left" 
          data-aos-duration="1000"
        >
          My Skills
        </h2>
        <p
          className="text-lg text-[#FF7A8A]"
          data-aos="fade-left" // Fade from left for this text too
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          Technologies I am proficient in
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
      
        <div
          className="skill-category text-center bg-[#432E54] p-6 rounded-xl shadow-2xl w-[300px] h-[350px] sm:w-[280px] sm:h-[330px] hover:scale-105 hover:shadow-xl transition-all duration-300"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="flex justify-center gap-4 mt-6">
            <CircularProgress percentage={95} label="Frontend" color="#60f7f5" />
          </div>
          <h3 className="text-xl font-medium mt-4 text-[#FF7A8A]">Frontend Development</h3>
          <p className="text-sm text-[#e18ee7]">HTML, CSS, JavaScript, React, Tailwind</p>
        </div>
        <div
          className="skill-category text-center bg-[#432E54] p-6 rounded-xl shadow-xl w-[300px] h-[350px] sm:w-[280px] sm:h-[330px] hover:scale-105 hover:shadow-xl  transition-all duration-300"
          data-aos="fade-right" 
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="flex justify-center gap-4 mt-6">
            <CircularProgress percentage={80} label="Design" color="#7aff70" />
          </div>
          <h3 className="text-xl font-medium mt-4 text-[#FF7A8A]">Design Tools</h3>
          <p className="text-sm text-[#e18ee7]">Canva, Figma, Adobe Photoshop</p>
        </div>

      
        <div
          className="skill-category text-center bg-[#432E54] p-6 rounded-xl shadow-2xl w-[300px] h-[350px] sm:w-[280px] sm:h-[330px] hover:scale-105 hover:shadow-xl transition-all duration-300"
          data-aos="fade-right" 
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="flex justify-center gap-4 mt-6">
            <CircularProgress percentage={85} label="Version Control" color="#edf255" />
          </div>
          <h3 className="text-xl font-medium mt-4 text-[#FF7A8A]">Version Control</h3>
          <p className="text-sm text-[#e18ee7]">Git, GitHub</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
