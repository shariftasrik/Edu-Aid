import React, { useState } from 'react';
import logo from '../Assets/Images/Logos/Logo-1.png';
import menuIcon from '../Assets/svg/list.svg';
import cartIcon from '../Assets/svg/bag-plus.svg';
import profileIcon from '../Assets/svg/person-circle.svg';
import '../css/header.css';

function Header({ toggleSidebar }) {
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);

  const toggleProfileDropdown = () => {
    setProfileDropdownVisible(!profileDropdownVisible);
  };

  return (
    <div className="header fixed">
      <div className="header-left">
        <img src={menuIcon} className="menu-icon" alt="Menu" onClick={toggleSidebar} />
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <div className="header-right">
        <img src={cartIcon} className="icon small-icon" alt="Cart" />
        <div className="profile">
          <img src={profileIcon} className="icon small-icon" alt="Profile" onClick={toggleProfileDropdown} />
          {profileDropdownVisible && (
            <div className="profile-dropdown">
              <a href="#">My Profile</a>
              <a href="#">Edit Profile</a>
              <a href="#">Sign In/Sign Out</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;