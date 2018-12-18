import React from 'react';
import './Body.css';

export const Body =({children})=>{
  return(
    <div className="Body">
      <div className="Body__item">{children}</div>
    </div>
  )
}