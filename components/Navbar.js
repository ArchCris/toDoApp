import React from 'react'
import Link from 'next/link'
import { useContextData } from "../context/ContextProvider"



const Navbar = () => {

    const date = new Date()
    const month = date.toLocaleString("default",{month:"long"})
    const dayOfMonth = date.getDate()

    const {resetApp} = useContextData()

  return (
    <nav className='navbar'>
        <ul className='navbar__ul'>
            <li className='navbar__li'>
            <Link className='navbar__a' href="/"><svg fill="white" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-task-list-f navbar__logo"><path d='M6 0h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zm6 9a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2h-3zm-2 4a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2h-5zm0-8a1 1 0 1 0 0 2h5a1 1 0 0 0 0-2h-5zm-4.172 5.243l-.707-.707a1 1 0 1 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.415 0l2.828-2.828A1 1 0 0 0 7.95 8.12l-2.122 2.122z' /></svg></Link>
            </li>
            <li className='navbar__li'>
                <Link className='navbar__a' href="/">App</Link>
            </li>
            <li className='navbar__li'>
                <Link className='navbar__a' href="/About">About</Link>
            </li>
            <li className='navbar__li'>
                <Link className='navbar__a' href="/Contact">Contact</Link>
            </li>
            <li className='navbar__li'>
                <button className='navbar__btn' onClick={resetApp}>Reset</button>
            </li>
            <li className='navbar__li'>
                <p className='navbar__date'>{dayOfMonth} / {month}</p>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar