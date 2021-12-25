import React from "react";
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'

function Header() {
  return (
    <header className="header">
      <Logo />
			<HeaderMenu />
    </header>
  );
}

export default Header;
