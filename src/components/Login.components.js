
import React, { Component } from 'react'
export default class Login extends Component {
  render() {
    return (
      <form className='jistify-center'>
        <h3>Sign In</h3>
        <div className="mb-3 ml-80 ">
          <label className=''>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3 ml-80">
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
          <button type="submit" className="border-2 border-blue-800 bg-blue-800 w-20 rounded-lg ">
            Submit
          </button>
        </div>
        <p className="forgot-password text-center">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}