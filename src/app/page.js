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
              <p className="text-2xl text-gray-600 max-w-xl mb-2 font-normal">
                Software Engineering Student, passionate about building clean
                and intelligent applications.
              </p>
              <p className="text-lg text-gray-500 max-w-xl mb-2">
                UI/UX Design | Full-Stack Development | Machine Learning
              </p>
              <p className="text-md text-gray-400 max-w-xl m-2 italic">
                Open to internships and collaborative projects in 2025.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <a
                  href="https://linkedin.com/in/dany-feldman"
                  className="flex items-center flex-col text-gray-400 hover:text-cyan-400 duration-500"
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
                  className="flex flex-col items-center text-gray-400 hover:text-purple-400 duration-500"
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
              <a href="#projects" className="mt-2 hover:text-orange-400">
                View my work.
              </a>
            </div>
          </section>

          {/* About */}
          <section id="about" className="px-4 md:px-6 py-16 max-w-4xl mx-auto">
            <h3 className="text-3xl font-semibold mb-6 text-left text-gray-900">
              About Me
            </h3>
            <div className="bg-white rounded-lg shadow-lg px-8 py-8">
              <h4 className="font-semibold text-2xl">
                Braude College of Engineering
              </h4>
              <div className="space-y-2 my-2">
                <div className="flex flex-row gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-yellow-500 bi bi-trophy-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
                  </svg>
                  <p>Dean's Excellence List (1 Year).</p>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pen-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                  </svg>
                  <p>Cumulative GPA: 86.</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-3">
                I’ve worked with React, Next.js, Python, MongoDB, and Firebase,
                and I thrive in collaborative environments where solving
                real-world problems is the goal. I'm always learning and pushing
                my limits whether it's through code or new ideas.
              </p>
              <h4 className="font-semibold text-2xl">
                Personal Life
              </h4>
              <p className="text-lg text-gray-600 italic">
                Outside the editor, I’m training for a half marathon and love
                reading books on tech, mindset, and personal growth. Weight training, Mindfulness. I believe
                consistent effort, in code or life, leads to powerful outcomes.
              </p>
              <div className='mt-2'>
                <div className='flex flex-row items-center gap-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-yellow-800 bi bi-book-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                  </svg>
                  <p>Reading.</p>
                </div>
              </div>
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
                  {proj.github && (
                    <a
                      href={proj.github}
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-purple-400 duration-500 text-md font-semibold"
                    >
                      View on GitHub.
                    </a>
                  )}
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
