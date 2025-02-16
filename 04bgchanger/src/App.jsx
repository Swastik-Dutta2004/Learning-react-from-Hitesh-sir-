import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("green")
  return (
   <>
<div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
  <div className='fixed flex flex-wrap justify-center bottom-20 px-90 '>
  <div className='flex flex-wrap justify-center gap-2.5 shadow-amber-400 bg-white px-2.5 py-2.5 rounded-xl'>test</div>
  </div>
</div>
   </>
  )
}

export default App
