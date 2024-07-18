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
            <li style={{ textDecoration: isActive('/introduce') }}>Introducing Dogs</li>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/activities' onClick={() => setOpen(false)}>
            <li style={{ textDecoration: isActive('/activities') }}>SOCIAL ACTIVITIES</li>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/register' onClick={() => setOpen(false)}>
            <li style={{ textDecoration: isActive('/register') }}>Register</li>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/help' onClick={() => setOpen(false)}>
            <li style={{ textDecoration: isActive('/help') }}>Q&A</li>
          </Link>
        </div>
        {localStorage.getItem('auth-token')
        ?<button className='logbtn' onClick={ ()=>{localStorage.removeItem('auth-token'); window.location.replace('/DOGFD'); setOpen(false);}}>Logout</button>
        :<Link to='/login' onClick={() => setOpen(false)}><button  className='logbtn'>Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Panel;
