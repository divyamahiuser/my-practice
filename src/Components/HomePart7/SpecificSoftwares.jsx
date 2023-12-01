import React from 'react';
import '../App.css'

export default function SpecificSoftwares({ Img, heading, para, alt}) {
  return (
    <div className='specificSoftware-div'>
      <img className='specificSoftware-images' src={Img} alt={alt} />
      <h6 className='h6 h6-sass-products'>{heading}</h6>
      <p style={{textAlign: "justify"}} className='paragraph'>{para}</p>
    </div>
  )
}
