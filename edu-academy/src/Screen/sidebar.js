import React from 'react';
import logo from '../Assets/Images/Logos/Logo-1.png';
import closeIcon from '../Assets/svg/x-circle.svg';
import '../css/sidebar.css';

function Sidebar({ toggleSidebar }) {
  return (
    <div className="sidebar fixed">
      <img src={closeIcon} className="close-icon" alt="Close" onClick={toggleSidebar} />
      <a href="#" className="logo bl">
        <img src={logo} className="bl" alt="Logo" />
      </a>
    </div>
  );
}

export default Sidebar;
