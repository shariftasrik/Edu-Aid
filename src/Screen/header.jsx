import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/Images/Logos/Logo-1.png';
// import menuIcon from '../Assets/svg/list.svg';
import cartIcon from '../Assets/svg/bag-plus.svg';
import profileIcon from '../Assets/svg/person-circle.svg';
import '../css/header.css';
import { CartContext } from '../CartContext';

function Header({ setShowLogin, toggleSidebar }) {
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);

  const toggleProfileDropdown = () => {
    setProfileDropdownVisible(!profileDropdownVisible);
  };

  const {getTotalCartAmount,token,setToken} = useContext(CartContext);

  const navigate = useNavigate();
  const Signout = ()=> {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }


  return (
    <div className="header fixed">
      <div className="header-left">
        {/* <img src={menuIcon} className="menu-icon" alt="Menu" onClick={toggleSidebar} /> */}
        <Link to="/"><img src={logo} className="logo" alt="Logo" /></Link>
      </div>
      <div className="header-right">
        <div className="nav-s">
          <Link to="/"><button className="btn btn-outline-dark">Home</button></Link>
          <Link to="/course"><button className="btn btn-outline-dark">Course</button></Link>
          <Link to="/exam"><button className="btn btn-outline-dark">Exam</button></Link>
          <Link to="/notice-board"><button className="btn btn-outline-dark">Notice Board</button></Link>
          <Link to="/our-success"><button className="btn btn-outline-dark">Our Success</button></Link>
        </div>
        <Link to="/cart"><img src={cartIcon} className="icon small-icon" alt="Cart" /></Link>
        <div className="profile">
          <img src={profileIcon} className="icon small-icon" alt="Profile" onClick={toggleProfileDropdown} />
          {profileDropdownVisible && (
            <div className="profile-dropdown">
              <Link to="#">My Profile</Link>
              <Link to="#">Edit Profile</Link>
              {!token?<button onClick={() => setShowLogin(true)} className='btn-prfl'>Sign In</button>
              :
              <button onClick={(Signout)} className='btn-prfl'>Signout</button>
              }
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
