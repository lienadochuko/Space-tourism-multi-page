import React from "react";
import '../style/home.css';
import logo from '../assets/shared/logo.svg';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigator = useNavigate();

    const handButtonDestination = (e) => {
        e.preventDefault();
        navigator('./destination');
    }

    const handButtonCrew = (e) => {
        e.preventDefault();
        navigator('../crew');
    }

    const handButtonTechnology = (e) => {
        e.preventDefault();
        navigator('../technology');
    }

    return (
        <div className="contain">
            <div className="wrapper">
                <img src={logo} alt="logo" className="logo"/>
                <span className="grayLine"></span>
                <div className="bar">
                    <div className="box01"><span className="number">00</span> HOME</div>
                    <div className="box" onClick={handButtonDestination}><span className="number">01</span> DESTINATION</div>
                    <div className="box" onClick={handButtonCrew}><span className="number">02</span> CREW</div>
                    <div className="box" onClick={handButtonTechnology}><span className="number">03</span> TECHNOLOGY</div>
                </div>
            </div>
            <div className="bottomWrapper">
                <div className="left">
                    <div className="itemH1">SO, YOU WANT TO TRAVEL TO</div>
                    <div className="item2">SPACE</div>
                    <div className="item3">
                        Let’s face it; if you want to go to space
                        , you might as well genuinely go to outer space 
                        and not hover kind of on the edge of it. Well sit back
                        , and relax because we’ll give you a truly out of this 
                        world experience!</div>
                </div>
                <div className="right">
                    <div className="outerCircle" onClick={handButtonDestination}>
                        <div className="innerCircle">EXPLORE</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;