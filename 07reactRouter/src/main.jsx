import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider} from 'react-router-dom'
import Home from './components/home/home.jsx'
import About from './components/About/About.jsx'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'

// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout/>,
//       children: [
//         {
//           path: "",
//           element: <Home />
//         },
//         {
//           path: "about",
//           element: <About/>
//         },
//         {
//           path: "contact",
//           element: <Contact/>
//         }
//    ]
//   }
// ])

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='User/:Userid' element={<User/>}/>
    <Route path='github' element={<github/>}/>
     </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router} />
  </StrictMode>,
)
