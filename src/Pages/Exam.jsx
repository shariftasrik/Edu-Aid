// Exam.js

import React from 'react';
import Header from '../Screen/header';
import Sidebar from '../Screen/sidebar.jsx';
import Footer from '../Screen/Footer';
import '../css/ExamPage.css'; 

const Exam = () => {
  return (
    <div className="page">
      <Header />
      <Sidebar />
      <div className="content">
        <section className="section">
          <h2>Engineering Exams</h2>
          <div className="card-container">
            <div className="card">
              <h3>Weekly - Physics 1</h3>
              <p>Weekly Physics 1st Paper</p>
              <a href="#">Start Exam</a>
            </div>
            <div className="card">
              <h3>Weekly - Higher Math 1</h3>
              <p>Weekly Higher Math 1st Paper</p>
              <a href="#">Start Exam</a>
            </div>
            <div className="card">
              <h3>Weekly - Chemistry 1</h3>
              <p>Weekly Chemistry 1st Paper</p>
              <a href="#">Start Exam</a>
            </div>
            {/* Add more cards as needed */}
          </div>
        </section>
        <section className="section">
          <h2>Medical Exams</h2>
          <div className="card-container">
            <div className="card">
              <h3>Weekly - Biology 1</h3>
              <p>Weekly Biology 1st Paper</p>
              <a href="#">Start Exam</a>
            </div>
            <div className="card">
              <h3>Weekly - Chemistry 1</h3>
              <p>Weekly Chemistry 1st Paper</p>
              <a href="#">Start Exam</a>
            </div>
            {/* Add more cards as needed */}
          </div>
        </section>
        {/* Repeat similar sections for other categories */}
        <section className="section">
          <h2>Varsity Exams</h2>
          <div className="card-container">
            <div className="card">
              <h3>Weekly - Physics 1</h3>
              <p>Weekly Physics 1st Paper</p>
              <a href="#">Start Exam</a>
            </div>
            <div className="card">
              <h3>Weekly - Chemistry 1</h3>
              <p>Weekly Chemistry 1st Paper</p>
              <a href="#">Start Exam</a>
            </div>
            {/* Add more cards as needed */}
          </div>
        </section>
        <section className="section">
          <h2>HSC Exams</h2>
          <div className="card-container">
            <div className="card">
              <h3>Physics - Test 1</h3>
              <p>Model Physics 1st Paper</p>
              <a href="#">Start Exam</a>
            </div>
            <div className="card">
              <h3>Higher Math - Test 1</h3>
              <p>Model Higher Math 1st Paper</p>
              <a href="#">Start Exam</a>
            </div>
            {/* Add more cards as needed */}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Exam;
