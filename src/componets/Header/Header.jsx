import React, { useState } from 'react'
import './Header.css'
import menuicon from '../assets/menuicon.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='head'>
      <a className='name' href='#'>Saravana Kumar N</a>
      <div className={`list ${isMenuOpen ? 'active' : ''}`}>
        <a onClick={toggleMenu} className='listname' href='/'>Home</a>
        <a onClick={toggleMenu} className='listname' href='#about'>About</a>
        <a onClick={toggleMenu} className='listname' href='#project'>Project</a>
        <a onClick={toggleMenu} className='listname' href='#contact'>Contact</a>
        <a onClick={toggleMenu} className='listname' href='#resume'>Resume</a>
      </div>
      <img
        className='menu-icon'
        src={menuicon}
        alt='Menu Icon'
        onClick={toggleMenu}
      />
    </header>
  );
}

export default Header