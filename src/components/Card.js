import React from 'react'
import './Home.css'
import { useState } from 'react';

export default function Card(props) {
  const rans=props.rans;
  const num= props.num;
  const ans=props.curans;
  const setHide=props.setHide;
  const [rand,setRand]=useState();
  const handleClick=(e)=>{
    
  }
  
 
  return (
    
    <>
      {/* if correct then this  */}
      <button className='card' data-tid="correct" value="c"  onClick={handleClick}>
       
        {ans}
      </button>
      
      {/* else this */}
        <button className='card' value='i'  onClick={handleClick}>
          
          {rand}
        </button>
      

    </>
    
    
  )
}
