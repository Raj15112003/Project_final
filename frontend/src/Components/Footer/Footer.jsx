import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
           <Link to='/'><img src={footer_logo} alt="" /></Link> 
            <Link to='/' style={{textDecoration: 'none'}}><p>BOOSHA</p></Link>
        </div>
        <ul className="footer-links">
            <li><Link style={{textDecoration: 'none'}} to="/company">Company</Link></li>
            <li><Link style={{textDecoration: 'none'}} to="/productall">Product</Link></li>
            <li><Link style={{textDecoration: 'none'}} to="/offices">Office</Link></li>
            <li><Link style={{textDecoration: 'none'}} to="/about">About</Link></li>
            <li><Link style={{textDecoration: 'none'}} to="/contact">Contact</Link></li>
            
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <a href="https://www.instagram.com/nova_raj_15/?igsh=bWRkamg2a2lzOGE0" target='_blank' rel="noreferrer noopener"><img src={instagram_icon} alt="" /></a>
            </div>
            <div className="footer-icon-container">
                <a href="https://in.pinterest.com/novaraj0102/" target='_blank' rel="noreferrer noopener"><img src={pintester_icon} alt="" /></a>
            </div>
            <div className="footer-icon-container">
                <a href="https://wa.me/qr/3VCZHMZLH4GDK1" target='_blank' rel="noreferrer noopener"><img src={whatsapp_icon} alt="" /></a>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer