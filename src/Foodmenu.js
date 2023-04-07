import React, { useState } from "react";
import "./Food.css";
import Foodimages from "./Foodimages";
// import { useCart } from "react-use-cart";
// import Slider from "./Slider";
// import Itemcard from "./Itemcard";

export default function Foodmenu() {
  const [img, setImg] = useState(Foodimages);
  // const { addItem } = useCart();
  const allItem = () => {
    const finalData = Foodimages.filter((value) => {
      return value;
    });

    setImg(finalData);
  };

  const startersIm = (categoryItem) => {
    const finalData = Foodimages.filter((value) => {
      return value.title === categoryItem;
    });

    setImg(finalData);
  };
  const platterIm = (categoryItem) => {
    const finalData = Foodimages.filter((value) => {
      return value.title === categoryItem;
    });

    setImg(finalData);
  };
  const saladIm = (categoryItem) => {
    const finalData = Foodimages.filter((value) => {
      return value.title === categoryItem;
    });

    setImg(finalData);
  };
  const AccompanimentIm = (categoryItem) => {
    const finalData = Foodimages.filter((value) => {
      return value.title === categoryItem;
    });

    setImg(finalData);
  };
  const BeveragesIm = (categoryItem) => {
    const finalData = Foodimages.filter((value) => {
      return value.title === categoryItem;
    });

    setImg(finalData);
  };
  const pizzaIm = (categoryItem) => {
    const finalData = Foodimages.filter((value) => {
      return value.title === categoryItem;
    });

    setImg(finalData);
  };
  const tryIm = (categoryItem) => {
    const finalData = Foodimages.filter((value) => {
      return value.title === categoryItem;
    });

    setImg(finalData);
  };
  const pastaIm = (categoryItem) => {
    const finalData = Foodimages.filter((value) => {
      return value.title === categoryItem;
    });

    setImg(finalData);
  };
  const casserolesIm = (categoryItem) => {
    const finalData = Foodimages.filter((value) => {
      return value.title === categoryItem;
    });

    setImg(finalData);
  };
  const mainIm = (categoryItem) => {
    const finalData = Foodimages.filter((value) => {
      return value.title === categoryItem;
    });

    setImg(finalData);
  };
  const wallIm = (categoryItem) => {
    const finalData = Foodimages.filter((value) => {
      return value.title === categoryItem;
    });

    setImg(finalData);
  };
  const biryaniIm = (categoryItem) => {
    const finalData = Foodimages.filter((value) => {
      return value.title === categoryItem;
    });

    setImg(finalData);
  };
  const comfortIm = (categoryItem) => {
    const finalData = Foodimages.filter((value) => {
      return value.title === categoryItem;
    });

    setImg(finalData);
  };
  const dalriceIm = (categoryItem) => {
    const finalData = Foodimages.filter((value) => {
      return value.title === categoryItem;
    });

    setImg(finalData);
  };
  const breadIm = (categoryItem) => {
    const finalData = Foodimages.filter((value) => {
      return value.title === categoryItem;
    });

    setImg(finalData);
  };
  const sweetIm = (categoryItem) => {
    const finalData = Foodimages.filter((value) => {
      return value.title === categoryItem;
    });

    setImg(finalData);
  };
  const dessertIm = (categoryItem) => {
    const finalData = Foodimages.filter((value) => {
      return value.title === categoryItem;
    });

    setImg(finalData);
  };
  
  return (
    <div>
      <div class=" ">
        <h1 class="text-3xl italic  mt-4 text-center ml-20 ">
          Food Menu
        </h1>
      </div>

      <div class="flex justify-between mt-4">
        <div className="foodmenu">
          <button onClick={allItem}>All</button>
          <button onClick={() => startersIm("starter")}>Starters</button>
          <button onClick={() => platterIm("platter")}>Sharing Platters</button>
          <button onClick={() => saladIm("salad")}>Salads</button>
          <button onClick={() => AccompanimentIm("accompaniment")}>
            Accompaniments
          </button>
          <button onClick={() => BeveragesIm("beverages")}>
            The more known Beverages
          </button>
          <button onClick={() => pizzaIm("pizza")}>Artisan Pizzas</button>
          <button onClick={() => tryIm("try")}>Try the world</button>
          <button onClick={() => pastaIm("pasta")}>Pasta Fatta In-Casa</button>
          <button onClick={() => casserolesIm("casseroles")}>
            Piping Hot Casseroles
          </button>
          <button onClick={() => wallIm("wall")}>Across the Great Wall</button>
          <button onClick={() => mainIm("main")}>Main Course Indian</button>
          <button onClick={() => dalriceIm("dalrice")}>Dal & Rice</button>
          <button onClick={() => biryaniIm("biryani")}>Biryaani</button>
          <button onClick={() => comfortIm("comfort")}>Comfort Food</button>
          <button onClick={() => breadIm("bread")}>Indian Breads</button>
          <button onClick={() => sweetIm("sweet")}>Sweets</button>
          <button onClick={() => dessertIm("dessert")}>Desserts</button>
        </div>
        {/* <Slider /> */}

      
      
        <div class="grid gap-2 grid-cols-5 grid-rows-3 ">
          {img.map((value) => {
            return (
              <div
                className="ip"
                class="shadow-xl shadow-gray-500 rounded-lg h-full w-40 hover:bg-gray-600 hover:text-white"
              >
                <img
                  src={value.pic}
                  alt=" "
                  class="h-28 w-32 rounded-2xl ml-3.5 mt-2"
                />
                <div className="-space-y-0.5">
                  <h1 class="text-lg font-bold">{value.name}</h1>
                  {/* <p class="text-xs">{value.decrip}</p> */}
                  <h3 class="text-lg font-bold">₹ {value.price}/-</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
