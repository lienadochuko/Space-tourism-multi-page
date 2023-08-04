import React from "react";
import '../../style/home.css';
import '../..//style/global.css';
import logo from '../../assets/shared/logo.svg';
import spaceport from '../../assets/technology/image-spaceport-portrait.jpg';
import { useNavigate } from "react-router-dom";
import data from '../../data.json';

const Spaceport = () => {
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

    const handButtonSpaceCapsule = (e) => {
        e.preventDefault();
        navigator('../spaceCapsule');
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
                        <span className="Technologycircle"onClick={handButtonTechnology}>1</span>
                        <span className="Technologycircle1">2</span>
                        <span className="Technologycircle" onClick={handButtonSpaceCapsule}>3</span>
                    </div>
                    <div className="Technologybar">
                        <div className="Technologybox">THE TERMINOLOGY…</div>

                        <div className="Technologyitem2">{String(data.technology[1].name).toUpperCase()}</div>
                        <div className="Technologyitem3">{data.technology[1].description}</div>
                    </div>
                    </div>
                   
                </div>
                <div className="Technologyleft">
                    <img src={spaceport} alt="spaceport" className="TechnologyImg" />
                </div>
            </div>
        </div>
    )
}

export default Spaceport;