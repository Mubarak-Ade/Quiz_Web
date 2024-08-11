import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'

function Sidebar() {
  const { display} = useContext(AppContext)

  return (
    <div className={`w-96 h-[88svh] show bg-pallet-2-100 ${display}`}>
        <ul className='m-10 text-2xl space-y-4'>
          <li className=''>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="score" >Score</Link>
          </li>
          <li>
            <Link to="" ></Link>
          </li>
          <li>
            <Link to="" ></Link>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar