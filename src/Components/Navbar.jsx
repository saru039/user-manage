import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <h1>Navbar</h1>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/users'>Users</Link></li>
            <li><Link to='/logout'>Logout</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar