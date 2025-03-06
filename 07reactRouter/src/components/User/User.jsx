import React from 'react'
import {useParams} from 'react-router-dom'


function User() {
const {Userid} = useParams()
    return (
    <div className='bg-green-500 text-white text-3xl p-4'>User : {Userid}</div>
  )
}

export default User