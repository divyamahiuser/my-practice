import React from 'react'
import './HomePart4.css'
import '../HomePart1/HomePart1.css';

export default function TextBox(props) {
  return (
    <div className='second-div'>
      <div className='textbox-1'>
        <a  className='image-link' target="_blank" rel="noopener noreferrer" href="https://www.poulimainfo.tech/custom-software-development-services/">
            <img className='image' src={props.img1} alt={props.heading1} />
        </a>
        <div className='head-para'>
          <h3 className='h3-props-heading'><a style={{color: "black", textDecoration: "none"}} target="_blank"   rel="noopener noreferrer" href='https://www.poulimainfo.tech/custom-software-development-services/'>{props.heading1}</a></h3>
          <p className='four'>{props.para1}</p>
        </div>
      </div>
      <div className='box-gap'></div>
      <div className='textbox-2'>
        <a  className='image-link' target="_blank" rel="noopener noreferrer" href="https://www.poulimainfo.tech/custom-software-development-services/">
            <img className='image' src={props.img2} alt={props.heading2} />
        </a>
        <div className='head-para'>
          <h3 className='h3-props-heading'><a style={{color: "black", textDecoration: "none"}} target="_blank" rel="noopener noreferrer" href='https://www.poulimainfo.tech/custom-software-development-services/'>{props.heading2}</a></h3>
          <p className='four'>{props.para2}</p>
        </div>
      </div>
    </div>
  )
}
