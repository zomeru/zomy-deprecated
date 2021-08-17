import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../config';
import logo from '../assets/logo.png';
import { StyledNav } from '../styles/componentStyles/NavStyles';

interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
  return (
    <StyledNav>
      <nav>
        <Link to='/' className='logo'>
          <img src={logo} alt='logo' className='logo-image' />
          <span>ZOMY</span>
        </Link>
        <div className='nav_links'>
          {navLinks.map(link => {
            const isExternal = link.url.indexOf('http');
            return isExternal > -1 ? (
              <a
                key={link.name}
                href={link.url}
                className='link'
                target='_blank'
                rel='noreferrer'
              >
                {link.name}
              </a>
            ) : (
              <Link className='link' key={link.name} to={link.url}>
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </StyledNav>
  );
};

export default Nav;
