import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Sahab Technology llc",
    description: "Official website for Sahan Technology LLC, showcasing services, projects, and providing a Contact Us form using React, Tailwind CSS, and Firestore.",
    techStack: "React, Tailwind CSS,Firebase",
    github: "https://github.com/nimrasaeed54/Sahab-Technology-LLC",
    link: "https://sahabtechnologyllc.pages.dev/",
    imageUrls: [
      "/sahabscreen1.png",
      "/sahabscreen2.png",
      "/sahabscreen3.png",

    ],
  },
  {
    title: "Ecommerce website",
    description: "An Ecommerce website with a clean, modern UI. It uses React, Tailwind CSS, and Context API for managing global state like cart items and user authentication.",
    techStack: "Tailwind CSS, React",
    github: "https://github.com/nimrasaeed54/todocontextlocal",
    link: "https://ecommerce-seven-theta-61.vercel.app/",
    imageUrls: [
      "/ecommerce-home.png",
      "/ecommerce-product-page.png",
      "/ecommerce-cart.png"
    ],
  },
  {
    title: "Autism Management System",
    description: "A web application designed to manage students, teachers, and their payments efficiently. The system allows administrators to handle records, track payments, and streamline the management process.",
    techStack: "React, Tailwind CSS, Firebase",
    github: "https://github.com/nimrasaeed54/autism-center",
    link: "https://autism-center-management.vercel.app",

    imageUrls: [
      "/autism-system.png",
      "/autism-system2.png",
      "/autism-system3.png",
    ],
  }

  // {
  //   title: "Weather App",
  //   description: "A weather website that fetches data from an API and displays detailed weather results. Users can search for any city's weather conditions.",
  //   techStack: "React, Tailwind CSS, OpenWeather API",
  //   github: "https://github.com/nimrasaeed54/weatherweb",
  //   link:"https://weatherweb-steel.vercel.app/",


  //   imageUrls: [
  //     "/weather.png",
  //     "/weather.png",


  //   ],
  // }

];

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");


  const openModal = (imageUrl) => {
    setCurrentImage(imageUrl);
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage("");
  };

  return (
    <section className="projects-section py-16 bg-[#432E54] text-white">
      <div
        className="text-center mb-8"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h2 className="text-4xl font-bold">My Projects</h2>
        <p className="text-lg text-[#FF7A8A] mt-2">
          Check out some of my latest work!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-[#533C72] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            data-aos="fade-left"
            data-aos-duration="1000"
          >

            <Slider {...settings}>
              {project.imageUrls.map((imageUrl, imageIndex) => (
                <div key={imageIndex} className="relative">
                  <img
                    src={imageUrl}
                    alt={`${project.title} - Image ${imageIndex + 1}`}
                    className="w-full h-60 object-cover transition-transform duration-300 transform hover:scale-110 cursor-pointer"
                    onClick={() => openModal(imageUrl)}
                    loading="lazy"
                  />
                </div>
              ))}
            </Slider>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-md mt-2">{project.description}</p>
              <p className="text-sm text-[#FF7A8A] mt-2">{project.techStack}</p>
              <div className="mt-4 space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e18ee7] hover:text-white transition-colors duration-300"
                >
                  GitHub
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e18ee7] hover:text-white transition-colors duration-300"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>


      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={currentImage}
              alt="FullScreen"
              className="max-w-full max-h-screen object-contain"
              loading="lazy"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-red-600 px-4 py-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
