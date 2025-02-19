import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

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
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      
      <h1 className='text-white text-center my-3'>PassWord Generator</h1>
      
      <div className='flex shadow rounded-lg overflow-hidden mb-4'><input typr = "text"
      value ={password}
      className='outline-none w-full py-1 px-3'
      placeholder = "Password"
      readOnly>
        </input>
      </div>
    </div>
    </>
  )
}

export default App
