"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
const projects = {
  personal: [
    {
      title: "Downloads Folder Organizer",
      description:
        "A simple and reversable Python script that organizes the files in your downloads folder by sorting and sending them into the right user folders by file types. (e.g: .mp3 -> Music)",
      link: "",
      github: "https://github.com/DanielFeldman1/folder-organizer.git",
      details: "Utilizes the OS library in python for file transfers.",
      technologies: ["Python", "OS Module"],
      preview: "/folder-organizer-preview.png",
      images: [
        "/folder-organizer1.png",
        "/folder-organizer2.png",
        "/folder-organizer3.png",
      ],
    },
  ],
  school: [
    {
      title: "Authorship Authentication with Machine Learning",
      description:
        "Plagiarism detection in Russian using fine-tuned BERT model.",
      link: "",
      details:
        "This project involved developing a sophisticated plagiarism detection system specifically designed for Russian text. I fine-tuned a BERT model to identify authorship patterns and detect potential plagiarism with high accuracy. The system analyzes linguistic patterns, writing style, and semantic similarities to determine if text has been plagiarized.",
      technologies: [
        "Python",
        "BERT",
        "Transformers",
        "PyTorch",
        "Natural Language Processing",
      ],
      challenges:
        "Working with Russian text presented unique challenges including Cyrillic character encoding and language-specific preprocessing requirements.",
    },
    {
      title: "ArtMarket",
      description:
        "E-commerce app using Next.js, improved performance with lazy loading.",
      link: "https://artmarket-final.vercel.app/",
      github: "https://github.com/DanielFeldman1/ArtMarket.git",
      details:
        "A full-featured e-commerce platform built with Next.js that showcases and sells digital artwork. The application features a modern, responsive design with optimized performance through lazy loading techniques. Users can browse art collections, view detailed product pages, and make purchases through an integrated shopping cart system.",
      technologies: [
        "Next.js",
        "React",
        "JavaScript",
        "CSS",
        "Vercel",
        "Lazy Loading",
      ],
      challenges:
        "Implementing efficient lazy loading for large image galleries while maintaining smooth user experience and SEO optimization.",
    },
    {
      title: "Microsoft Azure Search Engine",
      description: "Scrapes Azure site and searches it using microservices.",
      link: "https://colab.research.google.com/drive/1eTKohi9Oeeb12U69xVrSoOLYgMhfuEDk?usp=sharing",
      details:
        "A comprehensive search engine that scrapes Microsoft Azure documentation and provides intelligent search capabilities. Built using a microservices architecture, the system crawls Azure documentation, indexes content, and provides fast, relevant search results. The project demonstrates distributed system design and web scraping techniques.",
      technologies: [
        "Python",
        "Web Scraping",
        "Microservices",
        "Search Algorithms",
        "APIs",
        "Google Colab",
      ],
      challenges:
        "Handling large-scale web scraping while respecting rate limits and building an efficient indexing system for fast search results.",
    },
  ],
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("personal");
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectOverlay = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectOverlay = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  // Clean up overflow style on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="min-h-screen bg-gray-100 text-gray-800 font-sans scroll-smooth">
        {/* Overlay */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with blur */}
            <div
              className="absolute inset-0 backdrop-blur-sm"
              onClick={closeProjectOverlay}
            ></div>

            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
              {/* Close button */}
              <button
                onClick={closeProjectOverlay}
                className="hover:cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-red-400 text-2xl font-bold z-10 w-8 h-8 flex items-center justify-center bg-white bg-opacity-80 rounded-full"
              >
                ×
              </button>

              {/* Scrollable Modal body */}
              <div className="overflow-y-auto max-h-[90vh] scrollbar-hide">
                <div className="p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 pr-8">
                    {selectedProject.title}
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Project Overview
                      </h3>
                      <p className="text-gray-600 text-md leading-relaxed">
                        {selectedProject.details}
                      </p>
                    </div>
                    {selectedProject.images && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          Media
                        </h3>
                        {selectedProject.images.map((img, idx) => (
                          <div key={idx} className="py-2">
                            <h4 className="py-2">Image #{idx + 1}:</h4>
                            <Image
                              src={img}
                              width="500"
                              height="500"
                              alt="img"
                              className="rounded-xs"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies?.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-md font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {selectedProject.link && (
                      <div>
                        <a
                          href={selectedProject.link}
                          className="hover:text-cyan-400 duration-500"
                        >
                          Live Demo
                        </a>
                      </div>
                    )}

                    {selectedProject.github && (
                      <div>
                        <a
                          href={selectedProject.github}
                          className="hover:text-cyan-400 duration-500"
                        >
                          View on GitHub
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main content with blur when overlay is open */}
        <div className={selectedProject ? "blur-sm" : ""}>
          {/* Hero */}
          <section className="px-4 md:px-6 py-13 max-w-4xl mx-auto">
            <div className="bg-white rounded-sm shadow-lg flex flex-col items-center justify-center text-center pt-16 pb-12 px-8">
              <img
                src="/portfolio-profile-pic.jpg"
                alt="Daniel Feldman portrait"
                className="w-64 h-64 rounded-full mb-6 object-cover border-2 border-gray-300"
              />
              <h2 className="text-5xl font-semibold mb-2 bg-gradient-to-r text-transparent from-cyan-400 via-purple-500 to-orange-400 bg-clip-text">
                Hi, I'm Daniel Feldman.
              </h2>
              <p className="text-2xl text-gray-600 max-w-xl">
                Software Engineering Student passionate about machine learning,
                full stack development, and elegant digital solutions.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <a
                  href="https://linkedin.com/in/dany-feldman"
                  className="flex items-center flex-col text-gray-300 hover:text-cyan-400 duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/DanielFeldman1"
                  className="flex flex-col items-center text-gray-300 hover:text-purple-400 duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </section>

          {/* About */}
          <section id="about" className="px-4 md:px-6 py-16 max-w-4xl mx-auto">
            <h3 className="text-3xl font-semibold mb-6 text-left text-gray-900">
              About Me
            </h3>
            <div className="bg-white rounded-lg shadow-lg px-8 py-8">
              <p className="text-lg text-gray-600 mb-3">
                I'm a Software Engineering student at Braude College of
                Engineering, with a current GPA of 86 and two semesters on the
                Dean's List. I'm passionate about full-stack web development,
                machine learning, and building real-world apps that deliver
                value.
              </p>
              <p className="text-lg text-gray-600">
                I have hands-on experience in React, Next.js, Python, MongoDB,
                and Firebase. I enjoy solving tough problems, working in teams,
                and constantly pushing myself to learn more.
              </p>
            </div>
          </section>

          {/* Projects */}
          <section
            id="projects"
            className="px-4 md:px-6 py-16 max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-semibold text-left mb-6 text-gray-900">
              Projects
            </h3>
            <div className="flex justify-center space-x-4 mb-6">
              <button
                onClick={() => setActiveTab("personal")}
                className={`px-3 py-1.5 rounded text-lg font-medium ${
                  activeTab === "personal"
                    ? "bg-gray-800 text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:cursor-pointer"
                }`}
              >
                Personal
              </button>
              <button
                onClick={() => setActiveTab("school")}
                className={`px-3 py-1.5 rounded text-lg font-medium ${
                  activeTab === "school"
                    ? "bg-gray-800 text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:cursor-pointer"
                }`}
              >
                School
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects[activeTab].map((proj, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md p-5 hover:scale-101 hover:shadow-lg duration-300 cursor-pointer"
                  onClick={() => openProjectOverlay(proj)}
                >
                  {proj.preview && (
                    <div className="relative w-full h-56 mb-4">
                      <Image
                        src={proj.preview}
                        alt={proj.title}
                        fill
                        className="rounded-md shadow-sm object-cover"
                      />
                    </div>
                  )}
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">
                    {proj.title}
                  </h4>
                  <p className="mb-3 text-lg text-gray-600">
                    {proj.description}
                  </p>
                  {proj.github && <a
                    href={proj.github}
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-purple-400 duration-500 text-md font-semibold"
                  >
                    View on GitHub.
                  </a>}
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section
            id="contact"
            className="px-4 md:px-6 py-16 max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-semibold mb-3 text-gray-900">
              Contact
            </h3>
            <div className="bg-white rounded-lg shadow-lg px-8 py-6 text-center">
              <p className="mb-3 text-lg text-gray-600">
                Want to connect or collaborate? Drop me a line.
              </p>
              <a
                href="mailto:daniel.feldman.contact@gmail.com"
                className="text-lg text-blue-600 hover:underline"
              >
                daniel.feldman.contact@gmail.com
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center py-4 text-lg text-gray-400 px-4">
            &copy; {new Date().getFullYear()} Daniel Feldman. All rights
            reserved.
          </footer>
        </div>
      </div>
    </>
  );
}
