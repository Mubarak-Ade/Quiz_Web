import Question from "./question"
import Answer from "./answer"
import { useContext } from 'react';
import { AppContext } from "../App";
import * as Fa from 'react-icons/fa6';
import { Link } from 'react-router-dom'

function Quiz() {

    const { handleNext, handlePrev } = useContext(AppContext)

    return (
        <div className="h-full space-y-4 p-2 flex flex-col items-center bg-gradient-to-tr w-full justify-center from-[#4facfe] to-[#151b1b]">
            <Question />
            <Answer />
            <div className="text-xl text-center content-center text-white pb-2 w-1/2 flex justify-center space-x-10 md:space-x-4 md:w-1/2">
                <button onClick={handlePrev} className="bg-sky-700 px-4 py-2 rounded-3xl hover:bg-sky-600 ">Prev</button>
                <button className="bg-red-600 p-4 py-2.5 hover:bg-red-500 rounded-3xl text-lg"><Link to='score'>Submit</Link></button>
                <button onClick={handleNext} className="bg-sky-700 px-4 py-2 rounded-3xl hover:bg-sky-600 ">Next</button>
            </div>
        </div>
    )
}

export default Quiz