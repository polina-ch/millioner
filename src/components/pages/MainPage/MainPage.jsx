import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import './Main.scss'
import videoStarted from '../../../assets/videos/clock-version-zastavka-kto-xocet-stat-millionerom-wwtbam-russia-intro_(videomega.ru).mp4'

function MainPage(props) {


    const navigate = useNavigate()
    return (
       <div className={'main'}>
           <div className={"video-container"}>
               <video onClick={() => navigate ('/question')}
                   autoPlay loop >
                   <source src={videoStarted} type="video/mp4" />
               </video>
           </div>
        </div>
    );
}

export default MainPage;
