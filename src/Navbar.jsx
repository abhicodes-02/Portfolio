import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Education', path: '/education' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact Me', path: '/contactme' },
  ];

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container-fluid px-4">
        <NavLink className="navbar-brand logo" to="/home">
          My<span>Portfolio</span>
        </NavLink>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-4 text-center">
            {navItems.map(({ label, path }, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `nav-link fw-bold text-uppercase px-2 ${isActive ? 'active' : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
