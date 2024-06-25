import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('green')

  return (
    <div id='inder' className='w-full h-screen flex flex-col items-center justify-center overflow-hidden'
      style={{ backgroundColor: color }}>
      <div className='fixed bottom-12 flex justify-center items-center w-full'>
        <div className='flex flex-wrap justify-center gap-3 bg-black rounded-3xl px-2 py-4'>
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor('yellow')} className='outline-none px-4 bg-yellow-500 py-1 text-white shadow-2xl rounded-3xl'>Yellow</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor('red')} className='outline-none px-4 bg-red-500 py-1 text-white shadow-2xl rounded-3xl'>Red</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor('blue')} className='outline-none px-4 bg-blue-500 py-1 text-white shadow-2xl rounded-3xl'>Blue</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
