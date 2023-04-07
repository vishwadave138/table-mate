import React from "react";
import { useCart } from "react-use-cart";
// import "./App.css";

const Itemcard = (props) => {
  const { addItem } = useCart();
  
  return (
   
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
      <div class="card p-0 overflow-hidden h-100 shadow hover:bg-gray-800 hover:text-white ">
        <img
          src={props.img}
          class="h-48 lg:w-48 lg:ml-1.5 rounded-2xl mt-2"
          alt=""
        />
        <div class="card-body text-center">
          <h3 class="card-title font-bold text-xl">{props.name}</h3>
          <p class="card-text text-xs">{props.decrip}</p>
          <h5 class="card-title">₹ {props.price}/-</h5>
          <button onClick={() => addItem(props.item)} class="btn btn-success ">
            Add Item
          </button>
        </div>
      </div>
    
    </div>
    
  );
};

export default Itemcard;
