
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <section className="flex flex-col md:flex-row-reverse items-center justify-between px-4 py-16 bg-[#432E54]">
        <div
          className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0 group"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <img
            src="/person.png"
            alt="Portrait of Nimra Saeed"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>

        <div
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f3f3f3] leading-tight md:leading-relaxed">
            Hi, I'm Nimra Saeed
          </h1>
          <p
            className="text-xl sm:text-2xl md:text-3xl font-medium text-[#FF7A8A]"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="500"
          >
            A Passionate Frontend Developer
          </p>

          <p className="text-lg sm:text-xl md:text-2xl text-[#f3f3f3] leading-relaxed">
            Transforming Ideas into Beautiful Digital Experiences
          </p>
          <p className="text-md sm:text-lg md:text-xl text-[#f3f3f3] leading-relaxed">
            I specialize in building responsive, user-friendly websites with modern web technologies.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-4"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <a
              href="mailto:nimraasaeed54@gmail.com"
              className="bg-[#FF7A8A] shadow-2xl text-white px-6 py-3 rounded-md hover:bg-[#ff4f62] hover:scale-105 transition-transform duration-300 w-full sm:w-auto text-center"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download="Resume-Nimra-Saeed.pdf"
              className="bg-[#ff4f62] shadow-2xl text-white px-6 py-3 rounded-md hover:bg-[#FF7A8A] hover:scale-105 transition-transform duration-300 w-full sm:w-auto text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
