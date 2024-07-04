import React, { useState } from 'react';
import './css/props.css';
import './css/App.css';

// Icons
import icon1 from './Assets/svg/Programs/buildings.svg';
import icon2 from './Assets/svg/Programs/tv.svg';
import icon3 from './Assets/svg/Programs/clipboard-minus.svg';

// Components
import Header from './Screen/header';
import Sidebar from './Screen/sidebar';
import CarouselComponent from './Screen/Carousel';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="App">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar visible={sidebarVisible} toggleSidebar={toggleSidebar} />
      <div className="content">
        <CarouselComponent />
        <div className="our-batches">
          <h2 className='ourB'>Our Batches</h2>
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
      </div>
    </div>
  );
}

export default App;
