import React, { useState } from 'react';
import logo from '../Assets/Images/Logos/Logo-1.png';
import menuIcon from '../Assets/svg/list.svg';
import cartIcon from '../Assets/svg/bag-plus.svg';
import profileIcon from '../Assets/svg/person-circle.svg';
import '../css/header.css';

function Header({setShowLogin},{ toggleSidebar }) {
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);

  const toggleProfileDropdown = () => {
    setProfileDropdownVisible(!profileDropdownVisible);
  };

  return (
    <div className="header fixed">
      <div className="header-left">
        {/* <img src={menuIcon} className="menu-icon" alt="Menu" onClick={toggleSidebar} /> */}
        <a href='/'><img src={logo} className="logo" alt="Logo" /></a>
      </div>
      <div className="header-right">
        <div className="nav-s">
          <a href="/"><button className="btn btn-outline-dark">Home</button></a>
          <a href="/Course"><button className="btn btn-outline-dark">Course</button></a>
          <a href="/Exam"><button className="btn btn-outline-dark">Exam</button></a>
          <a href="/NoticeBoard.jsx"><button className="btn btn-outline-dark">Notice Board</button></a>
          <a href="/OurSuccess.jsx"><button className="btn btn-outline-dark">Our Success</button></a>
        </div>
        <a href='/cart'><img src={cartIcon} className="icon small-icon" alt="Cart" /></a>
        <div className="profile">
          <img src={profileIcon} className="icon small-icon" alt="Profile" onClick={toggleProfileDropdown} />
          {profileDropdownVisible && (
            <div className="profile-dropdown">
              <a href="#">My Profile</a>
              <a href="#">Edit Profile</a>
              <button onClick={()=>setShowLogin(true)}>Sign In/Sign Out</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;