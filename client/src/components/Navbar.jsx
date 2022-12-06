import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li className="active"><NavLink to="/">Home</NavLink></li>
        <li className="active"><NavLink to="/login">Login</NavLink></li>
        <li className="active"><NavLink to="/users/:id">My Profile</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar