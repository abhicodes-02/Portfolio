import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

import Home from './Home';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './ContactMe';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} /> {/* ✅ This is the fix */}
        <Route path="/home" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;
