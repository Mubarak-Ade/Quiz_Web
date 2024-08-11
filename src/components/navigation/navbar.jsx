import React from 'react'
import { Link } from 'react-router-dom'
import * as Fa from 'react-icons/fa6'
import { useContext } from 'react'
import { AppContext } from '../../App'

function Navbar() {
  const {handleNav, numQuiz, id} = useContext(AppContext)
  return (
    <div className='w-full flex justify-between bg-pallet-6-200 text-white p-4'>
        <h2 className='text-xl content-center'>{id} - {numQuiz}</h2>
        <h1 className='text-4xl'><Link to='/'>Quiz App</Link></h1>
        <Fa.FaBarsStaggered size={45} onClick={handleNav} className='p-2 cursor-pointer' />
    </div>
  )
}

export default Navbar;