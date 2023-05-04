import React from 'react'


export default function Feedback() {
  return (
    <div>
     
     <section className="text-gray-600 body-font">
  <div className=" px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-2">
      <div className="p-2  w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font text-3xl text-left ml-5">Don</h2>
            <p className="text-gray-500 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h6 className='text-right text-orange-500 hover:text-blue-600 text-2xl cursor-pointer'>Replies</h6>
          </div>
        </div>
      </div>
      <div className="p-2  w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font text-3xl text-left ml-5">Harry</h2>
            <p className="text-gray-500 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h6 className='text-right text-orange-500 hover:text-blue-600 text-2xl cursor-pointer'>Replies</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
