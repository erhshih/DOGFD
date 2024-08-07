import React, { useState, useEffect } from "react";
import "./Panel.scss";
import { Link, useLocation } from 'react-router-dom'
const Panel = () => {
  const [isOpen, setOpen] = React.useState(false);
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? 'underline' : 'none';
  };

  return (
    <div>
      <button
        onClick={() => setOpen(!isOpen)}
        className={`hamburger-button ${isOpen ? "open" : "close"}`}
      />
      <div className={`wrap_menu_content ${isOpen ? "open" : "close"}`}>
        <div className="menu_list">
          <Link style={{ textDecoration: 'none' }} to='/' onClick={() => setOpen(false)}>
            <li style={{ textDecoration: isActive('/') }}>STORE</li>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/about' onClick={() => setOpen(false)}>
            <li style={{ textDecoration: isActive('/about') }}>ABOUT US</li>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/introduce' onClick={() => setOpen(false)}>
            <li style={{ textDecoration: isActive('/introduce') }}>INTRODUCING</li>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/activities' onClick={() => setOpen(false)}>
            <li style={{ textDecoration: isActive('/activities') }}>SOCIAL ACTIVITIES</li>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/register' onClick={() => setOpen(false)}>
            <li style={{ textDecoration: isActive('/register') }}>REGISTER</li>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/help' onClick={() => setOpen(false)}>
            <li style={{ textDecoration: isActive('/help') }}>Q&A</li>
          </Link>
          <hr />
          {localStorage.getItem('auth-token')
            ? <li className='logbtn' onClick={() => {
                localStorage.removeItem('auth-token');
                window.location.replace('/DOGFD');
                setOpen(false);
              }}>Logout</li>
            : <Link style={{ textDecoration: 'none' }} to='/login' onClick={() => setOpen(false)}>
                <li style={{ textDecoration: isActive('/login') }} className='logbtn'>Login</li>
              </Link>
          }
        </div>
       
      </div>
    </div>
  );
};

export default Panel;
