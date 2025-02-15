import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(5)
 

const addValue = ()=>{
  // counter = counter + 1
  setCount(counter+1)
  console.log("clicked ",counter);
}

const removeValue = ()=>{
  setCount (counter - 1)
  console.log("removed",counter);
  
}
  return (
    <>
      
      <h1>chai aur react</h1>
      <h2>Counter value {counter}</h2>
      <button onClick = {addValue}>Add point {counter}</button>
      
      <br></br>
      <button onClick={removeValue}>Remove point {counter}</button>
    
    </>
  )
}

export default App
