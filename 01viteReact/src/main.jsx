import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    // return(
    //     // <div>
    //     //     <h1>custom app</h1>
    //     // </div>
    // )
}
const anotherElement = (
    <a href='https://google.com' target = "-blank">visitgoogle</a>
)

createRoot(document.getElementById('root')).render(

    <App/>
)
