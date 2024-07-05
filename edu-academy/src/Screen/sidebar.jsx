// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Images/Logos/Logo-1.png';
import closeIcon from '../Assets/svg/x-circle.svg';
import '../css/sidebar.css';

function Sidebar({ visible, toggleSidebar }) {
  return (
    <div className={`sidebar ${visible ? 'visible' : ''}`}>
      <img src={closeIcon} className="close-icon" alt="Close" onClick={toggleSidebar} />
      <Link to="/" className="logo" onClick={toggleSidebar}>
        <img src={logo} className="logo-image" alt="Logo" />
      </Link>
      <nav>
        <ul>
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/course" onClick={toggleSidebar}>Course</Link></li>
          <li><Link to="/exam" onClick={toggleSidebar}>Exam</Link></li>
          <li><Link to="/notice-board" onClick={toggleSidebar}>Notice Board</Link></li>
          <li><Link to="/our-success" onClick={toggleSidebar}>Our Success</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
