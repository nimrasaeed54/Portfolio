import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  return (
    <>
      <section className="flex flex-col md:flex-row-reverse items-center justify-between px-4 py-16 bg-[#432E54]">
        {/* Right Side - Image */}
        <div
          className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <img
            src="/person.png"
            alt="My Picture"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Left Side - Text Content */}
        <div
          className="w-full md:w-1/2 space-y-6"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f3f3f3]">
            Hi, I'm Nimra Saeed
          </h1>
          <p
            className="text-xl sm:text-2xl md:text-3xl font-medium"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="500" // Delay before animation starts
            style={{
              color: "#FF7A8A",
              animation: "typing 2s steps(30) 1s infinite, blink 0.75s step-end infinite",
              whiteSpace: "nowrap", // Prevent text from wrapping
              overflow: "hidden", // Hide overflowed text during typing
              animationFillMode: "forwards", // Keeps typing animation's final state
            }}
          >
            A Passionate Frontend Developer
          </p>

          <p className="text-lg sm:text-xl md:text-2xl text-[#f3f3f3]">
            Transforming Ideas into Beautiful Digital Experiences
          </p>
          <p className="text-md sm:text-lg md:text-xl text-[#f3f3f3]">
            I specialize in building responsive, user-friendly websites with modern web technologies.
          </p>

          {/* Button Section */}
          <div className="space-x-5">
            {/* Get in Touch Button */}
            <a
              href="mailto:your-email@example.com"
              className="bg-[#FF7A8A] shadow-2xl text-white px-6 py-3 rounded-md hover:bg-[#e18ee7] transition duration-300 w-full md:w-[300px] mx-auto"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download="Nimra_Saeed_Resume.pdf"
              className="bg-[#e18ee7] shadow-2xl text-white px-6 py-3 rounded-md hover:bg-[#FF7A8A] transition duration-300 w-full md:w-[300px] mx-auto"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <hr className="my-8 border-t-2 border-[#6A3D6D]" />
    </>
  );
};

export default Home;
