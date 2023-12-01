import React from 'react';
import './HomePart9.css';
import '../App.css';
import BoxContainer from './BoxContainer';
import ReactIcon from '../Assets/React-icon.svg.png';
import AngularIcon from '../Assets/AngularJS_logo.svg-1.png';
import Flutter from '../Assets/flutterio-icon.svg';
import ExpressIcon from '../Assets/Expressjs-logo.png';
import NodeIcon from '../Assets/Nodejs.png';
import PythonIcon from '../Assets/Python-logo.png';
import DjangoIcon from '../Assets/django-logo-e1645689482554.png';

export default function HomePart9() {
  return (
    <div className='homepart9-container'>
        <svg className='homepart9-svg' width="1170" height="1500" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="Gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor:"#f5f9ff", stopOpacity:"1"}} />
              <stop offset="100%" style={{stopColor:"white", stopOpacity:"1"}} />
            </linearGradient>
            </defs>
          <circle cx="0" cy="700" r="700" fill="url(#Gradient)"></circle>
        </svg>
        <div className="homepart9-content">
          <div className="homepart9-mainheadings">
          <h6 className='h6 homepart9-h6'>Our Technology</h6>
          <h2 className='homepart9-h2'>We Use A Variety Of Technologies In Our Software Development Services.</h2>
          </div>
          <div className="homepart9-box-container">
            <div className="homepart9-box1 Firstbox">
            <BoxContainer 
              img = {ReactIcon}
              heading = "React.Js"
              width= "112.27px"
              // minHeight = "252px"
              para = "In this fast-paced world of social media and online shopping, it's more important than ever to be able to create a website that is not only visually appealing, but also intuitive. With Reactjs, you'll be able to build interactive and engaging CMS websites for the modern era. We have an expert team of ReactJS developers who are well-versed with React concepts and JavaScript to build cross-browser applications."
            />
            <BoxContainer 
              img = {AngularIcon}
              width= "112.27px"
              // minHeight = "168px"
              heading = "Angular.Js"
              para = "Our AngularJS developers are highly experienced and skilled professionals who can help you with your single page application development needs. Whether you want to build a new single page application from scratch or need to add a few new features to an existing one, we can help you."
            />
            </div>
            <div className="homepart9-box1 Firstbox">
            <BoxContainer 
              img = {Flutter}
              heading = "Flutter"
              width = "64px"
              // minHeight = "252px"
              para = "Flutter is Google's open-source mobile app SDK for crafting high-quality native experiences across iOS, Android and the web. Our design and development team is experienced in developing apps using Flutter to create beautiful UIs that feel at home on each device. With a team of expert developers, designers and project managers, we help bridge the gap between design and development on all platforms."
            />
            <BoxContainer 
              img = {ExpressIcon}
              heading = "Express.Js"
              width= "112.27px"
              // minHeight = "196px"
              para = "We are one of the fastest growing JavaScript development service providers, delivering highly scalable and user-friendly backend software development services. The software development solutions that we offer comprise of the best features such as scalability, high availability, and long-term maintenance for the projects."
            />
            </div>
            <div className="homepart9-box1 HSecondbox">
            <BoxContainer 
              img = {ReactIcon}
              heading = "React Native"
              width= "112.27px"
              // minHeight = "196px"
              para = "Building mobile applications is a time-consuming, expensive, and risky process. Hiring React Native app developers from our company can help you reduce the need for separate native developers.Our team of highly skilled React Native app developers will help you provide custom software development solutions."
            />
            <BoxContainer 
              img = {NodeIcon}
              heading = "Node.Js"
              width= "112.27px"
              // minHeight = "196px"
              para = "Our Node.js software development services offer expert developers with years of experience in developing high-quality software solutions that are scalable, fast, and secure. We can help you develop your own project or provide consulting services to expedite your team's workflow and keep you ahead of the competition!"
            />
            </div>
            <div className="homepart9-box1 Thirdbox">
            <BoxContainer 
              img = {PythonIcon}
              heading = "Python"
              width= "112.27px"
              // minHeight = "336px"
              para = "With the help of our tailor made software development services, we help new and existing companies to build a sustainable software engineering team. All our developers are professional, experienced, and well-trained. We specialise in back-end software development for Python-based web applications. We offer a wide range of services, including custom web development, maintenance and support, and technical consulting. We guarantee that your project will be delivered on time and to the highest quality standards."
            />
            <BoxContainer 
              img = {DjangoIcon}
              heading = "Django"
              width= "112.27px"
              // minHeight = "280px"
              para = "Django is one of the most popular frameworks for building websites, especially for projects that need a lot of features, like social networking sites or e-commerce stores. The framework is designed to make the process of building web applications easier and faster for the programmer. Django can be used as a stand-alone website, as well as part of many different systems with other components such as Django Channels and Django REST Framework."
            />
            </div>
          </div>
        </div>
    </div>
  )
}

// #f5f9ff