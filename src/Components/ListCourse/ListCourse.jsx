import React from "react";
import { useState } from "react";
import streakPng from "../../assets/streak.png";
import "./ListCourse.css";

export const ListCourse = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: "Introduction to Programming" },
    { id: 2, name: "Database" },
    { id: 3, name: "UI/UX Design" },
    { id: 4, name: "Javascript" },
  ]);

  return (
    <div className="course-container">
      {/* Course List Section */}
      <div className="course-title-container">
        <h2>Available Courses</h2>
        <div className="streak-container">
          <img
            src= {streakPng}
            alt="Streak Counter"
            className="streak-logo"
          />
          <p className="streak-text">1x streak</p>
        </div>
      </div>

      <div className="course-list">
        <ul className="course-list-scroll">
          {courses.map((course) => (
            <li key={course.id} className="course-item">
              <h3>{course.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
