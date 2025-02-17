import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("grey")
  return (
   <>
<div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
  <div className='fixed flex flex-wrap justify-center bottom-20 px-90 '>

  <div className='flex flex-wrap justify-center gap-2.5 shadow-amber-400 bg-black px-2.5 py-2.5 rounded-2xl'>

    <button 
     onClick={()=>setColor("red")}
    className='outline-none px-3 py-1 rounded-full text-black shadow-lg '
    style={{backgroundColor:"red"}}
    >red</button>

    <button 
     onClick={()=>setColor("yellow")} 
    className='outline-none px-3 py-1 rounded-full text-black shadow-lg '
    style={{backgroundColor:"yellow"}}
    >yellow</button>

    <button
    onClick={()=>setColor("green")} 
    className='outline-none px-3 py-1 rounded-full text-black shadow-lg '
    style={{backgroundColor:"green"}}
    >green</button>
    
    <button
    onClick={()=>setColor("blue")} 
    className='outline-none px-3 py-1 rounded-full text-black shadow-lg '
    style={{backgroundColor:"blue"}}
    >blue</button>
  </div>
  </div>
</div>
   </>
  )
}

export default App
