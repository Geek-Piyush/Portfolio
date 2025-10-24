import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Globe,
  Smartphone,
  Palette,
  Terminal,
  FileText,
  Brain,
  Users,
  Clock,
  Target,
  Cpu,
  Award,
} from "lucide-react";
import "./Skills.css";

const Skills = () => {
  const technicalSkills = {
    "Programming Languages": {
      items: ["C", "C++", "Python", "JavaScript", "SQL"],
      icon: <Code2 size={20} />,
    },
    Database: { items: ["MySQL", "MongoDB"], icon: <Database size={20} /> },
    "Cloud Services": {
      items: ["Firebase (Firestore, Authentication, Storage)"],
      icon: <Cloud size={20} />,
    },
    "Web Development": {
      items: ["React", "Node.js", "Express.js", "Flask", "HTML", "CSS"],
      icon: <Globe size={20} />,
    },
    "App Development": {
      items: ["Dart", "Flutter"],
      icon: <Smartphone size={20} />,
    },
    "UI/UX Design": {
      items: [
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "Accessibility & Color Contrast",
        "User Flow Mapping",
      ],
      icon: <Palette size={20} />,
    },
    "Tools & Platforms": {
      items: [
        "Postman",
        "Figma",
        "GitHub",
        "VS Code",
        "Canva",
        "Google Colab",
        "Basic Linux & Windows Command Line",
      ],
      icon: <Terminal size={20} />,
    },
  };

  const softSkills = [
    { name: "Analytical Thinking", icon: <Brain size={20} /> },
    { name: "Communication", icon: <Users size={20} /> },
    { name: "Team Leadership", icon: <Users size={20} /> },
    { name: "Adaptability", icon: <Target size={20} /> },
    { name: "Time Management", icon: <Clock size={20} /> },
  ];

  const certifications = [
    {
      name: "Backend Development",
      provider: "Udemy",
      file: "backend.pdf",
    },
    {
      name: "Mobile App Development (Flutter)",
      provider: "Udemy",
      file: "flutter.pdf",
    },
    {
      name: "AWS Academy Cloud Foundation",
      provider: "AWS Academy",
      file: "AWS.pdf",
    },
    {
      name: "UI/UX Basics (Digital Skills: User Experience)",
      provider: "Accenture / FutureLearn",
      file: "uiux.pdf",
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">Skills & Certifications</h2>

      {/* Skills Two-Box Layout */}
      <div className="skills-two-box-container">
        {/* Technical Skills Box */}
        <motion.div
          className="skills-box technical-skills-box"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="skills-box-title">
            <Cpu size={22} style={{ marginRight: "8px" }} />
            Technical Skills
          </h3>
          <div className="skills-box-content">
            {Object.entries(technicalSkills).map(([category, data], index) => (
              <div key={index} className="skill-category-compact">
                <div className="skill-category-header">
                  <div className="skill-icon-small">{data.icon}</div>
                  <h4 className="skill-category-name">{category}</h4>
                </div>
                <div className="skill-tags-compact">
                  {data.items.map((item, idx) => (
                    <span key={idx} className="skill-tag-compact">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills Box */}
        <motion.div
          className="skills-box soft-skills-box"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="skills-box-title">
            <Users size={22} style={{ marginRight: "8px" }} />
            Soft Skills
          </h3>
          <div className="skills-box-content">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-item">
                <div className="soft-skill-icon-small">{skill.icon}</div>
                <span className="soft-skill-name-compact">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certifications */}
      <div className="certifications-container">
        <h3 className="certifications-title">
          <Award size={22} style={{ marginRight: "8px" }} />
          Certifications
        </h3>
        <div className="certifications-grid-compact">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={`/assets/certifications/${cert.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-card-compact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              whileHover={{ scale: 1.03 }}
            >
              <FileText size={22} />
              <div className="cert-info">
                <span className="cert-name">{cert.name}</span>
                <span className="cert-provider">{cert.provider}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
