import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const contactLinks = [
    {
      icon: <Github size={32} />,
      name: "GitHub",
      link: "https://github.com/Geek-Piyush",
      username: "@Geek-Piyush",
    },
    {
      icon: <Mail size={32} />,
      name: "Email",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=piyushnas74@gmail.com",
      username: "piyushnas74@gmail.com",
    },
    {
      icon: <Linkedin size={32} />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/piyush-nashikkar/",
      username: "@piyush-nashikkar",
    },
  ];

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Feel free to reach out for collaborations, opportunities, or just a
        friendly chat!
      </p>

      <div className="contact-grid">
        {contactLinks.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <div className="contact-icon">{contact.icon}</div>
            <h3 className="contact-name">{contact.name}</h3>
            <p className="contact-username">{contact.username}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
