import React from 'react'
import '../pages/style.css'
function Navbar() {
  return (
    <nav className='navbar'>
      <span className='navbar-brand'>PassDB</span>
      <button className='nav-toggle'>
        <svg className='nav-toggle-icon' viewBox='0 0 20 20'>
          <path d="M10 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
          <path d="M10 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
          <path d="M10 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        </svg> 
      </button>
      <ul className='nav-links'>
        <li><a href='/' className='nav-link'>Home</a></li>
        <li><a href='/about' className='nav-link'>About</a></li>
        <li><a href='/contact' className='nav-link'>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar