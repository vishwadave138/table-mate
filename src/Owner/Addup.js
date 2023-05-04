import React from 'react'
import { FaPlus } from "react-icons/fa";

export default function Addup() {
  return (
    <div>
      <div  className='flex mt-4 ml-20'>
      <div className='border-2 border-orange-300 bg-orange-300 w-48 h-48 text-5xl rounded-lg shadow-xl shadow-gray-300 '>
       <FaPlus className='mx-16 my-16 text-white' />
       </div>
       <div className='block shadow-xl shadow-gray-300 bg-orange-300 w-48 h-48 ml-10 rounded-md'>
        <img src='' alt='img' className='h-20 w-20  ml-14 mt-2 bg-white'/>
        <div className='text-white'>
          <h5>Food Name:</h5>
          <p>Descripition:</p>
          <h6>Price:</h6>
        </div>
       </div>
       </div>
    </div>
  )
}
