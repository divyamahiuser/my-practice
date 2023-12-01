import React, { useState, useEffect } from 'react';
import leftImg from '../Assets/Ban12.png';
import leftImgDown from '../Assets/Ban13.png';
import '../App.css';
import './HomePart5.css'

export default function HomePart5() {
  const [animate, setAnimate] = useState(false);
  
    useEffect(() => {
      // Add a delay if needed, then set the animate state to trigger the animation.
      const animationTimeout = setTimeout(() => {
        setAnimate(true);
      }, 1); // Add your desired delay in milliseconds
  
      // Cleanup the timeout to avoid memory leaks when the component unmounts
      return () => clearTimeout(animationTimeout);
    }, []);

  return (
    <div>
      <div className='flexwrap center main-con'>
      {/* left side image container */}
      <div className="leftImage">
        <img className={`movingImage ${animate ? 'leftImg' : ""}`} src={leftImg} alt="left side" />
        <img className='leftImgDown' src={leftImgDown} alt="left Img Down" />
      </div>

      {/* div tag between left side container and right side container */}
      <div className='left-div-right'></div>

       {/* right side text container */}
      <div className="righttext">
        <h6 className="h6 discover">Discover Our Company</h6>
        <h3 className="h3 h3-why-choose">Why Choose Poulima Infotech’s Software Development Services?</h3>
        <p className="p-why-choose">There are many software development companies that offer custom software development services in India. So why choose us? We, at Poulima Infotech, offer you a one-stop solution, with a team of expert developers specialising in React.js, React Native, Flutter, Nodejs, Express.js, Javascript, Python, and more. Our engineers work with you to build the best solution for your business. Our software development services offer secure and scalable platforms for your web and mobile application development.</p>

        <div className="rightText-inside">

          <div className="leftimgrighttext">

            {/* left side blue circle div */}
            <div className='rightText-leftcircle blue-circle'></div>

            {/* right side text div */}
            <div>
              <h6 className="h6 custom-1">Custom Software Web Development</h6>
              <p className="custom-1-p">As the number of websites continues to increase, custom software Web development is in high demand. We are a team of highly skilled software developers, who are passionate about building custom software web development. Our team is able to create solutions that are tailored to your needs, delivering results that are customized for you. We work fast and efficiently to build an effective solution for your customized business needs.</p>
            </div>
          </div>
    
          <div className="leftimgrighttext">

            {/* left side orange circle div */}
            <div className='rightText-leftcircle orange-circle'></div>

            {/* right side text div */}
            <div>
              <h6 className="h6 custom-1">Custom Mobile App Development</h6>
              <p className="custom-1-p">With the popularity of smartphones and tablets, mobile apps have become a popular  way to provide services to people on the go. When deciding how to develop a mobile app, it is important to consider which type of platform will work best for your needs. Our Custom mobile app development service  provides a way to easily create custom native applications for any mobile platform, Android, iOS, and  Windows Phone.</p>
            </div>
          </div>
          <button style={{marginTop: "0px"}} className='orange-btn'>Discover More</button> 
        </div>

      </div>
    </div>

    <div className='movingImage'>
    <svg className='triangle-svg' width="26" height="30" viewBox="0 0 17 35" xmlns="http://www.w3.org/2000/svg">
      <polygon points="10,0 0,20 20,20" fill="transparent" stroke="#4ed4f1" strokeWidth="3" />
    </svg>
    </div>

    <div className="have-a-project">
      <div className="left-have-a-project"> 
      <h3 className='h3-have-a-project'>Have A Project In Mind? Let's Get To Work</h3>
      <p className="p-have-a-project">Whether it’s a software development consulting, custom software development or Cloud applications, we have the right solution for your business. Contact us today to learn more about how we can help you succeed.</p>
      <div className='redCircle movingImage'></div>
      </div>
      <div className="right-have-a-project">
        <button style={{color: "#FF3834", background: "none", backgroundColor: "white"}} className='orange-btn'>Start a Project</button>
      </div>
    </div>
    </div>
  )
}
