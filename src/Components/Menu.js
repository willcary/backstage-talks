import React from 'react'
import PropTypes from 'prop-types'

function Menu({ display, closeMenu, color }) {
  return (
    <ul className={display === "mobile" ? "menu menu-mobile " + color : "menu menu-wide"}>
        <li><a className="menulink" href="#issue-5" onClick={closeMenu}>Issue #5</a></li>
        <li><a className="menulink" href="#issue-4" onClick={closeMenu}>Issue #4</a></li>
        <li><a className="menulink" href="#issue-3" onClick={closeMenu}>Issue #3</a></li>
        <li><a className="menulink" href="#issue-2" onClick={closeMenu}>Issue #2</a></li>
        <li><a className="menulink" href="#issue-1" onClick={closeMenu}>Issue #1</a></li>
    </ul>
  )
}

Menu.propTypes = {
    display: PropTypes.string,
    closeMenu: PropTypes.func,
    color: PropTypes.string
}

export default Menu
