import React from 'react';
import Nav from './Nav';
import Logo from './Logo';
import './Header.css';

function Header({ logo, nav }) {
  return (
    <header>
      <Logo url={logo.url} alt={logo.alt} />
      <Nav options={nav.options} />
    </header>
  );
}

export default Header;
