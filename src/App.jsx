import React from 'react'
import Backgrounds from './components/Backgrounds'
import Foreground from './components/Foreground'

function App() {
  return (
    <div className='relative w-full h-screen  bg-zinc-800 '>
      <Backgrounds />
      <Foreground />
    </div>
  )
}

export default App