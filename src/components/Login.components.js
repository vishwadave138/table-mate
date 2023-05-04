
import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login () {

  const handleOnClick = () => {
    navigate("/signup")
  }
  const navigate = useNavigate();
 

    
    return (
      <div>
      <form className='shadow-xl shadow-orange-100 rounded-lg w-96 ml-96'>
        <h3 className='text-orange-500'>Sign In</h3>
        <div className="mb-3 ml-8 w-80">
          <label className=''>Email address</label>
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
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="text-black" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid justify-center">
          <button type="submit" className="border-2 text-white hover:bg-blue-500 bg-orange-500 w-20 rounded-lg ">
            Submit
          </button>
        </div>
        <p className="forgot-password text-center">
          Forgot <font className='text-blue-600'>password?</font>
        </p>
        <p>Create New Account? <font className='text-blue-600 cursor-pointer' onClick={handleOnClick} > Sign Up</font></p>
      </form>
      </div>
    )
  }
