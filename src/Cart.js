import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";


const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();


  if (isEmpty) return <h1 className="text-center">your cart is Empty</h1>;
  return (
    <div>
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Cart ({totalUniqueItems}) total Items: ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                 
                  <tr key={index}>
                    <td>
                      <img src={item.pic} style={{ height: "100px", width: "100px" }} alt="" />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="btn btn-info ms-2"
                      >
                        -
                      </button>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        className="btn btn-info ms-2"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="btn btn-danger ms-2"
                      >
                        Remove Item
                      </button>
                    </td>
                   
                  </tr>
               
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Total price: ₹{cartTotal}</h2>
        </div>
        <div className="col-auto">
          <button onClick={() => emptyCart()} className="btn btn-danger m-2">
            Clear Cart
          </button>
        </div>
      </div>
    </section>
    <Link className="text-2xl text-black border-2 border-orange-700 no-underline" to='/bill'>Contiuse</Link>
    </div>
    
  );

};

export default Cart;
