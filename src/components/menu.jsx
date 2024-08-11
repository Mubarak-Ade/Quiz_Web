import React from 'react'
import { useContext } from 'react'
import * as Fa from 'react-icons/fa6';
import { Link } from 'react-router-dom'
import { AppContext } from '../App'

function Menu() {
    const { display} = useContext(AppContext);
  return (
    <div className={`h-80 show p-4 w-fit rounded-b-3xl absolute ${display} text-xl right-0 bg-pallet-3-200 flex flex-col text-white space-y-10`}>
        <Link className='hover:bg-pallet-6-100 p-4' to='/'><Fa.FaHouse /></Link>
        <Link className='hover:bg-pallet-6-100 p-4' to='score'><Fa.FaChalkboard /></Link>
    </div>
  )
}

export default Menu