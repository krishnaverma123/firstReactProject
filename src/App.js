import React, { useState } from "react";
const App =() =>{

  const bgColor= 'purple';
  const[bg,setColor] =useState(bgColor);
  const[name, SetName] = useState('Click me')
  const ChangeColor= () =>{
  let newBg = "green";
  let newName ="Ouch !! 🥶 ";
  setColor(newBg);
  SetName(newName);
  
  }
  const ChangeColor2 =()=>{
   
    setColor('yellow');
  SetName('haha !! 😋');
  }
  return (
    <>
    <div style={{backgroundColor:bg}}>
    <button onClick={ChangeColor}  onDoubleClick ={ChangeColor2}>{name}</button>
    </div>
      
    </>
  );
}
export default App;