import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/props.css';
import './css/App.css';

//Logo
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

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Router>
      <div className="App">
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar visible={sidebarVisible} toggleSidebar={toggleSidebar} />
        <div className="content">
          <Routes>
            <Route path="/" element={
              <>
                <CarouselComponent />
                <div className="our-batches">
                  <h2 className="ourB">Our Batches</h2>
                  <div className="batch-container">
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

                <div className="start-with-us">
                  <h2 className="section-title">Start With Us</h2>
                  <div className="start-item">
                    <div className="logo-container">
                      <img src={Logo1} alt="Logo" className="logo-img" />
                    </div>
                    <div className="description">
                      Join us today and embark on a journey of knowledge and success. Our programs are designed to cater to your unique learning needs and help you achieve your goals.
                    </div>
                    <div className="buttons">
                      <button className="btn btn-outline-dark">Course</button>
                      <button className="btn btn-outline-dark">Exam</button>
                    </div>
                  </div>
                </div>
              </>
            } />
            <Route path="/course" element={<Course />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/notice-board" element={<NoticeBoard />} />
            <Route path="/our-success" element={<OurSuccess />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
