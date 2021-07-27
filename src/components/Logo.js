import React from 'react';
import './Logo.css';

function Logo({ url, alt }) {
  return <img className="nav__logo" src={url} alt={alt} />;
}

export default Logo;
