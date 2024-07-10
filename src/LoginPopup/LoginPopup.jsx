import React, { useState } from 'react'
import './LoginPopup.css';
import {ReactComponent} from '../Assets/svg/x-circle.svg';

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Sign Up")


  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={ReactComponent} alt="" />
            </div>
        </form>
    </div>
  )
}

export default LoginPopup