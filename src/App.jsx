import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import EnglishCourses from './pages/EnglishCourses';
import ComputerCourses from './pages/ComputerCourses';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Mycourses from './pages/Mycourses';

function App() {
  return (
    <Router>
      <div>
        <header style={styles.header}>
          <h1 style={styles.title}>Melody English & Computer Training Center</h1>
          <nav style={styles.nav}>
            <Link to="/" style={styles.navLink}>Home</Link>
            <Link to="/courses" style={styles.navLink}>Courses</Link>
            <Link to="/contact" style={styles.navLink}>Contact Us</Link>
            <Link to="/login" style={styles.navLink}>Login</Link>
          </nav>
        </header>
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/english" element={<EnglishCourses />} />
            <Route path="/courses/computer" element={<ComputerCourses />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/my-courses" element={<Mycourses />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const styles = {
  header: {
    backgroundColor: '#4CAF50',
    padding: '10px',
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    margin: '0',
  },
  nav: {
    marginTop: '10px',
  },
  navLink: {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  main: {
    padding: '20px',
  },
};

export default App;
