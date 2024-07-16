import React from 'react'
import './Footer.scss'
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
            <li>STORE</li>
            <li>ABOUT US</li>
            <li>DOGS KNOWLEDGE</li>
            <li>SOCIAL ACTIVITIES</li>
            <li>HELP</li>
        </ul>
        <div className="footer-copyright">
            <hr />
            <a href="https://www.freepik.com/">Photo disign by Freepik</a>
        </div>
    </div>
  )
}

export default Footer
