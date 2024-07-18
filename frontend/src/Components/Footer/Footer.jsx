import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import footer_logo_white from '../Assets/logo_white.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo_white} alt="" />
            <p>DOGFD</p>
        </div>

        <ul className='footer-links'>
          <Link to='/'>
            <li>STORE</li>
          </Link>
          <Link to='/about'>
            <li>ABOUT US</li>
          </Link>
          <Link to='/introduce'>
            <li>INTRODUCING DOGS</li>
          </Link>
          <Link to='/activities'>
            <li>SOCIAL ACTIVITIES</li>
          </Link>
          <Link to='/help'>
            <li>HELP</li>
          </Link>
          
        </ul>
        <div className="footer-copyright">
            <hr />
            <a href="https://www.freepik.com/">Photo disign by Freepik</a>
        </div>
    </div>
  )
}

export default Footer
