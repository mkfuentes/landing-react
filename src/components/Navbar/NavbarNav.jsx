import React from 'react'
import NavbarNavItem from './NavbarItem'
import Navbranddrop from './Navbranddrop'

function NavbarNav () {
  return (
    <ul className='navbar-nav mr-auto'>
      <Navbranddrop
      main='Product'
      elemento1='Lite'
      elemento2='Pro'
      elemento3='Premium'
      />
       <Navbranddrop
      main='For creators'
      />
      <NavbarNavItem
        text='Pricing'
        to='#'
        active
      />
      <Navbranddrop
      main='Resources'
      elemento1='Lite'
      elemento2='Pro'
      elemento3='Premium'
      />
      <NavbarNavItem
        text='Starter kits'
        to='#'
      />
    </ul>
  )
}

export default NavbarNav
