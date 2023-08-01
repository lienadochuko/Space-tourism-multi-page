import React from "react";
import '../../style/home.css';
import '../..//style/global.css';
import logo from '../../assets/shared/logo.svg';
import europa from '../../assets/destination/image-europa.png';
import { useNavigate } from "react-router-dom";
import data from '../../data.json';

const Europa = () => {
    const navigator = useNavigate();

    const handButton = (e) => {
        e.preventDefault();
        navigator('/');
    }

    const handButtonMoon = (e) => {
        e.preventDefault();
        navigator('../moon');
    }

    const handButtonMars= (e) => {
        e.preventDefault();
        navigator('../mars');
    }

    return (
        <div className="contain1">
            <div className="wrapper">
                <img src={logo} alt="logo" className="logo" />
                <span className="grayLine"></span>
                <div className="bar">
                    <div className="box" onClick={handButton}><span className="number">00</span> HOME</div>
                    <div className="box1" onClick={handButtonMoon}><span className="number">01</span> DESTINATION</div>
                    <div className="box"><span className="number">02</span> CREW</div>
                    <div className="box"><span className="number">03</span> TECHNOLOGY</div>
                </div>
            </div>
            <div className="bottomWrapper">
                <div className="Moonleft">
                    <div className="item1">
                        <span className="itemNumber">01</span>
                        <span className="itemInstruction"> PICK YOUR DESTINATION</span>
                    </div>
                    <img src={europa} alt="moon" className="moonImg" />
                </div>
                <div className="Moonright">
                    <div className="Moonbar">
                        <div className="Moonbox" onClick={handButtonMoon}>{String(data.destinations[0].name).toUpperCase()}</div>
                        <div className="Moonbox" onClick={handButtonMars}>{String(data.destinations[1].name).toUpperCase()}</div>
                        <div className="Moonbox01">{String(data.destinations[2].name).toUpperCase()}</div>
                        <div className="Moonbox">{String(data.destinations[3].name).toUpperCase()}</div>
                    </div>
                    <div className="Moonitem2">{String(data.destinations[2].name).toUpperCase()}</div>
                    <div className="Moonitem3">{data.destinations[2].description}</div>
                    <div className="distanceTime">
                        <div className="figures">
                            <div className="title">AVG. DISTANCE</div>
                            <div className="Data">{String(data.destinations[2].distance).toUpperCase()}</div>
                        </div>
                        <div className="figures">
                            <div className="title">EST. TRAVEL TIME</div>
                            <div className="Data">{String(data.destinations[2].travel).toUpperCase()}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Europa;