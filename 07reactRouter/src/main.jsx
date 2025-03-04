import {   } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/home/home.jsx'
import About from './components/About/About.jsx'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "about",
          element: <About/>
        }
   ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router} />
  </StrictMode>,
)
