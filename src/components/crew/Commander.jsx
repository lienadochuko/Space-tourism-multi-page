import React, {useState} from "react";
import '../../style/home.css';
import '../..//style/global.css';
import logo from '../../assets/shared/logo.svg';
import douglas from '../../assets/crew/image-douglas-hurley.png';
import iconhamburger from '../../assets/shared/icon-hamburger.svg';
import iconcloser from '../../assets/shared/icon-close.svg';
import { useNavigate } from "react-router-dom";
import data from '../../data.json';

const Commander = () => {
    const navigator = useNavigate();
    const [hamburger, setHamburger] = useState(false);

    const open = () => {
        setHamburger(!hamburger);
        console.log(hamburger);
    }

    const handButton = (e) => {
        e.preventDefault();
        navigator('/');
    }


    const handButtonDestination = (e) => {
        e.preventDefault();
        navigator('../destination');
    }

    const handButtonSpecialist = (e) => {
        e.preventDefault();
        navigator('../specialist');
    }

    const handButtonPilot = (e) => {
        e.preventDefault();
        navigator('../pilot');
    }

    const handButtonEngineer = (e) => {
        e.preventDefault();
        navigator('../engineer');
    }

    const handButtonTechnology = (e) => {
        e.preventDefault();
        navigator('../technology');
    }

    return (
        <div className="contain2">
            <div className="wrapper">
                <img src={logo} alt="logo" className="logo" />
                <span className="grayLine"></span>
                <div className="bar">
                    <div className="box" onClick={handButton}><span className="number">00</span> HOME</div>
                    <div className="box" onClick={handButtonDestination}><span className="number">01</span> DESTINATION</div>
                    <div className="boxCrew1" ><span className="number">02</span> CREW</div>
                    <div className="box" onClick={handButtonTechnology}><span className="number">03</span> TECHNOLOGY</div>
                </div>
                <img src={iconhamburger} alt="harmburgerIcon" className="hamburger" onClick={open}/>              
                <div className="bar1" style={{display: hamburger ? 'flex' : 'none'}}> 
                    <img src={iconcloser} alt="closeIcon" className="closer" onClick={open}/>
                    <div className="boxhold">
                    <div className="box" onClick={handButton}><span className="number">00</span> HOME</div>
                    <div className="box" onClick={handButtonDestination}><span className="number">01</span> DESTINATION</div>
                    <div className="box1"><span className="number">02</span> CREW</div>
                    <div className="box" onClick={handButtonTechnology}><span className="number">03</span> TECHNOLOGY</div>
                    </div>
                </div>
            </div>
            <div className="bottomWrapper">
                
                <div className="Crewright">
                    <div className="Crewitem1">
                        <span className="CrewitemNumber">02</span>
                        <span className="CrewitemInstruction">MEET YOUR CREW</span>
                    </div>
                    <div className="Crewbar">
                        <div className="Crewbox">{String(data.crew[0].role).toUpperCase()}</div>

                        <div className="Crewitem2">{String(data.crew[0].name).toUpperCase()}</div>
                        <div className="Crewitem3">{data.crew[0].bio}</div>
                    </div>
                    <div className="CrewNavigate">
                        <span className="Crewcircle1"></span>
                        <span className="Crewcircle" onClick={handButtonSpecialist}></span>
                        <span className="Crewcircle" onClick={handButtonPilot}></span>
                        <span className="Crewcircle" onClick={handButtonEngineer}></span>
                    </div>
                </div>
                <div className="Crewleft">
                    <img src={douglas} alt="moon" className="CrewImg" />
                </div>
                <div className="CrewNavigate2">
                        <span className="Crewcircle1"></span>
                        <span className="Crewcircle" onClick={handButtonSpecialist}></span>
                        <span className="Crewcircle" onClick={handButtonPilot}></span>
                        <span className="Crewcircle" onClick={handButtonEngineer}></span>
                </div>
                <div className="Crewbar1">
                        <div className="Crewbox">{String(data.crew[0].role).toUpperCase()}</div>

                        <div className="Crewitem2">{String(data.crew[0].name).toUpperCase()}</div>
                        <div className="Crewitem3">{data.crew[0].bio}</div>
                </div>
            </div>
        </div>
    )
}

export default Commander;