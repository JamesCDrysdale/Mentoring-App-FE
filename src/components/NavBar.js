import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <h1>Mentoring App</h1>

      <ul>
        <li className="navLink">
          <Link to="/mentors">Mentors</Link>
        </li>
        <li className="navLink">
          <Link to="/mentors/new">Add mentor</Link>
        </li>
        <li className="navLink">
          <Link to="/mentees">Mentees</Link>
        </li>
      </ul>
    </header>
  )
}

export default NavBar;