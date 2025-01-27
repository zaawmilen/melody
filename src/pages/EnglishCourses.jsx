import React from 'react';

function EnglishCourses() {
  return (
    <div>
      <h2>English Courses</h2>
      <div className="course-list">
        <div className="course-item">
          <h3>Beginner</h3>
          <p>This course is designed for learners starting their English journey. It focuses on basic vocabulary, grammar, and conversational skills. Duration: 3 months.</p>
        </div>
        <div className="course-item">
          <h3>Intermediate</h3>
          <p>Aimed at learners with foundational English knowledge, this course enhances speaking, writing, and comprehension. Duration: 3 months.</p>
        </div>
        <div className="course-item">
          <h3>Advanced</h3>
          <p>Designed for proficient English speakers, this course focuses on advanced grammar, professional writing, and public speaking. Duration: 3 months.</p>
        </div>
      </div>
    </div>
  );
}

export default EnglishCourses;
