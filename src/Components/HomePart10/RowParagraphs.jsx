import React, { useState } from 'react';
import './HomePart10.css';

export default function RowParagraphs({ quest, answ }) {
  
  const [rows, setRows] = useState(false)

  const firstRowHandleClick = () => {
    setRows(prevRows => !prevRows)
  }

  return (
      <div className='questions-firstrow'>
          <div onClick={firstRowHandleClick} className="questionscontainer-arrimgtext">
            {rows ? <i className=" leftarrow fa fa-caret-up"></i> : <i className="leftarrow fa fa-caret-right"></i>}
            <p className='question1stpara'>{quest}</p>
          </div>
          {rows && <div className='question2ndpara-div'>
          <p className='paragraph question2ndpara'>{answ}</p>
          </div>}
          </div>
  )
}
