import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button,Input,Logo} from './Index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useFrom} from 'react-hook-form'

 
function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSumit} = useFrom()
    const [error, seterror] = useState("")
    const login = async (data)=>{
        seterror("")
        try {
            const session = await authService.Login(data)
            if(session){
              const userData = await authService.GetCurrentUser()
              if(userData) dispatch(authLogin(userData));
              navigate ("/")
            }
            
        } catch (error) {
            seterror(error.message)
        }
    }
  return (
    <div ></div>
  )
}

export default Login