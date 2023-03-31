import React, { useState } from "react";
import Itemcard from "./Itemcard";
import Foodimages from "./Foodimages";
import "./Food.css";

const Food = () => {
  const [img, setImg] = useState(Foodimages);
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
    <>
    <h1 class="text-5xl italic font-bold mt-12 justify-center ">
          Food Menu
        </h1>
    <div className="flex ">
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
      {/* <h1 className="text-center mt-3">Food Menu</h1> */}
      <section className="container">
        <div className="row justify-content-center">
          {img.map((item, index) => {
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
    </>
  );
};

export default Food;
