import React from "react";
import '../../style/home.css';
import '../..//style/global.css';
import logo from '../../assets/shared/logo.svg';
import anousheh from '../../assets/crew/image-anousheh-ansari.png';
import { useNavigate } from "react-router-dom";
import data from '../../data.json';

const Engineer = () => {
    const navigator = useNavigate();

    const handButton = (e) => {
        e.preventDefault();
        navigator('/');
    }
    const handButtonCrew = (e) => {
        e.preventDefault();
        navigator('../crew');
    }

    const handButtonCommander = (e) => {
        e.preventDefault();
        navigator('../crew');
    }

    const handButtonPilot = (e) => {
        e.preventDefault();
        navigator('../pilot');
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

    return (
        <div className="contain1">
            <div className="wrapper">
                <img src={logo} alt="logo" className="logo" />
                <span className="grayLine"></span>
                <div className="bar">
                    <div className="box" onClick={handButton}><span className="number">00</span> HOME</div>
                    <div className="box" onClick={handButtonDestination}><span className="number">01</span> DESTINATION</div>
                    <div className="boxCrew1" onClick={handButtonCrew} ><span className="number">02</span> CREW</div>
                    <div className="box" onClick={handButtonTechnology}><span className="number">03</span> TECHNOLOGY</div>
                </div>
            </div>
            <div className="bottomWrapper">
                <div className="Crewright">
                    <div className="Crewitem1">
                        <span className="CrewitemNumber">02</span>
                        <span className="CrewitemInstruction">MEET YOUR CREW</span>
                    </div>
                    <div className="Crewbar">
                        <div className="Crewbox">{String(data.crew[3].role).toUpperCase()}</div>

                        <div className="Crewitem2">{String(data.crew[3].name).toUpperCase()}</div>
                        <div className="Crewitem3">{data.crew[3].bio}</div>
                    </div>
                    <div className="CrewNavigate">
                        <span className="Crewcircle" onClick={handButtonCommander}></span>
                        <span className="Crewcircle" onClick={handButtonSpecialist}></span>
                        <span className="Crewcircle" onClick={handButtonPilot}></span>
                        <span className="Crewcircle1"></span>
                    </div>
                </div>
                <div className="Crewleft">
                    <img src={anousheh} alt="moon" className="moonImg" />
                </div>
            </div>
        </div>
    )
}

export default Engineer;