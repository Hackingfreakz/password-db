import React from 'react'
import '../pages/style.css'
function Navbar() {
  return (
    <nav>
      <ul>
        <li id='listitems'><a href="/">Home</a></li>
        <li id='listitems'><a href="/">About</a></li>
        <li id='listitems'><a href="/">Services</a></li>
        <li id='listitems'><a href="/">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar