import React from 'react';
import Header from '../Screen/header';
import Sidebar from '../Screen/sidebar.jsx';
import Footer from '../Screen/Footer';
import '../css/NoticePage.css'; 

const NoticeBoard = () => {
  return (
    <div className="page">
      <Header />
      <Sidebar />
      <div className="content">
        <section className="section">
          <h2>Schedule Update</h2>
          <div className="card-container">
            <div className="card">
              <h3>Physics - Exam Time</h3>
              <p>Physics exam of Alpha batch will be at 4.30pm on 15th July</p>
              <a href="#">View More</a>
            </div>
            <div className="card">
              <h3>Chemistry - Exam Time</h3>
              <p>Chemistry exam of Alpha batch will be at 4.30pm on 16th July</p>
              <a href="#">View More</a>
            </div>
            {/* Add more cards as needed */}
          </div>
        </section>
        <section className="section">
          <h2>Other Notices</h2>
          <div className="card-container">
            <div className="card">
              <h3>Beta batch - Engineering</h3>
              <p>Dedicated Engineering Admission preperation batch exam will be at 10.00am on 25th July</p>
              <a href="#">View More</a>
            </div>
            <div className="card">
              <h3>Cornea Batch - Medical</h3>
              <p>Dedicated Medical Admission preperation batch exam will be at 10.00am on 25th July</p>
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

export default NoticeBoard;
