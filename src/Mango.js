import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallIcon from "@mui/icons-material/Call";
import Restaurant1 from "./Image/Restaurant1.jpg";
import restaurantable1 from "./Image/restaurantable1.jpg";
import restaurantfood1 from "./Image/restaurantfood1.jpg";
import restaurantfood2 from "./Image/restaurantfood2.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Mango() {
  const navigate = useNavigate();
  const redirectToFill = () => {
    //Redirect to the python page
    navigate("/Fill");
  };
  const handleOnClick = () => {
    //Redirect to the python page
    navigate("/Gallerym");
  };

  return (
    <div>
      <div>
      <section class="text-gray-600 body-font overflow-hidden ">
        <div class=" px-5 py-16 mx-auto">
          <section class="text-gray-600 body-font">
            <div class="container px-5 pb-3 mx-auto flex flex-wrap">
              <div class="flex flex-wrap md:-m-2 -m-1">
                <div class="flex flex-wrap w-2/3">
                  <div class="md:p-2 p-1 w-full">
                    <img
                      alt="gallery"
                      class="w-full h-96 object-cover object-center block"
                      src={Restaurant1}
                    />
                  </div>
                </div>

                <div onClick={handleOnClick} class="flex flex-wrap w-1/3 ">
                  <div class="md:p-2 p-1 w-full opacity-50">
                    <img
                      alt="gallery"
                      class="w-full h-full object-cover object-center block"
                      src={restaurantable1}
                    />
                  </div>
                  <div class="md:p-2 p-1 w-1/2 opacity-50">
                    <img
                      alt="gallery"
                      class="w-full object-cover h-full object-center block"
                      src={restaurantfood1}
                    />
                  </div>
                  <div class="md:p-2 p-1 w-1/2 opacity-50">
                    <img
                      alt="gallery"
                      class="w-full object-cover h-full object-center block"
                      src={restaurantfood2}
                    />
                  </div>
                  <h4 className="absolute text-2xl text-blue-800 hover:text-3xl hover:text-gray-700 my-36 ml-20">
                    View Gallery
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <div class=" lg:pl-24 lg:py-2   text-left">
            <h1 class="text-gray-900 text-4xl title-font font-medium mb-1">
              @MANGO
            </h1>
            <div class="flex mb-2 ml-1 mt-2">
              <span class="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-orange-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-orange-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-orange-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-orange-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-orange-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </span>
            </div>

            <div className="-mb-12">
              <p>
                {" "}
                <font className="text-blue-600">
                  {" "}
                  <LocationOnIcon />
                </font>{" "}
                opp sindhubahavn, Bodakdev, Ahmedabad, Gujarat
              </p>
              <p class="-mt-2">
                {" "}
                <font className="text-blue-600">
                  <AccessTimeIcon />
                </font>{" "}
                time : 11:00am to 03:00pm <br />{" "}
                <p className="ml-20">7:00pm to 11:00pm </p>{" "}
              </p>
              <p class="-mt-2">
                {" "}
                <font className="text-blue-600">
                  <CallIcon />
                </font>{" "}
                099647 86460
              </p>
              <button
                onClick={redirectToFill}
                class="flex w-36 text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600  rounded"
              >
                Book A Table
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="border-b-2 border-stone-300  w-full ">
        <div className="text-2xl text-left ml-16   space-x-16">
          <Link
            to="/overview"
            className="text-orange-800 no-underline hover:text-blue-600 focus:text-blue-600 active:text-blue-600"
          >
            Overview
          </Link>
          <Link
            to="/fill"
            className="text-orange-800 no-underline hover:text-blue-600 focus:text-blue-600 active:text-blue-600"
          >
            Book A Table
          </Link>
          <Link
            to="/gallerym"
            className="text-orange-800 no-underline hover:text-blue-600 focus:text-blue-600 active:text-blue-600"
          >
            Gallery
          </Link>
          <Link
            to="/foodmenu"
            className="text-orange-800 no-underline hover:text-blue-600 focus:text-blue-600 active:text-blue-600"
          >
            Menu
          </Link>
          <Link
            to="/message"
            className="text-orange-800 no-underline hover:text-blue-600 focus:text-blue-600 active:text-blue-600"
          >
            Feedback
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
