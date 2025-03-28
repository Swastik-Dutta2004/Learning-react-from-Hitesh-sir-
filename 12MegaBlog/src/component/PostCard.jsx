 import React from 'react'
 import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

 function PostCard({$id, title,freaturedImage}) {

   return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl'></div>
    </Link>
   )
 }
 
 export default PostCard