import { useState } from 'react'
import { Inputbox } from './component'
import {useCurrencyInfo} from './Hooks'
import './App.css'
function App() {

const [amount,setamount] = useState(0)
const [from,setFrom] = useState("usd")
const [to,setTo] = useState("inr")
const[convert,setConvert] = useState(0)

const currencyInfo = useCurrencyInfo(from)

const options = object.key (currencyInfo)

const swap = () => {
  setFrom(to)
  setTo(from)
  setConvert(amount)
  setamount(convert)
}
  return (
<>
<h1 className='text-3xl bg-orange-500 text-top'>Currency App </h1>
</>
  )
}
  
export default App
