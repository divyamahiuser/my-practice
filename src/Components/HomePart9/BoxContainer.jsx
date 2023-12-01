import React from 'react'

export default function BoxContainer({ img, heading, para, width }) {
  return (
    <div className='box-container'>
      <div className='figure'>
      <img width={width} className='boxcontainer-img' src={img} alt={heading} />
      </div>
      <div>
        <h4 className='boxcontainer-h4'>{heading}</h4>
        <p className='paragraph boxcontainer-p'>{para}</p>
      </div>
    </div>
  )
}

// style={{minHeight: {minHeight}, height: "auto"}}          , minHeight