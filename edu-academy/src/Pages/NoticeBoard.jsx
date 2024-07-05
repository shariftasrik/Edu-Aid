// NoticeBoard.js

import React from 'react';
import Header from '../Screen/header';
import Footer from '../Screen/Footer';
import '../css/NoticePage.css'; // Import your page-specific CSS file

const NoticeBoard = () => {
  return (
    <div className="page">
      <Header />
      <div className="content">
        <section className="section">
          <h2>Schedule Update</h2>
          <div className="card-container">
            <div className="card">
              <h3>Update Title 1</h3>
              <p>Update description goes here.</p>
              <a href="#">View More</a>
            </div>
            <div className="card">
              <h3>Update Title 2</h3>
              <p>Update description goes here.</p>
              <a href="#">View More</a>
            </div>
            {/* Add more cards as needed */}
          </div>
        </section>
        <section className="section">
          <h2>Other Notices</h2>
          <div className="card-container">
            <div className="card">
              <h3>Notice Title 1</h3>
              <p>Notice description goes here.</p>
              <a href="#">View More</a>
            </div>
            <div className="card">
              <h3>Notice Title 2</h3>
              <p>Notice description goes here.</p>
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
