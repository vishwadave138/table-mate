import React, { useState } from "react";
import Searchbar from "./Searchbar";
import { useNavigate } from "react-router-dom";

import { BsStarFill } from "react-icons/bs";
import { FaStarHalfAlt } from "react-icons/fa";
import { BsStar } from "react-icons/bs";

import mango1 from "./Images/mango1.jpg";
import Nini from "./Images/Nini.jpeg";
import Festival from "./Images/Festival.jpeg";
import Hollylook from "./Images/Hollylook.jpeg";
import Royalvega from "./Images/Royalvega.jpeg";
import Tomatos from "./Images/Tomatos.jpeg";
import Rkitchen from "./Images/Rkitchen.jpg";
import Tinello from "./Images/Tinello.jpg";
import Thesquare from "./Images/Thesquare.jpg";
import Punjabi from "./Images/Punjabi.jpg";
import Desserts from "./Images/Desserts.jpeg";
import Kathiyavadi from "./Images/Kathiyavadi.jpeg";
import Gujrati from "./Images/Gujrati.jpeg";
import Mexican from "./Images/Mexican.jpeg";
import Drink from "./Images/Drink.jpeg";
import Chinese from "./Images/Chinese.jpeg";
import SouthIndian from "./Images/SouthIndian.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Home.css";

// import required modules
import { Autoplay, Pagination, EffectCoverflow } from "swiper";

