import React from "react";
import PropTypes from 'prop-types'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'

function Header(props) {
  return (
    <header className="header">
      <Logo />
			<HeaderMenu openCart={props.openCart} />
    </header>
  );
}

Header.propTypes = {
	openCart: PropTypes.func.isRequired
}

export default Header;