import React from 'react';
import logo from "./Assets/Images/Logos/Logo-1.png";
import "./css/props.css";
import "./css/App.css";


//Screen
import Header from "./Screen/header.js";
import Sidebar from "./Screen/sidebar.js";

function App() {
  return (
    <div className="App flex">
        <Sidebar/>
        <Header/>

    </div>
  );
}

export default App;
