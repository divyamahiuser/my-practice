import React from 'react';
import './HomePart8.css'
import Ban2 from '../Assets/Ban02.png';
import Simpletoget from '../Assets/Img01.png';
import '../HomePart5/HomePart5.css';

export default function HomePart8() {
  return (
    <div className='homepart8'>
        <img className='Ban2img' src={Ban2} alt="Ban 2" />
      <svg style={{marginTop: "-170px", zIndex: "-1", position: "relative", padding: "0px 15px"}} width="1140" height="1140" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* <!-- Defining a linear gradient --> */}
            <linearGradient id="myGradient" x1="0%" y1="50%" x2="0%" y2="50%">
              <stop offset="0%" style={{stopColor:"#f2fbfc", stopOpacity:"1"}} />
              <stop offset="100%" style={{stopColor:"white", stopOpacity:"1"}} />
            </linearGradient>
            </defs>
          <path d="M 0 50 Q 150 0, 370 70 T 800 40 T 1180 90 V1000 H0 Z" fill="url(#myGradient)" />
        </svg>
        <div className="simpletogetStarted">
            <div className="simpletoget-left">
                <div className="simpletoget-circle movingImage"></div>
                <img className='simpletoget-img' src={Simpletoget} alt="simple to get left" />
                <div className="simpletoget-green-circle movingImage"></div>
                <div className='movingImage'>
                  <svg className='triangle-svg-two' width="26" height="30" viewBox="0 0 17 35" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="10,0 0,20 20,20" fill="transparent" stroke="#4ed4f1" strokeWidth="3" />
                 </svg>
                </div>
            </div>
            <div className='simpletoget-right'>
              <h6 className='h6 simpletoget-h6'>Simple To Get Started</h6>
              <h3 className="h3 simpletoget-h3">Get A Free Consultation <br /><span style={{color: "#104CBA"}}>Contact Us</span></h3>
              <div style={{width: "509.98px", paddingBottom: "30px"}} className='paragraph'><p className="simpletoget-green-circle-two movingImage"></p>Poulima Infotech specializes in custom software development, consulting, and product development. We know that the key to success in the software industry is to be able to create completely new and innovative software development services for our clients.</div>
            </div>
            
        </div>
        <div className="simpletoget-call-email">
              <div className='call-left'>
                <div>
                <div className="call-circle">
                  {/* <img className='call-img' src={call} alt="call" /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 158 158" fill="none"><circle cx="79" cy="79" r="79" fill="url(#paint_2_linear)" fillOpacity="0.3"></circle><circle cx="79" cy="79" r="75" fill="white"></circle><path d="M95.1835 116C92.7948 116 90.4263 115.578 88.1103 114.736C77.9071 111.03 68.4364 104.993 60.7216 97.2783C53.0068 89.5637 46.97 80.0928 43.2637 69.8896C42.0726 66.6106 41.7211 63.2259 42.2193 59.8289C42.686 56.6471 43.9185 53.5581 45.7838 50.896C47.6572 48.2221 50.1549 45.9981 53.0067 44.4646C56.0478 42.8293 59.3671 42 62.8727 42C63.963 42 64.9053 42.7618 65.1338 43.8278L68.7634 60.766C68.9277 61.533 68.692 62.3311 68.1375 62.8858L61.9355 69.0877C67.7861 80.7199 77.2797 90.2135 88.912 96.0642L95.1139 89.8622C95.6685 89.3076 96.4668 89.0722 97.2336 89.2362L114.172 92.8658C115.238 93.0943 116 94.0366 116 95.1269C116 98.6325 115.17 101.952 113.535 104.993C112.001 107.845 109.777 110.343 107.104 112.216C104.442 114.081 101.353 115.314 98.1706 115.78C97.1735 115.927 96.1766 116 95.1835 116ZM61.0251 46.726C56.401 47.2364 52.2968 49.6601 49.5713 53.55C46.5065 57.9241 45.7918 63.304 47.6106 68.3107C54.7362 87.9265 70.0734 103.264 89.6892 110.389C94.6957 112.208 100.076 111.494 104.45 108.429C108.34 105.703 110.763 101.599 111.274 96.9748L97.4948 94.0222L91.0177 100.499C90.3285 101.188 89.2812 101.372 88.3994 100.957C74.642 94.4939 63.506 83.3579 57.0429 69.6006C56.6285 68.7185 56.8115 67.6713 57.5007 66.9822L63.9778 60.5052L61.0251 46.726Z" fill="#FF6733"></path><defs><linearGradient id="paint_2_linear" x1="79" y1="3.5" x2="79" y2="158" gradientUnits="userSpaceOnUse"><stop stopColor="#F8F7F7"></stop><stop offset="1" stopColor="#ACAAAA"></stop></linearGradient></defs></svg>
                  </div>
                </div>
                <div>
                <p className='paragraph'><a className='say-hello' href='tel:+91(630)411-6234'>Call For Active Now</a></p>
                <h6 style={{fontWeight: "500", fontSize: "17px"}} className='h6'>+91 (630)-411-6234</h6>
                </div>
              </div>
              <div className='email-right'>
                <div>
                <div className="call-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 158 158" fill="none"><circle cx="79" cy="79" r="79" fill="url(#paint_env_linear)" fillOpacity="0.3"></circle><circle cx="79" cy="79" r="75" fill="white"></circle><path d="M106.199 56H51.8008C48.6022 56 46 58.6022 46 61.8008V95.4172C46 98.6158 48.6022 101.218 51.8008 101.218H106.199C109.398 101.218 112 98.6158 112 95.4172V61.8008C112 58.6022 109.398 56 106.199 56ZM105.442 59.8672L104.668 60.5118L81.3015 79.9691C79.9678 81.0795 78.0319 81.0795 76.6985 79.9691L53.3321 60.5118L52.5578 59.8672H105.442ZM49.8672 62.659L68.9056 78.5123L49.8672 91.1829V62.659ZM106.199 97.3508H51.8008C50.8665 97.3508 50.085 96.6846 49.906 95.8025L72.0063 81.0942L74.224 82.9409C75.6077 84.0931 77.304 84.6691 79.0001 84.6691C80.6963 84.6691 82.3924 84.0931 83.7762 82.9409L85.9939 81.0942L108.094 95.8024C107.915 96.6847 107.134 97.3508 106.199 97.3508ZM108.133 91.1829L89.0944 78.5124L108.133 62.659V91.1829Z" fill="#FF6733"></path><defs><linearGradient id="paint_env_linear" x1="79" y1="3.5" x2="79" y2="158" gradientUnits="userSpaceOnUse"><stop stopColor="#F8F7F7"></stop><stop offset="1" stopColor="#ACAAAA"></stop></linearGradient></defs></svg>
                </div>
                
                </div>
                <div>
                <p className='paragraph'><a className='say-hello' href='tel:+91(630)411-6234'>Say Hello</a></p>
                <h6 style={{fontWeight: "400", fontSize: "16px"}} className='h6'>contact@poulimainfo.tech</h6>
                </div> 
              </div>
              </div>
              <div className="simpletoget-green-border-circle movingImage"></div>
    </div>
  )
}
