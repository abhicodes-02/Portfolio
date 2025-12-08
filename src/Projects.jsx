import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "University Management System",
    description: "A full-stack University Management System using Advanced Java (J2EE Development).",
    tech: ["HTML5", "CSS3", "Oracle DB","APACHE TOMCAT","SERVLET","JSP"],
    link: "https://github.com/abhicodes-02/UniversityManagementSystem",
  },
  {
    title: "Soil Farming Agent",
    description: "A full-stack Soil Farming Agent System using Advanced Java (J2EE Development).",
    tech: ["HTML5", "CSS3", "Oracle DB","APACHE TOMCAT","SERVLET","JSP"],
    link: "https://github.com/abhicodes-02/SoilFarmingAgent/tree/master/Soil%20Farming%20Agent",
  },
  {
    title: "Portfolio Website",
    description: "Your personal portfolio site built with React and styled beautifully.",
    tech: ["React", "CSS3", "Responsive Design"],
    link: "http://abhicodes-02.github.io/Portfolio/",
  },
  {
    title: "Weather App",
    description: "A weather forecasting app that fetches real-time weather using OpenWeather API.",
    tech: ["HTML5", "CSS3", "JavaScript", "API"],
    link: "https://abhicodes-02.github.io/WeatherApplication/",
  },
  // Add more projects here
  {
    title: "Catering Reservation System",
    description: "A full stack Catering reservation system for online food booking and account creation and usage of an entire Hotel both for User and Admin/Owner.",
    tech: ["HTML5", "CSS3", "JavaScript","Firebase", "API"],
    link: "https://abhicodes-02.github.io/CateringReservationSystem/",
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "A Classic Tic-Tac-Toe Game that allows 2 players to play very easily and compete with each other.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://abhicodes-02.github.io/Tic-Tac-Toe/",
  },
];

const Projects = () => {
  return (
    <section className="project-section">
      <h1 className="project-title">
        MY <span>PROJECTS</span>
      </h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
