import React, { useState, useEffect } from 'react';
import Ser05 from '../Assets/Ser05.webp';
import './HomePart1.css';
import '../App.css';
import '../Responsive.css';
import '../Animation.css';

export default function HomePart1() {

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
    <div className=' Container'>
      <div className="left-Container">
        <h6 className='h6 customized'>Customized Software Solutions</h6>
        <h1>#1 Software Development Company</h1>
        <p className='paragraph'>We help companies do more with less. We are the leading Software development services providing company. We provide IT solutions to small-scale businesses to large enterprises. With our help, you can manage your custom software development better and focus on what matters most to you.</p>
        <button className='orange-btn'>Start Project</button>
      </div>
      <div className="right-container">
        <div className='img-icon'>
        <img className={animate ? 'ser01' : ""} src={Ser05} alt="ser05" />
        </div>
      </div>
     </div>
  )
}
