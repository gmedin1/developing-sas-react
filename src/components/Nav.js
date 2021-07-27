import React from 'react';
import './Nav.css';

function Nav({ options }) {
  return (
    <nav className="nav__nav">
      {options.map((obj) => {
        return (
          <a
            key={obj.option}
            className="nav__option"
            href={`https://developing.com.co#${obj.slug}`}
          >
            {obj.option}
          </a>
        );
      })}
    </nav>
  );
}

export default Nav;
