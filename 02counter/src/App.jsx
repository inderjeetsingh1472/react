import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


let [counter,setcounter] =useState(5)

  // let counter =5;
  
  const addValue =()=>{
    // counter+=1
    if(counter>=20){
      return(setcounter(counter-20))
    }
    setcounter(counter+1)

    console.log("clicked",counter);
  }

  const removeValue=()=>{
    if(counter<=0){
return(setcounter(counter+20))
    }
    setcounter(counter-1)
    console.log("clicked",counter);

  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value:{counter}</h2>
      <button 
      onClick={addValue}
      >Add value:{counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >remove value{counter}</button>
      <p>footer:{counter}</p>

    </>
  )
}

export default App
