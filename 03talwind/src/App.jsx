import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
function App() {

  return (
    <>
     <h1>inderjeet singh dandiwal</h1>
     <Card username={"inderjeet"} btn={"clickhere"}/>
     <Card username={"singh"} />

    </>
  )
}

export default App
