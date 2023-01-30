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
      color: "cyan",
      value: "#0ff",
    },
    {
        id: 5,
      color: "cyan",
      value: "#0ff",
    },
    {
        id: 6,
      color: "magenta",
      value: "#f0f",
    },
    {
        id: 7,
      color: "yellow",
      value: "#ff0",
    },
    {
        id: 8,
      color: "yellow",
      value: "#ff0",
    },
    {
        id: 9,
      color: "yellow",
      value: "#ff0",
    },
    {
        id: 10,
      color: "black",
      value: "#000",
    },
    {
        id: 11,
      color: "black",
      value: "#000",
    },
    {
        id: 12,
      color: "black",
      value: "#000",
    },
    {
        id: 13,
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
     //function for deleting item

     const DeleteItem = (id) =>{

      const removeItem = data.filter(item => item.id != id);
      change(removeItem);
     }

  return (
    <div className="main">
      <header>
      <h1>we are starting harder.</h1>
      <h2>value: {count}</h2>
      <div className="button-div">
      <button className="butt" onClick={increase} >Increase me</button> 
      <button className="butt" onClick={decrease}>decrease me</button>
      </div>
      <div>
        <Props data = {data.filter(item => item.color == 'yellow')} color = "yellow" DeleteFunc = {DeleteItem}/>
        <Props data = {data.filter(item => item.color == 'black')} color = "black" DeleteFunc = {DeleteItem}/>
        <Props data = {data.filter(item => item.color !== 'black' || 'yellow')} color = "All" DeleteFunc = {DeleteItem} />
      </div>
      </header>
    </div>
  );
} 