export default function Home() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleSeeMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  const navigate = useNavigate();
  const redirectToHotel = () => {
    //Redirect to the python page
    navigate("/Mango");
  };
  return (
    <div>
      <Searchbar />
      <h1 className="font-bold text-5xl mt-5  h-16 underline text-orange-600 text-center">Popular Restaurants</h1>
      
      <section class="text-gray-600 body-font ">
        <div class="container px-5 pb-24 mx-auto">
          <div class="flex flex-wrap -m-4 ">
            <div class="p-4 md:w-1/3 hover:bg-stone-50 ">
              <div class="h-full border-2 border-gray-200 border-opacity-60 shadow-xl shadow-gray-400 rounded-lg overflow-hidden">
                <img
                  class="lg:h-60 md:h-36 w-full object-cover object-center"
                  src={mango1}
                  alt="img"
                  onClick={redirectToHotel}
                />
                <div class="p-6 space-y-4">
                  <h2
                    class="text-4xl	 text-black	font-bold	"
                    onClick={redirectToHotel}
                  >
                    @Mango
                  </h2>
                  <div class="text-black flex space-x-1.5 text-cente ml-40">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <FaStarHalfAlt />
                    <BsStar />
                  </div>

                  <p class="leading-relaxed mb-3">
                    Sindhu Bhavan Road, Ahmedabad{" "}
                  </p>
                  <button
                    onClick={redirectToHotel}
                    className="bg-orange-500 text-xl text-white border-2 border-gray-300 w-40 hover:bg-sky-600"
                  >
                    Book a Table
                  </button>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3 hover:bg-stone-50">
              <div class="h-full border-2 border-gray-200 border-opacity-60 shadow-xl shadow-gray-400 rounded-lg overflow-hidden">
                <img
                  class="lg:h-60 md:h-36 w-full object-cover object-center"
                  src={Nini}
                  alt="blog"
                />
                <div class="p-6 space-y-4">
                  <h2 class="text-4xl	 text-black	font-bold">Nini's Kitchen</h2>
                  <div class="text-black flex space-x-1.5 text-cente ml-40">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <FaStarHalfAlt />
                    <BsStar />
                  </div>
                  <p class="leading-relaxed mb-3">Prahlad Nagar, Ahmedabad</p>
                  <button className="bg-orange-500 text-xl hover:bg-sky-600 text-white border-2 border-gray-300 w-40">
                    Book a Table
                  </button>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3 hover:bg-stone-50">
              <div class="h-full border-2 border-gray-200 border-opacity-60 shadow-xl shadow-gray-400 rounded-lg overflow-hidden">
                <img
                  class="lg:h-60 md:h-36 w-full object-cover object-center"
                  src={Festival}
                  alt="blog"
                />
                <div class="p-6 space-y-4">
                  <h2 class="text-4xl	 text-black	font-bold  ">
                    365 The Festivals
                  </h2>
                  <div class="text-black flex space-x-1.5 text-cente ml-40">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                  </div>
                  <p class="leading-relaxed mb-3">
                    opp. Vaishnodevi Temple, Ahmedabad
                  </p>
                  <button className="bg-orange-500 text-xl hover:bg-sky-600 text-white border-2 border-gray-300 w-40">
                    Book a Table
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font ">
        <div class="container px-5 pb-10 -mt-20 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3 hover:bg-stone-50">
              <div class="h-full border-2 border-gray-200 border-opacity-50 rounded-lg shadow-xl shadow-gray-400  overflow-hidden">
                <img
                  class="lg:h-60 md:h-36 w-full object-cover object-center"
                  src={Hollylook}
                  alt="img"
                />
                <div class="p-6 space-y-4">
                  <h2 class="text-4xl	 text-black	font-bold	">THE HILLOCK</h2>
                  <div class="text-black flex space-x-1.5 text-cente ml-40">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                  </div>
                  <p class="leading-relaxed mb-3">SP Ring Road,Ahmedabad </p>
                  <button className="bg-orange-500 text-xl hover:bg-sky-600 text-white border-2 border-gray-300 w-40">
                    Book a Table
                  </button>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3 hover:bg-stone-50">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg shadow-xl shadow-gray-400 overflow-hidden">
                <img
                  class="lg:h-60 md:h-36 w-full object-cover object-center"
                  src={Royalvega}
                  alt="blog"
                />
                <div class="p-6 space-y-4">
                  <h2 class="text-4xl	 text-black	font-bold">Royal Vega</h2>
                  <div class="text-black flex space-x-1.5 text-cente ml-40">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <FaStarHalfAlt />
                    <BsStar />
                  </div>
                  <p class="leading-relaxed mb-3">
                    Judges Bungalow Road, Ahmadabad{" "}
                  </p>
                  <button className="bg-orange-500 text-xl hover:bg-sky-600 text-white border-2 border-gray-300 w-40">
                    Book a Table
                  </button>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3 hover:bg-stone-50">
              <div class="h-full border-2 border-gray-200 border-opacity-60 shadow-xl shadow-gray-400 rounded-lg overflow-hidden">
                <img
                  class="lg:h-60 md:h-36 w-full object-cover object-center"
                  src={Tomatos}
                  alt="blog"
                />
                <div class="p-6 space-y-4">
                  <h2 class="text-4xl	 text-black	font-bold">Tomato's</h2>
                  <div class="text-black flex space-x-1.5 text-cente ml-40">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                  </div>
                  <p class="leading-relaxed mb-3">Navrangpura Ahmedabad</p>
                  <button className="bg-orange-500 text-xl hover:bg-sky-600 text-white border-2 border-gray-300 w-40">
                    Book a Table
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isShowMore && (
          <section class="text-gray-600 body-font">
            <div class="container px-5 pb-10 -mt-4  mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="p-4 md:w-1/3 hover:bg-stone-50">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 shadow-xl shadow-gray-400 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-60 md:h-36 w-full object-cover object-center"
                      src={Rkitchen}
                      alt="img"
                    />
                    <div class="p-6 space-y-4">
                      <h2 class="text-4xl	 text-black	font-bold	">R Kitchen</h2>
                      <div class="text-black flex space-x-1.5 text-cente ml-40">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <FaStarHalfAlt />
                        <BsStar />
                      </div>
                      <p class="leading-relaxed mb-3">Sola Road, Ahmedabad</p>
                      <button className="bg-orange-500 text-xl hover:bg-sky-600 text-white border-2 border-gray-300 w-40">
                        Book a Table
                      </button>
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/3 hover:bg-stone-50">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 shadow-xl shadow-gray-400 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-60 md:h-36 w-full object-cover object-center"
                      src={Tinello}
                      alt="blog"
                    />
                    <div class="p-6 space-y-4">
                      <h2 class="text-4xl	 text-black	font-bold">Tinello</h2>
                      <div class="text-black flex space-x-1.5 text-cente ml-40">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <FaStarHalfAlt />
                        <BsStar />
                      </div>
                      <p class="leading-relaxed mb-3">
                        Hyatt Regency, Ahmedabad
                      </p>
                      <button className="bg-orange-500 text-xl text-white border-2 border-gray-300 w-40">
                        Book a Table
                      </button>
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/3 hover:bg-stone-50">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 shadow-xl shadow-gray-400 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-60 md:h-36 w-full object-cover object-center"
                      src={Thesquare}
                      alt="blog"
                    />
                    <div class="p-6 space-y-4">
                      <h2 class="text-4xl	 text-black	font-bold">The Square</h2>
                      <div class="text-black flex space-x-1.5 text-cente ml-40">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStar />
                      </div>
                      <p class="leading-relaxed mb-3">Novotel, Ahmedabad</p>
                      <button className="bg-orange-500 text-xl text-white border-2 border-gray-300 w-40">
                        Book a Table
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        <button
          onClick={toggleSeeMoreLess}
          class="border-2 h-14 w-40  rounded-lg border-slate-600 text-2xl  text-white bg-green-900 hover:bg-green-600"
        >
          {isShowMore ? "See Less" : "See More"}
        </button>
      </section>

      <h1 className="font-bold text-5xl mt-5 bg-orange-100 h-16 border-b-4 border-orange-600 text-orange-600 text-center">Recommend Food</h1>

      <section class="mt-12 w-screen">
        <div class="">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, EffectCoverflow]}
            className="mySwiper"
            style={{ width: "100%" }}
          >
            <SwiperSlide>
              <p class="mb-2 border-2 border-slate-600 bg-slate-600 text-3xl font-bold text-slate-50 ">
                Punjabi
              </p>
              <img
                class="object-fill   md:h-96 w-screen"
                width="100%"
                src={Punjabi}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <p class="mb-2 border-2 border-slate-600 bg-slate-600 text-3xl font-bold text-slate-50">
                Desserts
              </p>
              <img
                className="object-fill md:h-96 w-screen"
                width="100%"
                src={Desserts}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <p class="mb-2 border-2 border-slate-600 bg-slate-600 text-3xl font-bold text-slate-50">
                Mexican
              </p>
              <img
                className="object-fill  md:h-96 w-screen"
                width="100%"
                src={Mexican}
                alt="/"
              />
            </SwiperSlide>

            <SwiperSlide>
              <p class="mb-2 border-2 border-slate-600 bg-slate-600 text-3xl font-bold text-slate-50">
                Kathiyavadi
              </p>
              <img
                className="object-fill  md:h-96 w-screen"
                width="100%"
                src={Kathiyavadi}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <p class="mb-2 border-2 border-slate-600 bg-slate-600 text-3xl font-bold text-slate-50">
                Chinese
              </p>
              <img
                className="object-fill  md:h-96 w-screen"
                width="100%"
                src={Chinese}
                alt="/"
              />
            </SwiperSlide>

            <SwiperSlide>
              <p class="mb-2 border-2 border-slate-600 bg-slate-600 text-3xl font-bold text-slate-50">
                Soft Drink
              </p>
              <img
                className="object-fill  md:h-96 w-screen"
                width="100%"
                src={Drink}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <p class="mb-2 border-2 border-slate-600 bg-slate-600 text-3xl font-bold text-slate-50">
                Gujrati
              </p>
              <img
                className="object-fill  md:h-96 w-screen"
                width="100%"
                src={Gujrati}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <p class="mb-2 border-2 border-slate-600 bg-slate-600 text-3xl font-bold text-slate-50">
                South Indian
              </p>
              <img
                className="object-fill md:h-96 w-screen"
                width="100%"
                src={SouthIndian}
                alt="/"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

          </div>
  );
}
