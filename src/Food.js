import React from "react";
import Itemcard from "./Itemcard";
import Foodimages from "./Foodimages";

const Food = () => {
  return (
    <div>
      {/* <h1 className="text-center mt-3">Food Menu</h1> */}
      <section className="container">
        <div className="row justify-content-center">
          {Foodimages.map((item, index) => {
            return (
              <Itemcard
                img={item.pic}
                name={item.name}
                decrip={item.decrip}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Food;
