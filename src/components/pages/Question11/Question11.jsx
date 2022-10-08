import React, {useState} from 'react';
import '../QuestiopPage/Question.scss'
import logo from '../../../assets/imgs/IMG_9585.JPEG'
import {useNavigate} from "react-router-dom";
import fonsound from '../../../assets/sounds/dumaet.mp3'
import zal from '../../../assets/imgs/zal.PNG'
import fiftyonfifty from '../../../assets/imgs/50.PNG'
import call from '../../../assets/imgs/zvonok.PNG'
import delfifty from '../../../assets/imgs/delfif.PNG'
import delcall from '../../../assets/imgs/caller.PNG'
import delhehper from '../../../assets/imgs/helper.PNG'
import letssee from '../../../assets/sounds/khsm_q1-5-correct-o.mp3'
import callFriend from '../../../assets/sounds/zvonokdrugu.mp3'
import golosovanie from '../../../assets/sounds/golosovanie.mp3'
import fifs from '../../../assets/sounds/khsm_50-50.mp3'
import loses from '../../../assets/sounds/lose.mp3'

function soundLose () {
    const audio = new Audio()
    audio.src = loses
    audio.autoplay = true
}

function soundCallFriend () {
    const audio = new Audio()
    audio.src = callFriend
    audio.autoplay = true
}

function soundVoiting () {
    const audio = new Audio()
    audio.src = golosovanie
    audio.autoplay = true
}

function soundFiftyOnFifty () {
    const audio = new Audio()
    audio.src = fifs
    audio.autoplay = true
}

function soundClickTrue () {
    const audio = new Audio()
    audio.src = letssee
    audio.autoplay = true
}

function Question11(props) {
    const navigate = useNavigate()
    const [fifty, setFifty] = useState(false);
    const [caller, setCaller] = useState(false);
    const [delzal, setDelzal] = useState(false);
    const [firstGreenButton, setFirstGreenButton] = useState(false);
    const [firstRedButton, setFirstRedButton] = useState(false);
    const [secondGreenButton, setSecondGreenButton] = useState(false);
    const [socondRedButton, setSocondRedButton] = useState(false);
    const [thirdGreenButton, setThirdGreenButton] = useState(false);
    const [thirdRedButton, setThirdRedButton] = useState(false);
    const [fourthGreenButton, setFourthGreenButton] = useState(false);
    const [fourthRedButton, setFourthRedButton] = useState(false);

    const answerFirstRed = () => {
        setFirstRedButton(true)
        soundLose()
        setTimeout(() => {
            navigate('/question/12')
        },'2000')
    }
    const answerSecondRed = () => {
        setSocondRedButton(true)
        soundLose()
        setTimeout(() => {
            navigate('/question/12')
        },'2000')
    }
    const answerThirdRed = () => {
        setThirdRedButton(true)
        soundLose()
        setTimeout(() => {
            navigate('/question/12')
        },'2000')
    }
    const answerFourRed = () => {
        setFourthRedButton(true)
        soundLose()
        setTimeout(() => {
            navigate('/question/12')
        },'2000')
    }

    const answerFirstGreen = () => {
        setFirstGreenButton(true)
        soundClickTrue()
        setTimeout(() => {
            navigate('/question/12')
        },'2000')
    }

    const answerSecondGreen = () => {
        setSecondGreenButton(true)
        soundClickTrue()
        setTimeout(() => {
            navigate('/question/12')
        },'2000')
    }
    const answerThirdGreen = () => {
        setThirdGreenButton(true)
        soundClickTrue()
        setTimeout(() => {
            navigate('/question/12')
        },'2000')
    }
    const answerFourGreen = () => {
        setFourthGreenButton(true)
        soundClickTrue()
        setTimeout(() => {
            navigate('/question/12')
        },'2000')
    }

    return (
        <div className={'main'}>
            <audio src={fonsound} autoPlay='autoplay'></audio>

            { !delzal ?
                <img
                    onClick={() => {setDelzal(true); soundVoiting()}}
                    className={'main__zal'} src={zal} alt=""/>
                :
                <img className={'main__delzal'}
                     src={delhehper} alt=""/>
            }
            { !fifty ?
                <img
                    onClick={() => {setFifty(true); soundFiftyOnFifty ()}}
                    className={'main__fifty'} src={fiftyonfifty} alt=""/>
                :
                <img className={'main__delfifty'} src={delfifty} alt=""/>
            }
            { !caller ?
                <img
                    onClick={() => {setCaller(true); soundCallFriend()}}
                    className={'main__call'} src={call} alt=""/>
                :
                <img className={'main__delcall'} src={delcall} alt=""/>
            }
            <img src={logo} alt=""/>


            <div
                style={{marginTop: '18vh'}}
                className={'main__indicator'}></div>


            <div className={'main__money'}>
                <p style={{color:'white'}}>15 - 10.000 ₽</p>
                <p>14 - 7.000 ₽</p>
                <p>13 - 6.000 ₽</p>
                <p>12 - 5.000 ₽</p>
                <p>11 - 4.000 ₽</p>
                <p style={{color:'white'}}>10 - 3.000 ₽</p>
                <p>9 - 2.000 ₽</p>
                <p>8 - 1.000 ₽</p>
                <p>7 - 900 ₽</p>
                <p>6 - 700 ₽</p>
                <p style={{color:'white'}}>5 - 500 ₽</p>
                <p>4 - 400 ₽</p>
                <p>3 - 300 ₽</p>
                <p>2 - 200 ₽</p>
                <p>1 - 100 ₽</p>
            </div>

            <div className={'main__question'}>Сколько было бы лет на сегодняшний день команде DO MY SWAG?</div>
            <div
                onClick={() => answerFirstRed()}
                className={!firstRedButton ? 'main__first' : 'main__first__red'}>A: 8 лет</div>
            <div

                onClick={() => answerSecondGreen()}
                className={!secondGreenButton ? 'main__second' : 'main__second__green'}>В: 10 лет</div>
            <div
                onClick={() => answerThirdRed()}
                className={!thirdRedButton ? 'main__third' : 'main__third__red'}>C: 9 лет</div>
            <div
                onClick={() => answerFourRed()}
                className={!fourthRedButton? 'main__fourth': 'main__fourth__red'}>D: 11 лет</div>
        </div>
    );
}

export default Question11;