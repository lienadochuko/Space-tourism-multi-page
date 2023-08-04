import React from "react";
import '../../style/home.css';
import '../..//style/global.css';
import logo from '../../assets/shared/logo.svg';
import Spacecapsule from '../../assets/technology/image-space-capsule-portrait.jpg';
import { useNavigate } from "react-router-dom";
import data from '../../data.json';

const SpaceCapsule = () => {
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

    const handButtonSpaceport = (e) => {
        e.preventDefault();
        navigator('../spaceport');
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
                <div className="Technologyright">
                    <div className="Technologyitem1">
                        <span className="TechnologyitemNumber">03</span>
                        <span className="TechnologyitemInstruction">SPACE LAUNCH 101</span>
                    </div>
                    <div className="TechnologyMain">
                    <div className="TechnologyNavigate">
                        <span className="Technologycircle" onClick={handButtonTechnology}>1</span>
                        <span className="Technologycircle" onClick={handButtonSpaceport}>2</span>
                        <span className="Technologycircle1">3</span>
                    </div>
                    <div className="Technologybar">
                        <div className="Technologyitem2">
                        <div className="Technologybox">THE TERMINOLOGY…</div>
                            {String(data.technology[2].name).toUpperCase()}</div>
                        <div className="Technologyitem3">{data.technology[2].description}</div>
                    </div>
                    </div>
                   
                </div>
                <div className="Technologyleft">
                    <img src={Spacecapsule} alt="Spacecapsule" className="TechnologyImg" />
                </div>
            </div>
        </div>
    )
}

export default SpaceCapsule;