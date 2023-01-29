import { useState } from 'react';
import Props from './Props';

export default function Main() {

   const [count, countState] = useState(0);
   //prop Data for rendering
const [data, change] = useState(
    [  
      {
        id: 0,
      color: "red",
      value: "#f00",
    },
    {
        id: 1,
      color: "green",
      value: "#0f0",
    },
    {
        id: 2,
      color: "blue",
      value: "#00f",
    },
    {
        id: 3,
      color: "cyan",
      value: "#0ff",
    },
    {
        id: 4,
      color: "magenta",
      value: "#f0f",
    },
    {
        id: 5,
      color: "yellow",
      value: "#ff0",
    },
    {
        id: 6,
      color: "black",
      value: "#000",
    },
  ]
  ) ;
    

   let increase =() => {
     countState(count + 1);
        console.log(count);
      }

      let decrease =() => { 
       countState(count - 1);
       console.log(count);
     }


  return (
    <div className="main">
      <h1>we are starting harder.</h1>
      <h2>value: {count}</h2>
      <div className="button-div">
      <button className="butt" onClick={increase} >Increase me</button> 
      <button className="butt" onClick={decrease}>decrease me</button>
      </div>
      <div>
        <Props data = {data}></Props>
      </div>
    </div>
  );
} 