import React from 'react';
import '../App.css';

export default function DownBoxes({ img, heading, para, alt}) {
  return (
    <div className='sass-product-div'>
      <img className='img-styling' src={img} alt={alt} />
      <h6 className='h6 h6-sass-products'>{heading}</h6>
      <p className='paragraph sass-p'>{para}</p>
    </div>
  )
}
