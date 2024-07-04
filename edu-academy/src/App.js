import React, { useState } from 'react';
import './css/props.css';
import './css/App.css';

// Components
import Header from './Screen/header.js';
import Sidebar from './Screen/sidebar.js';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="App">
      <Header toggleSidebar={toggleSidebar} />
      {sidebarVisible && <Sidebar toggleSidebar={toggleSidebar} />}
    </div>
  );
}

export default App;
