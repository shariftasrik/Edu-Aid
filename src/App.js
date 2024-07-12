import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/props.css';
import './css/App.css';

// Logo
import Logo1 from './Assets/Images/Logos/Logo-1.png';

// Icons
import icon1 from './Assets/svg/Programs/buildings.svg';
import icon2 from './Assets/svg/Programs/tv.svg';
import icon3 from './Assets/svg/Programs/clipboard-minus.svg';

// Components
import Header from './Screen/header';
import Sidebar from './Screen/sidebar';
import CarouselComponent from './Screen/Carousel';
import Footer from './Screen/Footer';
import Course from './Pages/Course';
import Exam from './Pages/Exam';
import NoticeBoard from './Pages/NoticeBoard';
import OurSuccess from './Pages/OurSuccess';
// import Cart from './Pages/Cart'; // Adjust path as needed
// import { CartProvider } from './CartContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPopup from './LoginPopup/LoginPopup';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    
    <Router>
      {/* Conditional rendering of LoginPopup */}
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className="App">
        {/* Header Component */}
        <Header setShowLogin={setShowLogin} toggleSidebar={toggleSidebar} />

        {/* Sidebar Component */}
        <Sidebar visible={sidebarVisible} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div className="content">
          <Routes>
            {/* Home Page Route */}
            <Route
              path="/"
              element={
                <>
                  {/* Carousel Component */}
                  <CarouselComponent />

                  {/* Our Batches Section */}
                  <div className="our-batches">
                    <h2 className="ourB">Our Batches</h2>
                    <div className="batch-container">
                      {/* Batch 1 */}
                      <div className="batch">
                        <div className="icon">
                          <img src={icon1} alt="Offline" />
                        </div>
                        <div className="text">Offline</div>
                        <div className="description">
                          Experience dynamic, engaging lectures that bring learning to life. 
                          Get personalized attention and immediate feedback from expert instructors. 
                          Unlock your potential with our immersive offline sessions!
                        </div>
                      </div>

                      {/* Batch 2 */}
                      <div className="batch">
                        <div className="icon">
                          <img src={icon2} alt="Online" />
                        </div>
                        <div className="text">Online</div>
                        <div className="description">
                          Learn from anywhere with our interactive online courses. 
                          Engage with top instructors through live sessions and real-time discussions. 
                          Transform your learning journey with our innovative online batches!
                        </div>
                      </div>

                      {/* Batch 3 */}
                      <div className="batch">
                        <div className="icon">
                          <img src={icon3} alt="Exam" />
                        </div>
                        <div className="text">Exam</div>
                        <div className="description">
                          Excel in exams with our targeted preparation sessions. 
                          Practice with realistic mock exams that build confidence. 
                          Benefit from detailed reviews to identify strengths and improve weaknesses. 
                          Master your exams with expert guidance and support!
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Start With Us Section */}
                  <div className="start-with-us">
                    <h2 className="section-title">Start With Us</h2>
                    <div className="start-item">
                      <div className="logo-container">
                        <img src={Logo1} alt="Logo" className="logo-img" />
                      </div>
                      <div className="description">
                        Join us today and embark on a journey of knowledge and success. 
                        Our programs are designed to cater to your unique learning needs and help you achieve your goals.
                      </div>
                      <div className="buttons">
                        {/* Link to Course Page */}
                        <a href='/Course'><button className="btn btn-outline-dark">Course</button></a> 
                        
                        {/* Link to Exam Page */}
                        <a href='/Exam'><button className="btn btn-outline-dark">Exam</button></a> 
                      </div>
                    </div>
                  </div>
                </>
              }
            />

            {/* Route to Course Page */}
            <Route path="/course" element={<Course />} />

            {/* Route to Exam Page */}
            <Route path="/exam" element={<Exam />} />

            {/* Route to Notice Board Page */}
            <Route path="/notice-board" element={<NoticeBoard />} />

            {/* Route to Our Success Page */}
            <Route path="/our-success" element={<OurSuccess />} />
          </Routes>
        </div>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
