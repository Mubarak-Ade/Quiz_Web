import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, createContext, useRef } from 'react';
import Data  from "./components/data/data";
import Score from './components/score';
import Navbar from './components/navigation/navbar';
import Quiz from './components/quiz'
import Menu from './components/menu';

export const AppContext = createContext();

function App() {

    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [userAnswer, setUserAnswer] = useState([]);
    const [display, setDisplay] = useState("hidden");
    const sideBar = useRef();
    

    const handleSelect = (myOpt) => {
        setSelectedOption(myOpt)
        if (!userAnswer.some(answer => answer.index === index)) {
            if (myOpt == answer) {
                setScore(score + 5);
            }
        }

        setUserAnswer([...userAnswer, { index, selected: myOpt }])
        selectedOption(myOpt.target.id)
        handleNext();
    }

    const showQuiz = (quiz) => {
        if (quiz >= Data.length) {
            setIndex(0);
        } else if (quiz < 0) {
            setIndex(Data.length - 1)
        } else {
            setIndex(quiz);
        }

    }

    const handleNext = () => {
        if (index < Data.length - 1) {
            setIndex(index + 1)
        }
        // setIndex((prevIndex) => prevIndex < Data.length - 1 ? prevIndex + 1);
    }

    const handlePrev = () => {
        // setIndex((prevIndex) => (prevIndex >= 0 ? prevIndex - 1 : Data.length));
        if (index > 0) {
            setIndex(index - 1)
        }
    }

    const handleNav = () => {
        let show = (display === "hidden") ? "block" : "hidden"
        setDisplay(show)
        console.log('clicked');
    }

    const { title, answer, question, option, id } = Data[index]
    const numQuiz = Data.length 

    return (
        <div className='md:h-full'>
            <AppContext.Provider value={{ handleNext, handlePrev, title, answer, question, option, id, score, setScore, handleSelect, selectedOption, handleNav, display, numQuiz }}>
                <Router>
                <Navbar /> 
                <Menu />
                    <Routes>
                        <Route path='/' element={<Quiz />} />
                        <Route path='score' element={<Score />} />
                    </Routes>
                </Router>
            </AppContext.Provider>
        </div>
    )
}

export default App;
