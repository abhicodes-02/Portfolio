import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import './Home.css';
import Image from './IMAGE.png';
import CV from './Abhimannyu_Choudhury_CV.pdf';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: "#000000"
      }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#ff1a1a"
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      collisions: {
        enable: false
      },
      move: {
        direction: "none",
        enable: true,
        outModes: "bounce",
        random: false,
        speed: 1,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 60
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 4 }
      }
    },
    detectRetina: true
  };

  return (
    <section className="home-section" id="home">
      <Particles className="tsparticles" init={particlesInit} options={particlesOptions} />

      <div className="overlay"></div>
      <div className="home-content container">
        <div className="home-image">
          <img
            src={Image}
            alt="Abhimannyu Choudhury"
            className="profile-pic"
          />
        </div>
        <div className="intro-text">
          <h1 className="fade-in">
            Hi, I'm <span className="highlight">Abhimannyu Choudhury</span>
          </h1>
          <h2 className="typewriter">
            <Typewriter
              words={['I am a Full-Stack Developer', 'I am a UI/UX Enthusiast', 'I am a Problem Solver', 'I am a Tech Explorer']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className="description fade-in-delay">
            I create beautiful and scalable web applications using modern technologies.
            Passionate about clean code, design systems, and building user-focused solutions.
          </p>

          <a href={CV} className="btn btn-primary" aria-label="Download CV" download>
            Download CV
          </a>

          <div className="social-links">
            <a href="https://github.com/yourgithubid" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourlinkedinid" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
