import React from "react";
// import Cart from "./Cart";
import { useCart } from "react-use-cart";
// import Cart from "./Cart";

const Bill = () => {
  const {items,  cartTotal} = useCart();
    console.log(items); 
  return (
    <div className="mt-10">
      <h3>Bill Summary</h3>

      <div className="text-left ml-20 mb-10">
        <h5>Name:</h5>
        <h5>Contact No:</h5>
        <h5>Email Id:</h5>
        <h5>No. of Person(with Children):</h5>
        <h5>Restaurant Name:</h5>
        <h5>Booking Date:</h5>
        <h5>Booking Time:</h5>
      </div>

      <div className="table table-light table-hover  m-0">
        <tr>
          <td>Food name</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Subtotal</td>
        </tr>
        {items.map((item,index)=>{
            return(
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.Price}</td>
          <td>{item.quantity}</td>
          <td>Subtotal</td>
        </tr>
        )
      })}
    
      </div>

      <div className="col-auto text-end mr-28 ms-auto">
        <p>Total price:{cartTotal}</p>
      </div>

    </div>
  );
}
export default Bill;