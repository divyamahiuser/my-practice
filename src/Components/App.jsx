import React, { useEffect, useRef, useState } from 'react'
import ContactInfo from './ContactInfo/ContactInfo'
import './App.css'
import './Header/Header.css'
import './Responsive.css'
import MainLogo from './Assets/color-logo-1.svg';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'
import Home from './Home'
import Portfolio from './Portfolio';
import Company from './Company';
import WhiteLogo from './Assets/white-logo-1.svg';
import AboutUs from './AboutUs';
import Services from './Services';
import ContactUs from './ContactUs';
import IndiaFlag from './Assets/1f1ee-1f1f3.svg';
import UsFlag from './Assets/1f1fa-1f1f8-us.svg';

export default function App() {

  const [isHeader, setIsHeader] = useState(false)

  const aboveContainerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= aboveContainerRef.current.clientHeight) {
        setIsHeader(true);
      } else {
        setIsHeader(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };

  })

  return (
    <div>
      <BrowserRouter>
      <ContactInfo Forwardref={aboveContainerRef} />

      {/* Header Container */}
      <div className='parent-header-container'>  
      <div className={isHeader ? 'center header-container-fixed' : 'center header-container'}>
        
      {/* left icon */}
      <div className="logo">
        <img className='logoImg' src={MainLogo} alt="Main Logo" />
      </div> 

      {/* center links */}
      <div className='linksorimg'>
      <ul className='navbar'>
      <NavLink to='/' className='navlink-list home-navLink'>Home</NavLink>
      <li className='services-list'><span className='services'>Services <i className="fa fa-angle-down"></i></span></li>
      <NavLink to='/portfolio' className='navlink-list'>Portfolio</NavLink>
      <NavLink to='/company' className='navlink-list'>Company <i className="fa fa-angle-down"></i></NavLink>
      </ul> 
      {/* or */}
      <button className='responsivenavbarbtn'>
        <span className='responsivenavbarbtn-spanlines'></span>
        <span className='responsivenavbarbtn-spanlines'></span>
        <span className='responsivenavbarbtn-spanlines'></span>
      </button>
      </div>

      {/* right btn */}
      <div className='headerrightbtn'>
      <div className='hire-dedicatedTeam-btn'>
        <a href='https://www.poulimainfo.tech/#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjU0NjM2IiwidG9nZ2xlIjpmYWxzZX0%3D'>Hire Dedicated Team</a>
      </div>
      </div>
      
      </div>
      </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/company' element={<Company />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>

          {/* Footer Container */}
        <div className="footer-container">
        <svg style={{margin: "0 auto"}} width="1349" height="630.4" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* <!-- Defining a linear gradient --> */}
            <linearGradient id="myGradienttwo" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:"#30087f", stopOpacity:"1"}} />
              <stop offset="100%" style={{stopColor:"#0d54c2", stopOpacity:"1"}} />
            </linearGradient>
            </defs>
          <path d="M 0 50 Q 150 25, 370 70 T 770 60 T 1070 30 T 1370 70 V630.4 H0 Z" fill="url(#myGradienttwo)" />
        </svg>

        <div className="footertext-container">
          <div className='footertext-top'>
          <div className="firstfooter">
            <Link to='/'><img className='firstfooter-img' src={WhiteLogo} alt="white logo" /></Link>
            <p className='firstfooter-para'>We are an ISO 9001:2015 certified Company and also officially recognized by the Department for Promotion of Industry and Internal Trade (DPIIT). We provide IT solutions to small-scale businesses to large enterprises.</p>
          </div>
          <div className="secondfooter">
            <h6 style={{color: "white"}} className='h6 quicklinks'>Quick Links</h6>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/aboutus'>About Us</Link>
            <Link className='link' to='/services'>Services</Link>
            <Link className='link' to='/contactus'>Contact Us</Link>
            <Link className='link secondfooter-blogs' to='/blogs'>Blog</Link>
          </div>
          <div className="thirdfooter">
            <h6 style={{color: "white"}} className='h6 thirdfooter-contactus'>Contact Us</h6>
            <div>
              <a target="_blank" rel="noopener noreferrer" className='a-tag' href='contact@poulimainfo.tech'>
                  <span className='thirdfooter-email'>contact@poulimainfo.tech</span>
              </a>
              <br />
              <a target="_blank" rel="noopener noreferrer" className='a-tag' href='tel:+133451709244'>
                  <img src={UsFlag} alt="USA icon" className='thirdfooter-flagimages'/>
                  <span className='thirdfooter-usflag'>+1 (334) 517-0924</span>
              </a>
              <br />
              <a target="_blank" rel="noopener noreferrer" className='a-tag' href='tel:+917032851874'>
                  <img src={IndiaFlag} alt="indiaFlag icon" className='thirdfooter-flagimages'/>
                  <span className='thirdfooter-indianumb'>+91 (630)-411-6234</span>
              </a>
            </div>
          </div>
          <div className="fourthfooter">
            <h6 style={{color: "white"}} className='h6 thirdfooter-contactus'>Subscribe</h6>
            <p className='fourthfooter-para'>Follow our newsletter to stay updated about us.</p>
            <button className='fourthfooter-btn'>Email Address</button>
          </div>
          </div>
          <div className="footertext-bottom">
            <div className="footericons  center contact-info-right ">
              <a target="_blank" rel="noopener noreferrer" className='a-tag' href="https://www.facebook.com/      poulimainfotechpvtltd/">
                  <div className='center facebook icon-background'><i className="fa fa-facebook-f"></i></div>
              </a>
              <a target="_blank" rel="noopener noreferrer" className='a-tag' href="https://www.linkedin.com/company/      poulima-infotech-pvt-ltd/">
                  <div className='center linkedin icon-background'><i className="fa fa-linkedin"></i></div>
              </a>
              <a target="_blank" rel="noopener noreferrer" className='a-tag' href="https://www.behance.net/poulimapvtltd">
                  <div className='center behance icon-background'><i className="fa fa-behance"></i></div>
              </a>
              <a target="_blank" rel="noopener noreferrer" className='a-tag' href="https://www.instagram.com/poulimainfotech/">
                  <div className='center instagram icon-background'><i className="fa fa-instagram"></i></div>
              </a>
            </div>
            <div className="footerbottom-righttext">
              <p>@2023 Poulima Infotech Private Limited. All Rights Reserved.</p>
            </div>
          </div>
        </div>
        </div>
      </BrowserRouter>
      
    </div>
  )
}
