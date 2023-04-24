import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Dashbord() {
  const handleOnClick = () => {
    //Redirect to the python page
    navigate("/Orf");
  };
  const handleOnClick1 = () => {
    navigate("/sidebar")
  }
  const navigate = useNavigate();
  return (
    <div className='h-screen'>
    <div className="bg-[url('./Image/2.jpg')]  w-full h-96"><br/>
      <h4 className='text-white '>Register your restaurant on Table-Mate</h4>
      <p className='text-xl text-white'>and get more customers!</p>
      <div className='flex  justify-center mt-5 '>
      <h5 onClick={handleOnClick} className='border-2 border-black rounded-lg h-8 w-60 bg-orange-300 hover:bg-blue-600 hover:text-white'>Register Your Restaurant</h5>
      <h5 onClick={handleOnClick1} className='border-2 border-black rounded-lg h-8 w-72 bg-orange-300 hover:bg-blue-600 hover:text-white ml-10'>Register Already listed? Log In</h5>
      </div>
      <div className=' ml-96  mt-5 shadow-xl shadow-gray-400 w-96 relative bg-white'>
        <h4 className='text-orange-500'>Get started with online Table Booking</h4>
        <h6>Please keep the documents ready for a smooth signup</h6>
        <div className='text-left ml-10'>
        <p>-PAN Card</p>
        <p>-GST No.</p>
        <p>-Business License</p>
        <p>-Bank Account Details</p>
        <p>-Your Restaurant Menu with Dishes Photos</p>
        </div>

      </div>
      
    </div>
    </div>
  )
}
