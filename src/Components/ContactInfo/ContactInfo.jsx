import React from 'react';
import '../App.css';
import './ContactInfo.css';
import '../Responsive.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import IndiaFlag from '../Assets/1f1ee-1f1f3.svg';
import UsFlag from '../Assets/1f1fa-1f1f8-us.svg';


export default function ContactInfo({ Forwardref }) {
  return (
    <div ref={Forwardref} className='contact-info-container'>

      {/* Left side of the container */}
      <div className='contact-info-left'>

        {/* email and mobile numbers with links */}
        <a target="_blank" rel="noopener noreferrer" className='a-tag' href='contact@poulimainfo.tech'>
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
            <span className='contact-text'>contact@poulimainfo.tech</span>
        </a>
        <a target="_blank" rel="noopener noreferrer" className='a-tag' href='tel:+917032851874'>
            <img src={IndiaFlag} alt="indiaFlag icon" className='flag-images' />
            <span className='contact-text'>+91 (630)-411-6234</span>
        </a>
        <a target="_blank" rel="noopener noreferrer" className='a-tag' href='tel:+133451709244'>
            <img src={UsFlag} alt="indiaFlag icon" className='flag-images' />
            <span className='contact-text'>+1 (334) 517-0924</span>
        </a>
      </div>

      {/* Right Side of the container */}
      <div className="center contact-info-right">
      {/* Facebook, Linkedin, Instagram, Behance icons with Links */}
        <a target="_blank" rel="noopener noreferrer" className='a-tag' href="https://www.facebook.com/poulimainfotechpvtltd/">
            <div className='center facebook icon-background'><i className="fa fa-facebook-f"></i></div>
        </a>
        <a target="_blank" rel="noopener noreferrer" className='a-tag' href="https://www.linkedin.com/company/poulima-infotech-pvt-ltd/">
            <div className='center linkedin icon-background'><i className="fa fa-linkedin"></i></div>
        </a>
        <a target="_blank" rel="noopener noreferrer" className='a-tag' href="https://www.behance.net/poulimapvtltd">
            <div className='center behance icon-background'><i className="fa fa-behance"></i></div>
        </a>
        <a target="_blank" rel="noopener noreferrer" className='a-tag' href="https://www.instagram.com/poulimainfotech/">
            <div className='center instagram icon-background'><i className="fa fa-instagram"></i></div>
        </a>
      </div>
      </div>
  )
}
