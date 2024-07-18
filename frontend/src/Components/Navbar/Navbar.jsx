import React, { useState, useContext, useRef } from 'react'
import Panel from '../Panel/Panel'
import './Navbar.scss'
import { Link, useLocation } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.svg'


import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {

  const location = useLocation();
  const [menu, setMenu] = useState("");
  const isActive = (path) => {
    return location.pathname === path ? 'underline' : 'none';
  };
  const {getTotalCartItems} = useContext(ShopContext)
  const menuRef = useRef()
  const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }
  return (<>
    <div className='navbar'>
      <Link style={{textDecoration: 'none'}} to='/'>
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>DOGFD</p>
        </div>  
      </Link>
      <img className= 'nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: 'none' }} to='/'>
            Shop
          </Link>
          {location.pathname === '/' && <hr />}
        </li>
        <li onClick={() => setMenu("foods")}>
          <Link style={{ textDecoration: 'none' }} to='/foods'>
            Foods
          </Link>
          {location.pathname === '/foods' && <hr />}
        </li>
        <li onClick={() => setMenu("toys")}>
          <Link style={{ textDecoration: 'none' }} to='/toys'>
            Toys
          </Link>
          {location.pathname === '/toys' && <hr />}
        </li>
        <li onClick={() => setMenu("health")}>
          <Link style={{ textDecoration: 'none' }} to='/health'>
            Health
          </Link>
          {location.pathname === '/health' && <hr />}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/cart' className='cart'>
          <img src={cart_icon} alt="" />
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </Link>
        
        <Panel></Panel>
      </div>

    </div>
    </>)
}

export default Navbar
