import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function SignUp(){
  const handleOnClick = () => {
    navigate("/login")
  }
  const navigate = useNavigate();
  const [select, setSelect]= useState();
  
    return (
      <div>
      <form className='shadow-xl shadow-orange-100 rounded-lg w-96 ml-96'>
        <h3 className='text-orange-500'>Sign Up</h3>
        <div className='my-3 ml-8 w-80'>
          <select value={select} onChange={e=>setSelect(e.target.value)} className=' form-control'>
            <option >Select-Role</option>
            <option>User</option>
            <option>Owner</option>
          </select>
        </div>
        <div className="mb-3 ml-8 w-80">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3 ml-8 w-80">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3 ml-8 w-80">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3 ml-8 w-80">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Create password"
          />
        </div>
        <div className="mb-3 ml-8 w-80">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="ml-40 border-2 text-white hover:bg-blue-500 bg-orange-500 w-20 rounded-lg ">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-center pb-2">
          Already registered <font className='text-blue-600 cursor-pointer' onClick={handleOnClick}>sign in?</font>
        </p>
      </form>
      </div>
    )
  }
