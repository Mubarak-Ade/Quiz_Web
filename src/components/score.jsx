import { AppContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Score() {

    const { score, numQuiz } = useContext(AppContext)

    return (
        <div className="text-2xl h-screen text-center bg-slate-800 flex flex-col text-green-400 items-center">
            {/* <nav className="flex justify-between w-full p-5 bg-cyan-700">
                <h1 className="text-5xl">≡</h1>
                <h1 className="text-3xl font-bold font-mono">Score Board</h1>
                <button className="bg-sky-500 p-2 text-white text-xl hover:bg-sky-400 rounded-2xl"><Link to='/'>Home</Link ></button>
            </nav> */}
            <div className="my-10">
                <h2 className="text-4xl font-sans">{`Your Final Score is :  ${score} / ${numQuiz * 5}`}</h2>
            </div>
        </div>
    );
}

export default Score;