import React, {createContext} from "react";
import { useCart } from "react-use-cart";
import ContextCart from "./ContextCart";
import Foodimages from "./Foodimages";
import { useNavigate } from "react-router-dom";
// import Fill from "./Fill";
export const CartContext= createContext();

const Cart = () => {
  
  const {
    items,
    cartTotal
  } = useCart(Foodimages);
  const redirectToPayment= () => {
    //Redirect to the python page
    navigate("/Payment");
  };
  const navigate = useNavigate();
 

//   if (isEmpty) return <h1 className="text-center">your cart is Empty</h1>;
// console.log(cartTotal)
  return (
    <div>
      <CartContext.Provider value={Foodimages}>
      <ContextCart/>
      </CartContext.Provider>

     

      <h2 className="my-5 text-orange-500">Bill summary</h2>
      
     
      <table className="table -ml-28  table-hover ">
      {items.map((item,index)=>{
            return(
        <tr key={index}>
          <td className="text-center">{item.name}</td>
          <td>₹{item.price}/-</td>
          <td>{item.quantity}</td>
          <td>subtotal</td>
        </tr>
    
      )
      })}
      </table>
      <div className="text-right text-lg mr-44">
            <p>Total price: ₹ {cartTotal}/-</p>
          </div>

          <button onClick={redirectToPayment} className="bg-orange-600 text-white text-xl">Payment At Restaurant</button>
    </div>
  );
};

export default Cart;
