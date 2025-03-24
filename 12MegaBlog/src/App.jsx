import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from "./appwrite/auth"


function App() {
const [loading,setloading] = useState(true);
const dispatch = useDispatch()
  return (
   <>
   <h1>Started doing a Responsive project </h1>
   </>
  )
}

export default App
