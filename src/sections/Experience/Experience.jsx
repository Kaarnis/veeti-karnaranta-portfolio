import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");

  const workExperiences = [
    {
      title: "Software Developer",
      company: "OP Financial Group",
      period: "2023 - Present",
      description: "Working in Instant & Cross-border payments development. Also working as a Agile Master for a team of 10.",
      technologies: ["Java", "Spring Boot", "JUnit", "Mockito", "Python", "Robot Framework", "Docker", "Kubernetes", "Jenkins", "Git", "Jira", "Confluence"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Engineering, Information Technology",
      school: "Oulu University of Applied Sciences",
      period: "2021 - 2024",
      description: "Option of software development",
      technologies: ["Java", "C#", "C++","Python", "React", "Node.js", "React Native", "SQL", "Git", "Arduino"],
    },
    {
      degree: "Vocational Qualification in Business, Sales and Marketing",
      school: "OSAO",
      period: "2016 - 2019",
      description: "Sales and Marketing",
      technologies: ["Sales", "Marketing", "Business", "Customer Service"],
    },
  ];

  const renderContent = () => {
    const items = activeTab === "work" ? workExperiences : education;
    
    return items.map((item, index) => (
      <div key={index} className="experience-card">
        <div className="experience-header">
          <h3>{activeTab === "work" ? item.title : item.degree}</h3>
          <span className="period">{item.period}</span>
        </div>
        <h4 className="company">{activeTab === "work" ? item.company : item.school}</h4>
        <p className="description">{item.description}</p>
        <div className="technologies">
          {item.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="tab-container">
          <button
            className={`tab-button ${activeTab === "work" ? "active" : ""}`}
            onClick={() => setActiveTab("work")}
          >
            Work Experience
          </button>
          <button
            className={`tab-button ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>
        <div className="experience-grid">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Experience; 