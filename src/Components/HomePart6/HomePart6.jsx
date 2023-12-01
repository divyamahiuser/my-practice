import React from 'react';
import '../App.css'
import './HomePart6.css'
import DownBoxes from './DownBoxes';
import SaasProduct from '../Assets/Group-49.svg';
import CloudAppDevelopment from '../Assets/Group-50.svg';
import WebAppDevelopment from '../Assets/Group-52.svg';
import MobileAppDevelopment from '../Assets/Group-51.svg';
import ProgressiveWebApps from '../Assets/Group-53.svg';
import TestingQA from '../Assets/Group-108.svg';

export default function HomePart6() {
  return (
    <div>
        <svg style={{margin: "0 auto"}} width="1170" height="1500" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* <!-- Defining a linear gradient --> */}
            <linearGradient id="myGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor:"#f2fbfc", stopOpacity:"1"}} />
              <stop offset="100%" style={{stopColor:"white", stopOpacity:"1"}} />
            </linearGradient>
            </defs>
          <path d="M 0 50 Q 150 0, 370 90 T 800 60 T 1180 50 V1000 H0 Z" fill="url(#myGradient)" />
        </svg>
        <div className='featured-services'>
          <div className="top">
            <h6 style={{paddingBottom: "13px"}} className='h6'>Featured Services</h6>
            <h2 className='h2'>Software Development Services We Aim For</h2>
          </div>
          <div className="featured-services-down">
            <div className="child-down">
            <DownBoxes 
              img = {SaasProduct}
              heading = "SAAS Products"
              para = "The internet is a noisy space. You need to sell your product. It needs to be seen. Our software development services got you covered. Our team of qualified software developers will help you take your idea from concept to reality."
              alt = "SAAS Products"
            />
            <DownBoxes 
              img = {WebAppDevelopment}
              heading = "Web App Development"
              para = "We offer everything from idea conception and design to deployment. Give us your business requirements and we'll tell you how long it will take, how much it will cost, and any risks involved."
              alt = "Web App Development"
            />
            <DownBoxes 
              img = {ProgressiveWebApps}
              heading = "Progressive Web Apps"
              para = "These are the web applications that offer the ability to load quickly, add functionality and features of a native app, and provide a more engaging experience for your users. Our software development team can help you build a PWA for your e-commerce site, your travel booking website, or any other business. We offer a free consultation to see if PWA is right for you."
              alt = "Progressive Web Apps"
            />
            </div>
            <div className="child-down">
            <DownBoxes 
              img = {CloudAppDevelopment}
              heading = "Cloud App Development"
              para = "At Poulima Infotech, we aim to make your work easier by creating your own app without any programming skills. You can get up and running in minutes with a drag-and-drop editor, templates and hundreds of built-in apps to customize your app."
              alt = "Cloud App Development"
            />
            <DownBoxes 
              img = {MobileAppDevelopment}
              heading = "Mobile App Development"
              para = "We are a company dedicated to providing development and support for Mobile app developers. We are not just a software-development company, but a team of experts with backgrounds in business, design, engineering and more."
              alt = "Mobile App Development"
            />
            <DownBoxes 
              img = {TestingQA}
              heading = "Testing & QA"
              para = "At Poulima Infotech, we aim to make your work easier by creating your own app without any programming skills. You can get up and running in minutes with a drag-and-drop editor, templates and hundreds of built-in apps to customize your app."
              alt = "Testing & QA"
            />
            </div>
            <div className="have-a-project orange-project-two">
                <div className="left-have-a-project orange-left-have-a-project-two"> 
                  <h3 className='h3-have-a-project'>Have A Project In Mind? Let's Get To Work</h3>
                  <p className="p-have-a-project">At Poulima Infotech, We deliver high-quality Custom Software Development solutions that are tailored to your needs.</p>
                  <div className='redCircle movingImage'></div>
                </div>
                <div className="right-have-a-project">
                  <button style={{color: "#FF3834", background: "none", backgroundColor: "white"}} className='orange-btn'>Start a Project</button>
                </div>
            </div>
          </div>  
        </div>
    </div>
  )
}
