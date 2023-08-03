import React from "react";
import '../../style/home.css';
import '../..//style/global.css';
import logo from '../../assets/shared/logo.svg';
import launch from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import { useNavigate } from "react-router-dom";
import data from '../../data.json';

const Vehicle = () => {
    const navigator = useNavigate();

    const handButton = (e) => {
        e.preventDefault();
        navigator('/');
    }
    const handButtonCrew = (e) => {
        e.preventDefault();
        navigator('../crew');
    }

    const handButtonDestination = (e) => {
        e.preventDefault();
        navigator('../destination');
    }

    const handButtonSpecialist = (e) => {
        e.preventDefault();
        navigator('../specialist');
    }

    const handButtonTechnology = (e) => {
        e.preventDefault();
        navigator('../technology');
    }

    // const handButtonVehicle = (e) => {
    //     e.preventDefault();
    //     navigator('../vehicle');
    // }

    return (
        <div className="contain3">
            <div className="wrapper">
                <img src={logo} alt="logo" className="logo" />
                <span className="grayLine"></span>
                <div className="bar">
                    <div className="box" onClick={handButton}><span className="number">00</span> HOME</div>
                    <div className="box" onClick={handButtonDestination}><span className="number">01</span> DESTINATION</div>
                    <div className="box" onClick={handButtonCrew} ><span className="number">02</span> CREW</div>
                    <div className="boxtechnology1" onClick={handButtonTechnology}><span className="number">03</span> TECHNOLOGY</div>
                </div>
            </div>
            <div className="bottomWrapper">
                <div className="Crewright">
                    <div className="Crewitem1">
                        <span className="CrewitemNumber">03</span>
                        <span className="CrewitemInstruction">SPACE LAUNCH 101</span>
                    </div>
                    <div className="Crewbar">
                        <div className="Crewbox">THE TERMINOLOGY…</div>

                        <div className="Crewitem2">{String(data.technology[0].name).toUpperCase()}</div>
                        <div className="Crewitem3">{data.technology[0].description}</div>
                    </div>
                    <div className="CrewNavigate">
                        <span className="Crewcircle"></span>
                        <span className="Crewcircle" onClick={handButtonSpecialist}></span>
                        <span className="Crewcircle"></span>
                        <span className="Crewcircle1"></span>
                    </div>
                </div>
                <div className="Crewleft">
                    <img src={launch} alt="moon" className="moonImg" />
                </div>
            </div>
        </div>
    )
}

export default Vehicle;