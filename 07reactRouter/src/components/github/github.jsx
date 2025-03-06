import React, { useEffect, useState } from 'react'

function github() {
    const[data,setdata] = useState([])
    useEffect(() => {
    featch('https://api.github.com/user/Swastik-dutta2004')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setdata(data)
    })
    }, [])
     
  return (
    <div className='bg-gray-600 text-center text-white m-4'>github follower:{data.follower}
    </div>
  )
}

export default github