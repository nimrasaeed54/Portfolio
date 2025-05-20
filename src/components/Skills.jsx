// import React, { useEffect } from "react";
// import CircularProgress from "./CircularProgress";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Skills = () => {
//   useEffect(() => {
//     AOS.init(); 
//   }, []);

//   return (
//     <section id="Skills" className="skills-section py-16 text-white">
//       <div className="text-center mb-12">
//         <h2
//           className="text-3xl font-semibold"
//           data-aos="fade-left" 
//           data-aos-duration="1000"
//         >
//           My Skills
//         </h2>
//         <p
//           className="text-lg text-[#FF7A8A]"
//           data-aos="fade-left" // Fade from left for this text too
//           data-aos-duration="1200"
//           data-aos-delay="300"
//         >
//           Technologies I am proficient in
//         </p>
//       </div>

//       <div className="flex flex-wrap justify-center gap-8">
      
//         <div
//           className="skill-category text-center bg-[#432E54] p-6 rounded-xl shadow-2xl w-[300px] h-[350px] sm:w-[280px] sm:h-[330px] hover:scale-105 hover:shadow-xl transition-all duration-300"
//           data-aos="fade-right"
//           data-aos-duration="1000"
//           data-aos-delay="200"
//         >
//           <div className="flex justify-center gap-4 mt-6">
//             <CircularProgress percentage={95} label="Frontend" color="#60f7f5" />
//           </div>
//           <h3 className="text-xl font-medium mt-4 text-[#FF7A8A]">Frontend Development</h3>
//           <p className="text-sm text-[#e18ee7]">HTML, CSS, JavaScript, React, Tailwind</p>
//         </div>
//         <div
//           className="skill-category text-center bg-[#432E54] p-6 rounded-xl shadow-xl w-[300px] h-[350px] sm:w-[280px] sm:h-[330px] hover:scale-105 hover:shadow-xl  transition-all duration-300"
//           data-aos="fade-right" 
//           data-aos-duration="1000"
//           data-aos-delay="200"
//         >
//           <div className="flex justify-center gap-4 mt-6">
//             <CircularProgress percentage={80} label="Design" color="#7aff70" />
//           </div>
//           <h3 className="text-xl font-medium mt-4 text-[#FF7A8A]">Design Tools</h3>
//           <p className="text-sm text-[#e18ee7]">Canva, Figma, Adobe Photoshop</p>
//         </div>

      
//         <div
//           className="skill-category text-center bg-[#432E54] p-6 rounded-xl shadow-2xl w-[300px] h-[350px] sm:w-[280px] sm:h-[330px] hover:scale-105 hover:shadow-xl transition-all duration-300"
//           data-aos="fade-right" 
//           data-aos-duration="1000"
//           data-aos-delay="200"
//         >
//           <div className="flex justify-center gap-4 mt-6">
//             <CircularProgress percentage={85} label="Version Control" color="#edf255" />
//           </div>
//           <h3 className="text-xl font-medium mt-4 text-[#FF7A8A]">Version Control</h3>
//           <p className="text-sm text-[#e18ee7]">Git, GitHub</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
import React, { useEffect } from "react";
import { FaCode, FaTools, FaServer, FaRocket } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const skillsData = [
  {
    icon: <FaCode className="text-4xl text-pink-400 mb-4" />,
    title: "Frontend Development",
    description: "HTML, CSS, JavaScript, React, Tailwind, Bootstrap",
  },
  {
    icon: <FaServer className="text-4xl text-yellow-300 mb-4" />,
    title: "API & Integration",
    description: "RESTful APIs, Axios, Async Handling, Firebase",
  },
  {
    icon: <FaTools className="text-4xl text-teal-400 mb-4" />,
    title: "Development Tools",
    description: "Git, GitHub, VS Code, npm, Netlify, Vercel",
  },
  {
    icon: <FaRocket className="text-4xl text-indigo-300 mb-4" />,
    title: "Best Practices",
    description: "Responsive Design, SEO Basics, Agile, CI/CD",
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="Skills" className="py-20 px-6 bg-[#1E1B2E] text-white">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-2" data-aos="fade-up">
          My Skills
        </h2>
        <p className="text-pink-400 text-lg" data-aos="fade-up" data-aos-delay="100">
          Tools & Technologies I work with
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-[#2E2640] p-6 rounded-xl shadow-lg hover:shadow-pink-500/20 transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex flex-col items-center text-center">
              {skill.icon}
              <h3 className="text-xl font-semibold text-pink-300">{skill.title}</h3>
              <p className="text-sm mt-2 text-[#C8A2C8]">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
