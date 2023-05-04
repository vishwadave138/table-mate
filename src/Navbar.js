import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React from "react";
import "./App.css";
import logo from "./Image/logo2.png";
// import { FiMenu } from 'react-icons/fi';

function Navbar() {
  // const [open,setOpen]=useState(false);
  const handleOnClick = () => {
    //Redirect to the python page
    navigate("/Dashbord");
  };
  const handleOnClick1 = () => {
    //Redirect to the python page
    navigate("/Login");
  };
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center bg-orange-100 h-20 border-b-2 border-orange-300 xl:max-w-7X1 xl:mx-auto max-w-full py[8%] ">
      <img src={logo} alt="" class="h-20 w-28 ml-2 " />

      {/* <FiMenu className="lg:hidden block h-8 w-8 cursor-pointer mt-5" onClick={() => setOpen(!open)}/> */}
      <h4 className="mt-3 text-orange-600 items-center cursor-pointer hover:text-blue-500" onClick={handleOnClick}>Add to Restaurant</h4>

      <div className=" space-x-8  mr-4 mt-3 text-xl font-serif  ">
        <Link className="hover:text-rose-600  focus:text-rose-600 no-underline" to="/">
          {" "}
          Home{" "}
        </Link>
        <Link
          className="mr-5 hover:text-rose-600 focus:text-rose-600 no-underline"
          to="/about"
        >
          {" "}
          About Us
        </Link>
        <Link
          className="mr-5 hover:text-rose-600  focus:text-rose-600 no-underline"
          to="/Blog"
        >
          {" "}
          Blog{" "}
        </Link>
        <Link
          className="mr-5 hover:text-rose-600  focus:text-rose-600 no-underline"
          to="/contact"
        >
          {" "}
          Contact{" "}
        </Link>
        <button
          onClick={handleOnClick1}
          className="border-solid border-2 border-slate-900 h-10 w-24 bg-orange-500 rounded-xl px-1 py-1"
        >
          Log In
        </button>
      </div>
    </div>
  );
}
export default Navbar;
