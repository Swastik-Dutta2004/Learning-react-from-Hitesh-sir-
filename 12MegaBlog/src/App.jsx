import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"

function App() {
const [loading,setloading] = useState(true);
const dispatch = useDispatch()

useEffect (() => {authService.GetCurrentUser().then((useData) =>{
  if (useData) {
    dispatch(login({useData}))
  } else {
    dispatch(logout())
  }
})
.finally()
},[])
  return (
   <>
   <h1>Started doing a Responsive project </h1>
   </>
  )
}

export default App
