import React from 'react'
import {useParams} from 'react-router'


function User() {
const {Userid} = useParams
    return (
    <div>User:{Userid}</div>
  )
}

export default User