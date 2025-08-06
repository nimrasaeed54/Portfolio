// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const About = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//   <section
//   id="About"
//   className="about-section py-16 bg-[#432E54] text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//   aria-label="About Nimra Saeed"
// >
//   <div className="text-center mb-12">
//     <h2
//       className="text-3xl sm:text-4xl md:text-5xl font-semibold"
//       data-aos="fade-up"
//       data-aos-duration="1000"
//     >
//       About Me
//     </h2>
//     <p
//       className="text-lg text-[#FF7A8A] mt-2"
//       data-aos="fade-up"
//       data-aos-duration="1200"
//       data-aos-delay="200"
//     >
//       Who I am and What I Do
//     </p>
//   </div>
//   <div className="flex flex-col-reverse md:flex-row justify-between gap-10">
//     <div
//       className="w-full md:w-1/2 space-y-6"
//       data-aos="fade-left"
//       data-aos-duration="1000"
//       data-aos-delay="400"
//     >
//       <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#FF7A8A]">
//         I am Nimra Saeed
//       </h3>
//       <p className="text-md sm:text-lg md:text-xl text-[#f3f3f3]">
//         I am a passionate Frontend Developer with a strong foundation in web development and design. I create responsive, user-friendly websites with a keen eye for aesthetics and usability.
//       </p>
//       <p className="text-md sm:text-lg md:text-xl text-[#f3f3f3]">
//         I believe in writing clean code, embracing great design principles, and leveraging modern technologies to build seamless digital experiences.
//       </p>
//       <div className="space-y-6 mt-8">
//         <div>
//           <h4 className="text-xl font-semibold text-[#FF7A8A]">Technical Skills:</h4>
//           <p className="text-[#f3f3f3]">
//             HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Bootstrap, Git
//           </p>
//         </div>
//         <div>
//           <h4 className="text-xl font-semibold text-[#FF7A8A]">Soft Skills:</h4>
//           <p className="text-[#f3f3f3]">
//             Communication, Problem Solving, Collaboration, Time Management
//           </p>
//         </div>
//         <div>
//           <h4 className="text-xl font-semibold text-[#FF7A8A]">Design Skills:</h4>
//           <p className="text-[#f3f3f3]">
//             Canva, Figma, Adobe Photoshop
//           </p>
//         </div>
//       </div>
//     </div>
//     <div
//       className="w-full md:w-1/2 flex justify-center"
//       data-aos="fade-right"
//       data-aos-duration="1000"
//       data-aos-delay="600"
//     >
//       <img
//         src="/aboutme.jpg"
//         alt="Portrait photo of Nimra Saeed, frontend developer"
//         className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
//         loading="lazy"
//       />
//     </div>
//   </div>
//   <div className="education-section mt-16 text-center">
//     <h2
//       className="text-3xl sm:text-4xl md:text-5xl font-semibold"
//       data-aos="fade-up"
//       data-aos-duration="1000"
//     >
//       My Education
//     </h2>
//     <div className="education-list mt-8 space-y-6 max-w-3xl mx-auto">
//       <div
//         className="education-item p-6 bg-[#533C72] rounded-lg shadow-lg"
//         data-aos="fade-up"
//         data-aos-duration="1000"
//         data-aos-delay="300"
//       >
//         <h3 className="text-2xl font-semibold text-[#FF7A8A]">Bachelor's in Computer Science</h3>
//         <p className="text-lg text-[#f3f3f3]">University of Central Punjab, 2020 - 2024</p>
//         <p className="text-md text-[#f3f3f3]">
//           Gained a strong foundation in programming, algorithms, and web development. Completed multiple projects in web design and frontend development.
//         </p>
//       </div>
//       <div
//         className="education-item p-6 bg-[#533C72] rounded-lg shadow-lg"
//         data-aos="fade-up"
//         data-aos-duration="1000"
//         data-aos-delay="500"
//       >
//         <h3 className="text-2xl font-semibold text-[#FF7A8A]">ICS (Intermediate Computer Science)</h3>
//         <p className="text-lg text-[#f3f3f3]">Punjab Group of Colleges, 2018 - 2020</p>
//         <p className="text-md text-[#f3f3f3]">
//           Focused on computer science fundamentals, programming, and problem-solving. Developed a strong understanding of programming logic and software development.
//         </p>
//       </div>
//     </div>
//   </div>
// </section>

