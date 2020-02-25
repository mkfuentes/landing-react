import React from 'react'
import Logo from './logo'
import NavBrand from './Navbrand'
import NavbarToggler from './NavbarToggler'
import NavbarCollapse from './NavCollapse'

//aqui van los import de cada elemento del Navbar

function Navbar () {
  return (
    <nav className='navbar sticky-top navbar-expand-lg navbar-light bg-light justify-content-between'>
    <Logo />
    <NavBrand />
    <NavbarToggler />
    <NavbarCollapse />
    </nav>
  )
}

export default Navbar
