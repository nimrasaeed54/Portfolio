import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const projects = [
  {
    title: "Project 1",
    description: "A Menu website built with React, Tailwind CSS, React Router",
    techStack: "React, Tailwind CSS, JavaScript",
    github: "https://github.com/nimrasaeed54/MenuProject",
    imageUrls: [
      "/Menuproject.png", 
      "/Menuprojectfilter.png",
    ],
  },
  {
    title: "Project 2",
    description: "Todo List with HTML, Tailwind CSS, React, and Context API",
    techStack: "HTML, Tailwind CSS, React",
    github: "https://github.com/nimrasaeed54/todocontextlocal",
    imageUrls: [
      "/Todo.png",
      "/Todoadded.png",
    ],
  },
  {
    title: "Project 3",
    description: "A number guessing game using HTML, JavaScript, and CSS",
    techStack: "HTML, JavaScript, CSS",
    github: "https://github.com/nimrasaeed54/Guessing-game",
    imageUrls: [
      "/Numberguessinggame.png",
      "/numbergamewin.png",
      "/numbergamelost.png",
    ],
  }
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
