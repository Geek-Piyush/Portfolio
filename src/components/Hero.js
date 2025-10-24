import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-card personal-info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="hero-name">Piyush Nashikkar</h1>
          <p className="hero-role">Computer Science and Design Student</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn">
              Contact
            </a>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-resume"
            >
              <FileText size={20} />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card bio"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h3 className="bio-title">About Me</h3>
          <p className="bio-text">
            I'm a Computer Science and Design student passionate about creating
            web and mobile solutions. Experienced in backend development with
            Node.js, Express.js, and the MERN stack, as well as Flutter, MySQL,
            MongoDB, and cloud technologies. My focus lies in designing
            intuitive experiences and scalable backend systems.
          </p>
        </motion.div>

        <motion.div
          className="hero-card profile-photo"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="photo-frame">
            <img src="/assets/pp.jpg" alt="Piyush Nashikkar" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
