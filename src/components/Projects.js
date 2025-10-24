import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Buzzin'",
      period: "February – May 2025",
      description:
        "Event management app using Flutter + Firebase (Firestore, Authentication, Storage) with real-time community chat, event registration, and user profile management.",
      tech: ["Flutter", "Firebase", "Firestore", "Dart"],
      github: "https://github.com/Geek-Piyush/Buzzin.git",
      demo: null,
    },
    {
      title: "Vistara",
      period: "June – July 2025",
      description:
        "Tour booking platform developed using Node.js, Express.js, MongoDB Atlas (Mongoose), Multer for file handling, JWT authentication, RESTful APIs, and Stripe for payment integration.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Stripe"],
      github: "https://github.com/Geek-Piyush/Vistara.git",
      demo: null,
    },
    {
      title: "FinTrustChain",
      period: "July – August 2025",
      description:
        "Microloan and credit trust platform developed using React, Node.js, Express.js, MongoDB Atlas (Mongoose), JWT authentication, Multer, RESTful APIs, and PhonePe UPI payment integration.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "PhonePe UPI"],
      github: "https://github.com/Geek-Piyush/FinTrustChain.git",
      demo: "#",
    },
    {
      title: "CI/CD Build Failure Detection",
      period: "July 2025 – Present",
      description:
        "CI/CD build failure prediction system using Python, Flask, XGBoost, Random Forest, Scikit-learn, Ensemble Learning, ADASYN, SHAP, Optuna, GitHub Actions, RESTful APIs, and Google Cloud Platform (GCP).",
      tech: ["Python", "Flask", "XGBoost", "ML", "GCP"],
      github: null,
      demo: null,
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-period">{project.period}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalLink size={20} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
