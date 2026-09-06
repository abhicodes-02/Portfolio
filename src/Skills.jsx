import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-heading">SKILLS</h2>

      <div className="skills-grid">

        <div className="skills-card">
          <h3>Languages Known</h3>
          <ul>
            <li>English</li>
            <li>Hindi</li>
            <li>Bengali</li>
          </ul>
        </div>

        <div className="skills-card">
          <h3>Front End Skills</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
          </ul>
        </div>

        <div className="skills-card">
          <h3>Programming Languages</h3>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>C#</li>
          </ul>
        </div>

        <div className="skills-card">
          <h3>Frameworks & Tech</h3>
          <ul>
            <li>.NET / ASP.NET</li>
            <li>Node.js</li>
            <li>J2EE (Servlets/JSP)</li>
            <li>WebRTC & WebSockets</li>
          </ul>
        </div>

        <div className="skills-card">
          <h3>Back End & Database</h3>
          <ul>
            <li>Oracle Database</li>
            <li>MySQL</li>
            <li>SQL Server</li>
            <li>Firebase</li>
          </ul>
        </div>

        <div className="skills-card">
          <h3>IDE Known</h3>
          <ul>
            <li>Visual Studio</li>
            <li>VS Code</li>
            <li>Eclipse IDE</li>
            <li>NetBeans IDE</li>
          </ul>
        </div>

        <div className="skills-card">
          <h3>MS Office</h3>
          <ul>
            <li>MS Word</li>
            <li>MS Excel</li>
            <li>MS PowerPoint</li>
          </ul>
        </div>

        <div className="skills-card">
          <h3>Other Skills</h3>
          <ul>
            <li>Teamwork & Collaborations</li>
            <li>Team Leading</li>
            <li>Problem Solving</li>
            <li>Efficient Communication</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
