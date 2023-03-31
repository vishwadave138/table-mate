import { Link } from "react-router-dom";
import React from "react";
import "./App.css";
import logo from "./Image/logo.png";
// import { FiMenu } from 'react-icons/fi';

function Navbar() {
  // const [open,setOpen]=useState(false);

  return (
    <div className="flex justify-between bg-orange-100 h-20 border-b-2 border-orange-300 xl:max-w-7X1 xl:mx-auto max-w-full py[8%] ">
      <img src={logo} alt="" class="h-16 w-20 ml-2 mt-2" />

      {/* <FiMenu className="lg:hidden block h-8 w-8 cursor-pointer mt-5" onClick={() => setOpen(!open)}/> */}

      <div className=" space-x-8  mr-4 mt-3 text-xl font-serif no-underline ">
        <Link className="hover:text-rose-600  focus:text-rose-600" to="/">
          {" "}
          Home{" "}
        </Link>
        <Link
          className="mr-5 hover:text-rose-600 focus:text-rose-600 "
          to="/about"
        >
          {" "}
          About Us
        </Link>
        <Link
          className="mr-5 hover:text-rose-600  focus:text-rose-600"
          to="/Blog"
        >
          {" "}
          Blog{" "}
        </Link>
        <Link
          className="mr-5 hover:text-rose-600  focus:text-rose-600"
          to="/contact"
        >
          {" "}
          Contact{" "}
        </Link>
        <button
          onClick=""
          className="border-solid border-2 border-slate-900 h-10 w-24 bg-orange-500 rounded-xl"
        >
          Log In
        </button>
      </div>
    </div>
  );
}
export default Navbar;
