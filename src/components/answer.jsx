import { useContext } from 'react';
import React from 'react'
import { AppContext } from '../App';
import "../index.css"

function Answer() {

	const { option, answer, score, setScore, handleSelect, selectedOption } = useContext(AppContext)

	return (
		<div className='h-full md:w-1/2 bg-pallet-6-200 bg-opacity-60 rounded-3xl p-4 text-xs w-full'>
			<ol>
				{option.map((opt, index) => (
					<li className='' key={index}>
						<input name='options'
							className='peer hidden'
							checked={selectedOption === opt.value}
							onChange={() => handleSelect(opt.value)}
							value={opt.value} id={opt.key} type="radio"
						/>
						<label className='block px-12 py-3.5 border-2
							border border-solid border-slate-800
							rounded-xl cursor-pointer text-sm
							w-full my-2 mx-0 relative ease-in-out delay-[0s]
							before:invisible before:absolute before:left-5 before:top-5
							before:h-2 before:w-2 before:scale-[3] before:bg-slate-900
							before:rounded-full before:opacity-0 before:delay-0 before:duration-500
							before:ease-in-out before:content-[""] after:absolute
							after:left-4 after:top-4 after:h-4 after:w-4 after:rounded-full
							after:border-2 after:border-solid after:border-black after:content-[""] peer-checked:border-black peer-checked:before:visible
							peer-checked:before:scale-100 peer-checked:before:opacity-100'
							htmlFor={opt.key}>
							{opt.key} - {opt.value}
						</label>
					</li>
				))}
			</ol>
		</div>
	)
}

export default Answer