//   );
// };

// export default About;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBriefcase, FaCode, FaUsers } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="About"
      className="about-section py-16 bg-[#432E54] text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="About Nimra Saeed"
    >
      <div className="text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-semibold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          About Me
        </h2>
        <p
          className="text-lg text-[#FF7A8A] mt-2"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          Who I am and What I Do
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between gap-10">
        <div
          className="w-full md:w-1/2 space-y-6"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#FF7A8A]">
            I am Nimra Saeed
          </h3>
          <p className="text-md sm:text-lg md:text-xl text-[#f3f3f3]">
            I am a passionate Frontend Developer with a strong foundation in
            web development and design. I create responsive, user-friendly
            websites with a keen eye for aesthetics and usability.
          </p>
          <p className="text-md sm:text-lg md:text-xl text-[#f3f3f3]">
            I believe in writing clean code, embracing great design principles,
            and leveraging modern technologies to build seamless digital
            experiences.
          </p>

          <div className="space-y-6 mt-8">
            <div>
              <h4 className="text-xl font-semibold text-[#FF7A8A]">
                Technical Skills:
              </h4>
              <p className="text-[#f3f3f3]">
                HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS,
                Bootstrap, Git
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#FF7A8A]">Soft Skills:</h4>
              <p className="text-[#f3f3f3]">
                Communication, Problem Solving, Collaboration, Time Management
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#FF7A8A]">
                Design Skills:
              </h4>
              <p className="text-[#f3f3f3]">Canva, Figma, Adobe Photoshop</p>
            </div>
          </div>
        </div>

        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <img
            src="/aboutme.jpg"
            alt="Portrait photo of Nimra Saeed, frontend developer"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </div>

  
      {/* <div className="work-experience mt-16">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Work Experience
        </h2> */}
          {/* <div className="max-w-4xl mx-auto space-y-8">
   
          <div
            className="bg-[#533C72] p-6 rounded-lg shadow-lg flex items-start gap-6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <FaBriefcase className="text-[#FF7A8A] text-4xl flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-[#FF7A8A]">
                Frontend Developer
              </h3>
              <p className="text-lg text-[#f3f3f3] font-medium">
                Aipixel Pvt. Ltd., Lahore
              </p>
              <p className="text-sm text-[#f3f3f3] italic mb-2">Feb 2025 – Apr 2025</p>
              <ul className="list-disc list-inside text-[#f3f3f3] space-y-1">
                <li>Developed interactive UI components using React.js and Tailwind CSS.</li>
                <li>Collaborated with backend teams to integrate RESTful APIs.</li>
                <li>Ensured cross-browser compatibility and mobile responsiveness.</li>
                <li>Translated Figma designs into modular and pixel-perfect React components.</li>
              </ul>
            </div>
          </div>

        
        </div>
      </div>
      */}

      {/* Education Section */}
      <div className="education-section mt-16 text-center">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-semibold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          My Education
        </h2>
        <div className="education-list mt-8 space-y-6 max-w-3xl mx-auto">
          <div
            className="education-item p-6 bg-[#533C72] rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <h3 className="text-2xl font-semibold text-[#FF7A8A]">
              Bachelor's in Computer Science
            </h3>
            <p className="text-lg text-[#f3f3f3]">University of Central Punjab, 2020 - 2024</p>
            <p className="text-md text-[#f3f3f3]">
              Gained a strong foundation in programming, algorithms, and web development. Completed multiple projects in web design and frontend development.
            </p>
          </div>
          <div
            className="education-item p-6 bg-[#533C72] rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <h3 className="text-2xl font-semibold text-[#FF7A8A]">
              ICS (Intermediate Computer Science)
            </h3>
            <p className="text-lg text-[#f3f3f3]">Punjab Group of Colleges, 2018 - 2020</p>
            <p className="text-md text-[#f3f3f3]">
              Focused on computer science fundamentals, programming, and problem-solving. Developed a strong understanding of programming logic and software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
