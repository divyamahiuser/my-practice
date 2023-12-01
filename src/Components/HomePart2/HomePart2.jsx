import React from 'react';
import './HomePart2.css';
import '../HomePart1/HomePart1.css';
import imgsBox1 from '../Assets/box1.png';
import imgBox2 from '../Assets/box2.png'
import '../App.css';
import '../Responsive.css';

export default function HomePart2() {
  return (
    <div>
      <h2 className='h2-we-have'>We Have Got Featured By <a className='h2-a' style={{color: '#3C5A9A'}} href='#400+'>400+ Digital Media </a><br />
 Channels Across <a className='h2-a' style={{color: '#50a2ff'}} href='#usa'>USA</a> And <a className='h2-a' style={{color: '#50a2ff'}} href='#uk'>UK</a></h2>
      <div className='div-p'>
      <p className='paragraph second'>Poulima Infotech is an ISO 9001:2015 certified company and we dedicate our expertise to Quality management. We are officially recognized by the Department for Promotion of Industry and Internal Trade (DPIIT). We provide top-of-the-line mobile app development expertise, from developing custom Android and iOS apps to building responsive web apps. Our mobile app development firm has been globally acclaimed for the unique mobile app development trends that we follow. We have got featured by 400+ NBC News, FOX News, CBS News, and ABC News digital media network across USA and UK.</p>
      </div>
      <div className='flexwrap image-boxes'>
        <img className='left-box' src={imgsBox1} alt="left box" />
        <img className='right-box' src={imgBox2} alt="right box" />
      </div>
    </div>
  )
}
