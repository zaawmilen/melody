import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {/* Brief Introduction */}
      <h1>Welcome to Melody English & Computer Training Center</h1>
      <p>
        At Melody, we provide world-class English language and computer training
        to help you achieve your personal and professional goals. Join us today
        and unlock your full potential!
      </p>

      {/* Featured Courses */}
      <section style={{ margin: '40px 0' }}>
        <h2>Featured Courses</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <div style={{ border: '1px solid #ddd', padding: '20px', width: '200px' }}>
            <h3>English Courses</h3>
            <p>Beginner to Advanced Levels</p>
            <Link to="/courses/english" style={{ textDecoration: 'none', color: 'blue' }}>
              View Details
            </Link>
          </div>
          <div style={{ border: '1px solid #ddd', padding: '20px', width: '200px' }}>
            <h3>Computer Courses</h3>
            <p>Graphics & Website Development</p>
            <Link to="/courses/computer" style={{ textDecoration: 'none', color: 'blue' }}>
              View Details
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ margin: '40px 0', backgroundColor: '#f9f9f9', padding: '20px' }}>
        <h2>What Our Students Say</h2>
        <blockquote style={{ fontStyle: 'italic' }}>
          "Melody Training Center helped me improve my English skills and get my dream job!"
        </blockquote>
        <p>- Sarah T.</p>
      </section>

      {/* Call-to-Action Buttons */}
      <div style={{ marginTop: '40px' }}>
        <Link to="/courses" style={{ margin: '0 10px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          View Courses
        </Link>
        <Link to="/contact" style={{ margin: '0 10px', padding: '10px 20px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Home;
