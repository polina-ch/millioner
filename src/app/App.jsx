import React from 'react';
import './App.scss'


import {Route, Routes} from "react-router-dom";
import MainPage from "../components/pages/MainPage/MainPage";
import QuestionPage from "../components/pages/QuestiopPage/QuestionPage";
import Question2 from "../components/pages/Questioin2/Question2";
import Question3 from "../components/pages/Question3/Question3";
import Question4 from "../components/pages/Question4/Question4";
import Question5 from "../components/pages/Question5/Question5";
import Question6 from "../components/pages/Question6/Question6";
import Question7 from "../components/pages/Question7/Question7";
import Question8 from "../components/pages/Question8/Question8";
import Question9 from "../components/pages/Question9/Question9";
import Question10 from "../components/pages/Question10/Question10";
import Question11 from "../components/pages/Question11/Question11";
import Question12 from "../components/pages/Question12/Question12";
import Question13 from "../components/pages/Question13/Question13";
import Question14 from "../components/pages/Question14/Question14";
import Question15 from "../components/pages/Question15/Question15";



function App(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element ={<MainPage/>}/>
                <Route  path='/question' element ={<QuestionPage/>}/>
                <Route  path='/question/2' element ={<Question2/>}/>
                <Route  path='/question/3' element ={<Question3/>}/>
                <Route  path='/question/4' element ={<Question4/>}/>
                <Route  path='/question/5' element ={<Question5/>}/>
                <Route  path='/question/6' element ={<Question6/>}/>
                <Route  path='/question/7' element ={<Question7/>}/>
                <Route  path='/question/8' element ={<Question8/>}/>
                <Route  path='/question/9' element ={<Question9/>}/>
                <Route  path='/question/10' element ={<Question10/>}/>
                <Route  path='/question/11' element ={<Question11/>}/>
                <Route  path='/question/12' element ={<Question12/>}/>
                <Route  path='/question/13' element ={<Question13/>}/>
                <Route  path='/question/14' element ={<Question14/>}/>
                <Route  path='/question/15' element ={<Question15/>}/>

            </Routes>
        </div>
    );
}

export default App;
