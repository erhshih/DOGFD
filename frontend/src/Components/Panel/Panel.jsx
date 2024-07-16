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
          <Link style={{ textDecoration: 'none' }} to='/'>
            <li style={{ textDecoration: isActive('/') }}>STORE</li>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/about'>
            <li style={{ textDecoration: isActive('/about') }}>ABOUT US</li>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/knowledge'>
            <li style={{ textDecoration: isActive('/knowledge') }}>DOGS KNOWLEDGE</li>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/activities'>
            <li style={{ textDecoration: isActive('/activities') }}>SOCIAL ACTIVITIES</li>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/help'>
            <li style={{ textDecoration: isActive('/help') }}>HELP</li>
          </Link>
        </div>
        {localStorage.getItem('auth-token')
        ?<button className='logbtn' onClick={ ()=>{localStorage.removeItem('auth-token'); window.location.replace('/DOGFD')}}>Logout</button>
        :<Link to='/login'><button  className='logbtn'>Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Panel;
