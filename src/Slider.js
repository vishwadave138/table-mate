import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Food from "./Food";
import Cart from "./Cart";

import { CartProvider } from "react-use-cart";

export default function Slider() {
  return (
    <div>
      <CartProvider>
        <Food />
        <Cart />
      </CartProvider>
    </div>
  );
}
