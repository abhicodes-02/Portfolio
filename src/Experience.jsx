import React from 'react';
import './Experience.css';
import IPACCertificate from './IPAC Fellowship completion Certificate.pdf';

const experiences = [
  {
    role: "ASE-Trainee (DotNet Developer, BT Project)",
    company: "Tata Consultancy Services (TCS)",
    duration: "April 20th, 2026 - Present",
    description: "Working as a DotNet Developer on the BT project, contributing to enterprise-level applications and gaining hands-on experience with modern development practices.",
    certificate: null
  },
  {
    role: "Junior Researcher (Apprenticeship)",
    company: "IPAC",
    duration: "December 2025 - March 2026",
    description: "Served as a Junior Researcher, gaining valuable industry experience through apprenticeship and contributing to research initiatives.",
    certificate: IPACCertificate
  }
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h1 className="experience-title">
        WORK <span>EXPERIENCE</span>
      </h1>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h2>{exp.role}</h2>
            <h3>{exp.company}</h3>
            <span className="duration">{exp.duration}</span>
            <p>{exp.description}</p>
            {exp.certificate && (
              <div className="btn-group experience-btn-group">
                <a href={exp.certificate} download>
                  <button>Download Certificate</button>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

