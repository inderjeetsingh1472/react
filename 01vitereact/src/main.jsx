import React from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-dev-runtime.js"
import App from './App.jsx'


function MyApp() {

  return (
<div>
    <h1>Inderjeet singh dandiwal</h1>
    </div>
  )
}
//  const reactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'click me to visit google'
// }

const run= (
  <a href="https://google.com" target="_blank">
  google</a>
)

const reactElement=React.createElement("a",{
  href:'https://google.com',target:'_blank'
},
'open google')




ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
