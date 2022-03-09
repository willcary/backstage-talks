import React from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'
import logo from ".././assets/images/logo.png"

const Header = ({ showMenu, toggleMenu, closeMenu, color }) => {
    return (
        <header>
            <img src={logo} onClick={toggleMenu} alt="Backstage Talks" className="logo-mobile" />
            <img src={logo} alt="Backstage Talks" className="logo-wide" />
            {showMenu && <Menu display="mobile" closeMenu={closeMenu} color={color} />}
        </header>
    )
}

Header.propTypes = {
    showMenu: PropTypes.bool,
    toggleMenu: PropTypes.func,
    closeMenu: PropTypes.func,
    color: PropTypes.string
}

export default Header
