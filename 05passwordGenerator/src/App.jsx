import { useState,useCallback } from 'react'

import './App.css'

function App() {
  const [length,setlength] = useState(10)

  const [numAllowed,setnumAllowed]= useState(false)

  const [charAllowed,setcharAllowed]= useState(false)

  const [password,setpassword] = useState("")

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str +="!@#$%^&*()-_=+\|[]{};:/?.>"

    for (let i= 1; index <= array.length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }
      setpassword(pass)

  },[length,numAllowed,charAllowed,setpassword])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-10 py-0.5 text-orange-500 bg-gray-700'>
      
      <h1 className='text-white text-center my-3 text-2xl'>PassWord Generator</h1>
      
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'><input type = "text"
      value ={password}
      className='outline-none w-full py-1 px-3'
      placeholder = "Password"
      readOnly/>

      <button className='outline-none bg-blue-400 text-white shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gpa-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type= "range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length:{length}</label>

           <label htmlFor='numberInput'>Number </label>

        </div>
          <div className='flex item-center gap-x-1'><input 
          type ="checkbox"
          defultChecked ={numAllowed}
          id = "numberInput"
          onChange = {()=>{
            setnumAllowed((prev)=>!prev);
          }}
            />

            <label htmlFor='characterInput'>characters</label>
            
          </div>
      </div>
    </div>
    </>
  )
}

export default App
