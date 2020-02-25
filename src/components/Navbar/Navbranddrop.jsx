import React from 'react'

function Navbranddrop (props) {
  return (
    <li class='nav-item dropdown'>
        <a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
          {props.main}
        </a>
        <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
          <a class='dropdown-item' href='#'>{props.elemento1}</a>
          <a class='dropdown-item' href='#'>{props.elemento2}</a>
          <div class='dropdown-divider'></div>
          <a class='dropdown-item' href='#'>{props.elemento3}</a>
        </div>
      </li>
  )
}

export default Navbranddrop
