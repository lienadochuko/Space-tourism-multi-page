import React from "react";
import '../style/home.css';
import '../style/moon.css';
import logo from '../assets/shared/logo.svg';
import moon from '../assets/destination/image-moon.png';
import { useNavigate } from "react-router-dom";

const Moon = () => {
    return (
        <div className="contain1">
        <div className="wrapper">
            <img src={logo} alt="logo" className="logo"/>
            <span className="grayLine"></span>
            <div className="bar">
                <div className="box"><span className="number">00</span> HOME</div>
                <div className="box1"><span className="number">01</span> DESTINATION</div>
                <div className="box"><span className="number">02</span> CREW</div>
                <div className="box"><span className="number">03</span> TECHNOLOGY</div>
            </div>
        </div>
        <div className="bottomWrapper">
            <div className="left">
                <div className="item1">
                    <span className="itemNumber">01</span>
                    <span className="itemInstruction"> PICK YOUR DESTINATION</span>
                </div>
                
                <img src={moon} alt="moon" className="moonImg"/>
            </div>
            <div className="right">
                <div className="outerCircle">
                    <div className="innerCircle">EXPLORE</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Moon;