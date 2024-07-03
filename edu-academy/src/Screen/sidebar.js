import React from "react";
import logo from "../Assets/Images/Logos/Logo-1.png";


function Sidebar()
{
    return (
    <div className="sidebar fixed">
        <a href="#" className="logo bl">
            <img src={logo} className="bl"/>
        </a>
    </div>
   );
}

export default Sidebar;