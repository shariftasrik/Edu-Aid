// Course.js

import React from 'react';
import Header from '../Screen/header';
import Footer from '../Screen/Footer';
import '../css/CoursePage.css'; // Import your page-specific CSS file

const Course = () => {
  return (
    <div className="page">
      <Header />
      <div className="content">
        {/*Engineering Courses */}
        <section className="section">
          <h2>Engineering</h2>
          <div className="card-container">
            <div className="card">
              <h3>Course Title 1</h3>
              <p>Course description goes here.</p>
              <a href="#">View More</a>
            </div>
            <div className="card">
              <h3>Course Title 2</h3>
              <p>Course description goes here.</p>
              <a href="#">View More</a>
            </div>
            {/* Add more cards as needed */}
          </div>
        </section>

        {/*Varsity Courses */}
        <section className="section">
          <h2>Varsity</h2>
          <div className="card-container">
            <div className="card">
              <h3>Course Title 1</h3>
              <p>Course description goes here.</p>
              <a href="#">View More</a>
            </div>
            <div className="card">
              <h3>Course Title 2</h3>
              <p>Course description goes here.</p>
              <a href="#">View More</a>
            </div>
            {/* Add more cards as needed */}
          </div>
        </section>

        {/* HSC Courses */}
        <section className="section">
          <h2>Varsity</h2>
          <div className="card-container">
            <div className="card">
              <h3>Course Title 1</h3>
              <p>Course description goes here.</p>
              <a href="#">View More</a>
            </div>
            <div className="card">
              <h3>Course Title 2</h3>
              <p>Course description goes here.</p>
              <a href="#">View More</a>
            </div>
            {/* Add more cards as needed */}
          </div>
        </section>

        {/* SSC Courses */}
        <section className="section">
          <h2>Varsity</h2>
          <div className="card-container">
            <div className="card">
              <h3>Course Title 1</h3>
              <p>Course description goes here.</p>
              <a href="#">View More</a>
            </div>
            <div className="card">
              <h3>Course Title 2</h3>
              <p>Course description goes here.</p>
              <a href="#">View More</a>
            </div>
            {/* Add more cards as needed */}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Course;
