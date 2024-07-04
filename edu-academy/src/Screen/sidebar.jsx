import React from 'react';
import logo from '../Assets/Images/Logos/Logo-1.png';
import closeIcon from '../Assets/svg/x-circle.svg';
import '../css/sidebar.css';

function Sidebar({ visible, toggleSidebar }) {
  return (
    <div className={`sidebar ${visible ? 'visible' : ''}`}>
      <img src={closeIcon} className="close-icon" alt="Close" onClick={toggleSidebar} />
      <a href="#" className="logo">
        <img src={logo} className="logo-image" alt="Logo" />
      </a>
    </div>
  );
}

export default Sidebar;
