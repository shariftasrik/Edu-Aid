// Exam.js

import React from 'react';
import Header from '../Screen/header';
import Footer from '../Screen/Footer';
import '../css/ExamPage.css'; 

const Exam = () => {
  return (
    <div className="page">
      <Header />
      <div className="content">
        <section className="section">
          <h2>Engineering Exams</h2>
          <div className="card-container">
            <div className="card">
              <h3>Exam Title 1</h3>
              <p>Exam description goes here.</p>
              <a href="#">View More</a>
            </div>
            <div className="card">
              <h3>Exam Title 2</h3>
              <p>Exam description goes here.</p>
              <a href="#">View More</a>
            </div>
            <div className="card">
              <h3>Exam Title 2</h3>
              <p>Exam description goes here.</p>
              <a href="#">View More</a>
            </div>
            <div className="card">
              <h3>Exam Title 2</h3>
              <p>Exam description goes here.</p>
              <a href="#">View More</a>
            </div>
            {/* Add more cards as needed */}
          </div>
        </section>
        <section className="section">
          <h2>Medical Exams</h2>
          <div className="card-container">
            <div className="card">
              <h3>Exam Title 1</h3>
              <p>Exam description goes here.</p>
              <a href="#">View More</a>
            </div>
            <div className="card">
              <h3>Exam Title 2</h3>
              <p>Exam description goes here.</p>
              <a href="#">View More</a>
            </div>
            {/* Add more cards as needed */}
          </div>
        </section>
        {/* Repeat similar sections for other categories */}
      </div>
      <Footer />
    </div>
  );
};

export default Exam;
