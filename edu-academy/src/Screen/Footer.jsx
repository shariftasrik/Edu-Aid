import React from 'react';
import '../css/Footer.css'; 

//Logo
import Logo1 from '../Assets/Images/Logos/Logo-1.png';


// Icons 
import icon1 from '../Assets/svg/Social Media/envelope.svg';
import icon2 from '../Assets/svg/Social Media/facebook.svg';
import icon3 from '../Assets/svg/Social Media/whatsapp.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-side">
        <span>&copy; 2024 Edu-Aid</span>
      </div>
      <div className="center">
        <img src={Logo1} alt="Coaching Logo" className="logo" />
      </div>
      <div className="right-side">
        {/* Replace with your actual SVG icons */}
        <img src={icon1} alt="Icon 1" className="icon" />
        <img src={icon2} alt="Icon 2" className="icon" />
        <img src={icon3} alt="Icon 3" className="icon" />
      </div>
    </footer>
  );
};

export default Footer;
