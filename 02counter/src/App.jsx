import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter = 5

const addValue = ()=>{
  console.log("clicked ",counter);
  counter = counter+1
}

  return (
    <>
      
      <h1>chai aur react</h1>
      <h2>Counter value {counter}</h2>
      <button onClick = {addValue}>Add point</button>
      
      <br></br>
      <button>Remove point</button>
    
    </>
  )
}

export default App
