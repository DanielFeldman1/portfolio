"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ViewCounter from "@/components/ViewCounter";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import OpenSourceContributions from "@/components/OpenSourceContributions";
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
      preview: "/artmarket1.png",
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
      preview: "/azure-search1.png",
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
          <HeroSection />

          <AboutSection />

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
                      View on GitHub
                    </a>
                  )}
                  <br></br>
                  {proj.link && (
                    <a
                      href={proj.link}
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-orange-400 duration-500 text-md font-semibold"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
          <OpenSourceContributions />
          <ContactSection />

          {/* Footer */}
          <footer className="text-center py-4 text-lg text-gray-400 px-4">
            &copy; {new Date().getFullYear()} Daniel Feldman. All rights
            reserved.
            <ViewCounter />
          </footer>
        </div>
      </div>
    </>
  );
}
