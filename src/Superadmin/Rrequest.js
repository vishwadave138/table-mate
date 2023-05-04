import React from 'react'

export default function Rrequest() {
  return (
    <div>
      <h3>Restaurant Register Details</h3>
      <div className='w-full'>
        <tr className="bg-orange-400 text-2xl text-white border-2 border-white">
          <td className="border-2 border-white">No.</td>
          <td className="border-2 border-white">Restaurant Name</td>
          <td className="border-2 border-white">Restaurant Owner Name</td>
          <td className="border-2 border-white">Restaurant Type</td>
          <td className="border-2 border-white">Email Id</td>
          <td className="border-2 border-white">Contact No.</td>
          <td className="border-2 border-white">Pan No.</td>
          <td className="border-2 border-white">GST No.</td>
          <td className="border-2 border-white">Business Licence</td>
          <td className="border-2 border-white">Bank Details</td>
          {/* <td className="border-2 border-white">Restaurant Image</td> */}
          <td className="border-2 border-white"> Menu</td>
          <td className="border-2 border-white">Comfirmation</td>
        </tr>
        <tr className="bg-orange-100">
          <td className="border-2 border-white">1</td>
          <td className="border-2 border-white">@Mango</td>
          <td className="border-2 border-white">Mr. XYZ</td>
          <td className="border-2 border-white">Italian Food</td>
          <td className="border-2 border-white">xyz00@gmail.com</td>
          <td className="border-2 border-white">1234567890</td>
          <td className="border-2 border-white">RE455GY56</td>
          <td className="border-2 border-white">23345DE56</td>
          <td className="border-2 border-white">RTY6789</td>
          <td className="border-2 border-white">SBI<br/>01815<br/>Ac. NO.</td>
          {/* <td className="border-2 border-white">Restaurant Image</td> */}
          <td className="border-2 border-white"> Menu</td>
          <td className="border-2 border-white">Comfirmation</td>
        </tr>
      </div>
    </div>
  )
}
