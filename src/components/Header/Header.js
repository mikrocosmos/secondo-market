import React from "react";
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

export default Header;
