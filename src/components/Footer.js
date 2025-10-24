import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2025 Piyush Nashikkar | All rights reserved
        </p>
        <div className="footer-social-icons">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=piyushnas74@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/Geek-Piyush"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/piyush-nashikkar/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
