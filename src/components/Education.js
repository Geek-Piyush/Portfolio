import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Design",
      institution:
        "K. K. Wagh Institute of Engineering Education and Research, Nashik",
      score: "CGPA: 8.43",
      yearRange: "2022 – 2026",
      icon: <GraduationCap size={32} />,
      coursework: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Computer Networks",
        "Deep Learning",
        "Cloud Computing & Generative AI",
        "Operating System",
        "UI/UX",
      ],
    },
    {
      degree: "HSC (12th)",
      institution: "N.E.S. High School, Parola, Jalgaon – 425111",
      score: "Percentage: 73%",
      yearRange: "2021 – 2022",
      icon: <School size={32} />,
    },
    {
      degree: "SSC (10th)",
      institution:
        "Dr. V. M. Jain Madhyamik Vidyalay, Parola, Jalgaon – 425111",
      score: "Percentage: 89.20%",
      yearRange: "2019 – 2020",
      icon: <School size={32} />,
    },
  ];

  return (
    <section id="education" className="section education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <div className="edu-icon">{edu.icon}</div>
            <div className="edu-content">
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <div className="edu-details">
                <span className="edu-score">{edu.score}</span>
                <span className="edu-year">{edu.yearRange}</span>
              </div>

              {edu.coursework && (
                <div className="coursework-section">
                  <div className="coursework-header">
                    <BookOpen size={18} />
                    <h4>Relevant Coursework</h4>
                  </div>
                  <div className="coursework-list">
                    {edu.coursework.map((course, idx) => (
                      <span key={idx} className="coursework-item">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
