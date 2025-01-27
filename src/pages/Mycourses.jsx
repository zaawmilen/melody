import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5000/api/my-courses', {
          headers: { Authorization: token },
        });
        setCourses(res.data);
      } catch (err) {
        alert('Failed to fetch courses');
      }
    };

    fetchCourses();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Courses</h1>
      {courses.length > 0 ? (
        <ul>
          {courses.map((course) => (
            <li key={course._id}>{course.name}</li>
          ))}
        </ul>
      ) : (
        <p>No enrolled courses found</p>
      )}
    </div>
  );
}

export default MyCourses;
