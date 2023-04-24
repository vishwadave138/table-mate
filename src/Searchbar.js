import React from 'react'
import SearchIcon from "@mui/icons-material/Search";



export default function Searchbar() {

  

  return (
    <div>
      <div class=" bg-[url('./Image/serch.jpg')]  w-full h-screen flex flex-col items-center justify-center">
        <div class="mb-32">
          {/* <h1 className="text-7xl text-orange-200 ">Welcome</h1> */}
          <h4 className="text-3xl  text-white bg-orange-400">
            Book a Table at a time of your convenience{" "}
          </h4>
        </div>

        <div class="w-11/12 md:w-8/12 xl:w-1/2 h-auto p-4 rounded-full bg-white flex flex-col">
          {/* <!-- First section (search bar container) --> */}
          <section class="w-full h-5 flex items-center">
            {/* <!-- Search icon container --> */}
            <span class="w-10 h-full hidden md:flex items-center">
              <SearchIcon />
            </span>
            {/* <!-- Input --> */}
            <input
              type="text"
              class="w-full h-full font-medium md:pl-2 focus:outline-none searchInput"
              placeholder="Search Restaurant name or Area ..."
            />
            {/* <!-- Search button --> */}
            <button class="w-28 h-10 bg-blue-800 ml-24 flex justify-center items-center rounded-2xl text-white font-medium">
              Search
            </button>
          </section>
          {/* <!-- Second section (results container) --> */}
          <section class="w-full h-auto hidden flex-col gap-y-2 mt-8 resultsContainer"></section>
        </div>
      </div>

     

    </div>
  );
}
