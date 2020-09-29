import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to='/music'>MUSIC</NavLink>
      </li>
      <li>
        <NavLink to='/video'>VIDEO</NavLink>
      </li>
      <li>
        <NavLink to='/live'>LIVE</NavLink>
      </li>
      <li>
        <NavLink to='/shop'>SHOP</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
