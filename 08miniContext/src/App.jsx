import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  
  return (
   
   <UserContextProvider>
   <h1>React with Swastik</h1>
   </UserContextProvider>
    
  )
}

export default App
