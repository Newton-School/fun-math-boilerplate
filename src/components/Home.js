import React, { useEffect } from "react";
import "./Home.css";
import { useState } from "react";
import Card from "./Card";
export default function Home() {
  const [number, setNumber] = useState();
  const [number2, setNumber2] = useState();
  const [curans,setCurans]=useState();
  const [operator, setOperator] = useState("plus");
  const [rans ,setRans ]=useState();
  const [hide , setHide]=useState();
  const arr = ["plus", "sub", "mul", "div"];

  const handleClick = () => {
    
  };
  

  useEffect(() => {
    handleClick();
  }, []);

  // handleClick()
  return (
    <div>
      <div>
        <p>Fun math game</p>
      </div>
      <div className="in">
        <p data-tid="d">
          what is the result of 
        
        </p>
        <h3 data-tid="number">{number} </h3>
        
        <h3 data-tid="op">{operator}</h3>
        <h3 data-tid="number2"> {number2}  </h3>
        
      </div >
      <div className="pcard">
        
            <Card />
            <Card />
            <Card  />
            <Card  />

      </div>
        { !hide && 
          <p>correct ans or not </p>
        }
      
      <div>
        <button onClick={handleClick}>play again</button>
      </div>
    </div>
  );
}
