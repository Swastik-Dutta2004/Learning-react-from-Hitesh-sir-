import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"
import{Header} from "./Component/Header"
import{Footer} from "./Component/Footer"
import { Outlet } from 'react-router-dom';
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
.finally(() => setloading(false))
},[])
  
return ! loading ? (
  <div className='min-h-screen flex flex-wrap contant-between bg--gray-400'><div className='w-full block'>
    <Header/>
    <main>
      {/* <Outlet/> */}
    </main>
    <Footer/>
    </div>
    </div>
  ) : null
}

export default App
