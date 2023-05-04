import React from 'react'

export default function Rdetails() {
  return (
    <div>
      <h3>Restaurant Details</h3>
      <div>
      <tr className="bg-orange-400 text-2xl text-white border-2 border-white">
        <td className="border-2 border-white">No.</td>
        <td className="border-2 border-white">Restaurant Name</td>
        <td className="border-2 border-white">Owner Name</td>
        <td className="border-2 border-white">Contact No.</td>
        <td className="border-2 border-white">Restaurant Address</td>
        <td className="border-2 border-white">Users booking details</td>
        <td className="border-2 border-white">Payment Details</td>
      </tr>
      <tr className="bg-orange-100">
        <td className="border-2 border-white">1</td>
        <td className="border-2 border-white">@Mango</td>
        <td className="border-2 border-white">Mr. XYZ </td>
        <td className="border-2 border-white">1234567890</td>
        <td className="border-2 border-white">Sindhu Bhavan OPP., Sindhu bhavan road, Ahmedabad</td>
        <td className="border-2 border-white">Users booking details</td>
        <td className="border-2 border-white">Payment Details</td>
      </tr>
      </div>
    </div>
  )
}
