import { useContext } from "react";
import { AppContext } from "../App";

function Question() {

    const { title, question } = useContext(AppContext)

    return (
        <div className='h-48 bg-sky-500 w-3/4 md:w-1/2 p-4 items-center rounded-full text-white justify-center font-serif bg-opacity-50 flex md:text-xl flex-col space-y-4 text-xs text-center'>
            <h1 className='text-xl p-0 md:text-3xl'>{title}</h1>
            <p className=''>{question}</p>
        </div>
    );
}

export default Question;