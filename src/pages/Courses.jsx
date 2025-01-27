import React from 'react';
import { Link } from 'react-router-dom';

function Courses() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Our Courses</h1>
      <p>Explore our comprehensive courses tailored to meet your needs.</p>

      {/* Course Categories */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
        {/* English Courses Section */}
        <div style={{ border: '1px solid #ddd', padding: '20px', width: '300px', borderRadius: '5px' }}>
          <h3>English Courses</h3>
          <p>Duration: 3 months each (Beginner, Intermediate, Advanced)</p>
          <p>Price: $300 per level</p>
          <p>Key Takeaways:</p>
          <ul>
            <li>Fluency in speaking and writing</li>
            <li>Advanced grammar skills</li>
            <li>Confidence in public speaking</li>
          </ul>
          <a
            href="/pdfs/english-course-brochure.pdf"
            download
            style={{ color: 'blue', textDecoration: 'none', display: 'block', marginBottom: '10px' }}
          >
            Download Brochure
          </a>
          <Link to="/courses/english" style={{ color: 'blue', textDecoration: 'none' }}>
            Learn More
          </Link>

          {/* Embedded YouTube Video */}
          <div style={{ marginTop: '20px' }}>
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/example-video-id1"
              title="English Courses Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: '5px' }}
            ></iframe>
          </div>
        </div>

        {/* Computer Courses Section */}
        <div style={{ border: '1px solid #ddd', padding: '20px', width: '300px', borderRadius: '5px' }}>
          <h3>Computer Courses</h3>
          <p>Duration: 3 months each (Graphics, Website Development)</p>
          <p>Price: $400 per course</p>
          <p>Key Takeaways:</p>
          <ul>
            <li>Master graphic design tools</li>
            <li>Build and deploy websites</li>
            <li>Portfolio creation</li>
          </ul>
          <a
            href="/pdfs/computer-course-brochure.pdf"
            download
            style={{ color: 'blue', textDecoration: 'none', display: 'block', marginBottom: '10px' }}
          >
            Download Brochure
          </a>
          <Link to="/courses/computer" style={{ color: 'blue', textDecoration: 'none' }}>
            Learn More
          </Link>

          {/* Embedded YouTube Video */}
          <div style={{ marginTop: '20px' }}>
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/example-video-id2"
              title="Computer Courses Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: '5px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
