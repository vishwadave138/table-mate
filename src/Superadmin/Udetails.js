import React from 'react'

export default function Udetails() {
  return (
    <div>
      <h3>User Details</h3>
       <div>
     <table className="table  table-hover my-4 border-2 border-white">
     <tr className="bg-orange-400 text-2xl text-white border-2 border-white">
        <td className="border-2 border-white">No.</td>
        <td className="border-2 border-white">User Name</td>
        <td className="border-2 border-white">Restaurant Name</td>
        <td className="border-2 border-white">Date & Time</td>
        <td className="border-2 border-white">Total Members</td>
        <td className="border-2 border-white">Table No.</td>
        <td className="border-2 border-white">Menu with Quntity</td>
        <td className="border-2 border-white">Amount</td>
        <td className="border-2 border-white">Pay type</td>
      </tr>
      <tr className="bg-orange-100">
        <td className="border-2 border-white">1</td>
        <td className="border-2 border-white">Don</td>
        <td className="border-2 border-white">@Mango</td>
        <td className="border-2 border-white">27/04/2023 7:00 pm</td>
        <td className="border-2 border-white">3</td>
        <td className="border-2 border-white">T3</td>
        <td className="border-2 border-white">Corn Crispy(1),<br/>Masala Papad(2),<br/>Dum Paneer(1),<br/>Roti(3),<br/>Latus Biscoff Cheese Cake(2)</td>
        <td className="border-2 border-white">₹ 2310/-</td>
        <td className="border-2 border-white">Pay At Restaurant</td>
      </tr>
      </table>
     </div>
    </div>
  )
}
