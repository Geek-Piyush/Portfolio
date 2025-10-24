import React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Heart,
  DollarSign,
  Mic,
  Trophy,
  Award,
  Star,
  Users,
  Briefcase,
  Sparkles,
} from "lucide-react";
import "./Activities.css";

const Activities = () => {
  const coActivities = [
    {
      icon: <Palette size={24} />,
      role: "Creative Head",
      organization: "DeSoc Club, KKWIEER (3rd Year)",
    },
    {
      icon: <Trophy size={24} />,
      role: "Core Member",
      organization: "DeSoc Club, KKWIEER (2nd Year)",
    },
    {
      icon: <Heart size={24} />,
      role: "Organizing Member",
      organization: "Swapnapurti Foundation",
    },
    {
      icon: <DollarSign size={24} />,
      role: "Finance Team",
      organization: "Innovera, KKWIEER",
    },
    {
      icon: <Mic size={24} />,
      role: "Speaker",
      organization: "Unleash (DeSoc, KKWIEER)",
    },
  ];

  const extraActivities = [
    {
      icon: <Award size={20} />,
      text: "Poster Making Competition – ISTE, KKWIEER",
    },
    {
      icon: <Star size={20} />,
      text: "Organizing Member – National Level Hackathon: Innovera, KKWIEER",
    },
    {
      icon: <Users size={20} />,
      text: "Volunteer – E-yantarn, E-waste Collection Drive (CSI, KKWIEER)",
    },
  ];

  return (
    <section className="section activities-section">
      <h2 className="section-title">Activities</h2>

      {/* Two-Box Layout */}
      <div className="activities-two-box-container">
        {/* Co-Curricular Activities */}
        <motion.div
          className="activities-box co-curricular-box"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="activities-box-title">
            <Briefcase size={22} style={{ marginRight: "8px" }} />
            Co-Curricular
          </h3>
          <div className="activities-list">
            {coActivities.map((activity, index) => (
              <motion.div
                key={index}
                className="activity-item-compact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
              >
                <div className="activity-icon-compact">{activity.icon}</div>
                <div className="activity-text-compact">
                  <span className="activity-role-compact">{activity.role}</span>
                  <span className="activity-org-compact">
                    {activity.organization}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Extra-Curricular Activities */}
        <motion.div
          className="activities-box extra-curricular-box"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="activities-box-title">
            <Sparkles size={22} style={{ marginRight: "8px" }} />
            Extra-Curricular
          </h3>
          <div className="activities-list">
            {extraActivities.map((activity, index) => (
              <motion.div
                key={index}
                className="activity-item-compact extra-activity"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
              >
                <div className="activity-icon-compact">{activity.icon}</div>
                <span className="activity-text-simple">{activity.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
