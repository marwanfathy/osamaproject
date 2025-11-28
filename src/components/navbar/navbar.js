import React, { useState } from 'react';
import './navbar.css';
import logo from '../assets/logo.png';

function Navbar({ username, onLogout, onOpenLogin }) { // Add onOpenLogin
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    onLogout();
    setIsOpen(false);
  };

  const handleLoginClick = () => {
    onOpenLogin();
    setIsOpen(false);
  }

  return (
    <div className='navbar'>
      <img className='logo' src={`${logo}`} alt="Logo" />
      
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <ul className={`ul-class ${isOpen ? 'active' : ''}`}>
        <li className='li-syles' onClick={() => scrollToSection('rehabilitation')}>Rehabilitation</li>
        <li className='li-syles' onClick={() => scrollToSection('aboutme')}>About Me</li>
        <li className='li-syles' onClick={() => scrollToSection('ai-sec')}>AI</li>

        {/* --- CONDITIONAL RENDERING --- */}
        
        {username ? (
          // IF LOGGED IN: Show Name + Logout
          <>
            <li className='li-syles username-item'>Hi, <span>{username}</span></li>
            <li className='li-syles logout-btn' onClick={handleLogout}>
              Logout <i className="ri-logout-box-r-line"></i>
            </li>
          </>
        ) : (
          // IF NOT LOGGED IN: Show Login Button
          <li className='li-syles login-btn' onClick={handleLoginClick}>
            Login <i className="ri-login-box-line"></i>
          </li>
        )}

      </ul>
    </div>
  );
}

export default Navbar;