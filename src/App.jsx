import { useState } from 'react'
import './App.css'

function App() {
// by declearning the color and you set the colour dartkness or lightness according to you just by gicing -a number (500) 
  return (
    <>
     <div className='bg-black-600 flex justify-between ' >
      <p className='bg-green-200 '> this is first child of parent div</p>
      <p className='bg-purple-400 ' > this is secounf child of parent div</p>
     </div>
    </>
  )
}

export default App
