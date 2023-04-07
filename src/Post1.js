import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Post.css";
import { EffectFlip, Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

export default function Post1() {
  const navigate = useNavigate();
  const redirectToPost1 = () => {
    //Redirect to the python page
    navigate("/blog");
  };
  const handleOnClick = () => {
    //Redirect to the python page
    navigate("/home");
  };

  return (
    <div>
      <div className="bg-[url('https://thumbs.dreamstime.com/z/preparing-cooking-spices-vegetables-kitchen-board-top-view-free-space-your-text-rustic-style-164635861.jpg')] w-full h-screen bg-cover aboulate  ">
        <h1 className="text-amber-400  text-7xl font-serif font-bold  text-right pt-60  mr-28">
          Blog Detail
        </h1>
      </div>
      <div className="sm:flex justify-center">
        <section>
          <div class="p-4  sm:mb-0 mb-6 my-10 shadow-lg mx-8 shadow-slate-300">
            <div class="rounded-lg h-96 overflow-hidden">
              <p className="absolute bg-green-500 mt-7 text-white w-32  text-xl  rounded-br-xl rounded-tl-xl">
                {" "}
                3 april, 2023{" "}
              </p>
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="https://media.istockphoto.com/id/862579086/photo/family-enjoying-restaurant.jpg?s=612x612&w=is&k=20&c=OgX6CVb592epZwgS5yM4J5RyrG5maYuml1fzcDcLY7c="
              />
            </div>
            <h2 class="text-4xl font-medium title-font text-orange-600 mt-5">
              Restaurant meals: How to make them healthier
            </h2>
            <p class="text-lg leading-relaxed text-left mt-2">
              Dine without worry by watching portion sizes, ingredients, side
              dishes, and sauces.
              <br /> <br /> You've probably heard that eating out, even in the
              best restaurants, can ruin the healthiest diets. Fine cuisine is
              known for overdoing it in the butter, sugar, and salt departments.
              But you can enjoy a meal on the town if you follow a few handy
              tips. "Eating out can be a true pleasure and a time to enjoy
              family and friends. If you plan ahead and make a few adjustments,
              it can be a wonderful and healthful experience," says registered
              dietitian Kathy McManus, director of the Department of Nutrition
              for Harvard-affiliated Brigham and Women's Hospital.
            </p>
          </div>
          <div class="p-4  sm:mb-0 mb-6 bg-orange-50 text-left border-l-4 border-orange-600 mt-12  mx-8 ">
            <h4>
              “Every moment nature is serving fresh dishes with the items of
              happiness. It is our choice to recognize and taste it.”
              <br />
              <font class="text-orange-700 text-lg ">
                ― Amit Ray, Mindfulness Living in the Moment - Living in the
                Breath
              </font>
            </h4>
          </div>
          <div className="p-4  sm:mb-0 mb-6 my-8 ">
            <h3 className="text-4xl text-orange-600 mb-6">
              Customer satisfaction in restaurants
            </h3>
            <div className="flex  mr-8">
              <div className="text-left text-lg">
                <p>
                  <font class=" border-4 border-orange-600 rounded-full mr-2 " />
                  Results showed that perceived price, food, service, and
                  physical environment quality positively affected customer
                  satisfaction.
                </p>
                <p>
                  <font class=" border-4 border-orange-600 rounded-full mr-2 " />
                  Perceived price can significantly influence customers'
                  judgement of the quality dimensions of a restaurant.
                </p>
                <p>
                  <font class=" border-4 border-orange-600 rounded-full mr-2 " />
                  Moreover, customer satisfaction and happiness can lead to a
                  sense of loyalty.
                </p>
                <p>
                  <font class=" border-4 border-orange-600 rounded-full mr-2 " />
                  Make sure that you consistently speak with guests, address
                  unclean or untidy areas, and ask guests for feedback.
                </p>
              </div>
              <div>
                <img
                  alt="content"
                  class="object-cover  h-72 w-96 ml-8"
                  src="https://media.istockphoto.com/id/1146022859/photo/happy-waiters-serving-food-to-their-guests-in-a-restaurant.jpg?s=170667a&w=0&k=20&c=ZOddSWDOkQKvS5zk5-xoMSoMW1JZcVyXg2MHpXySH6k="
                />
              </div>
            </div>
            <p className="text-lg text-left mt-4">
              As a restaurant owner, you need to find an online booking system
              that suits your restaurant's needs. What matters the most to you?
              Price? Usability? Or maybe you are looking for specific features
              that makes it easier for you to manage tables and reservations -
              or maybe its a mix of all three. You have to find the best booking
              system for you.
            </p>

            <div className="flex object-cover space-x-12 mx-8 mt-10 w-80 h-80">
              <img
                src="https://th.bing.com/th/id/OIP.aUbmDfp7fHKHCpgIggYMYwHaE7?w=248&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                alt=""
              />
              <img
                src="https://th.bing.com/th/id/OIP.o1drh5ghkHaBta-rFIHpDgHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                alt=""
              />
            </div>
          </div>
        </section>

        <div className="md:w-1/3 mt-10">
          <div className="bg-[url('https://th.bing.com/th/id/OIP.8I-GkKuqTkoYn17lwnS83gHaE8?pid=ImgDet&rs=1')] h-96  space-y-10">
            <h3 className="text-3xl text-orange-700 pt-16">Reserve</h3>
            <h2 className="text-orange-50">For Your Private Event</h2>
            <button
              onClick={handleOnClick}
              className="h-10 w-40 text-orange-300 border-2 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Book A Table
            </button>
          </div>
          <div className="bg-orange-50 w-full mt-20 ">
            <h4 className="text-orange-600 text-left ml-4 mt-4 -mb-8">
              Resent Post
            </h4>
            <Swiper
              effect={"flip"}
              grabCursor={true}
              pagination={true}
              navigation={true}
              loop={true}
              modules={[EffectFlip, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="https://media.istockphoto.com/id/862579086/photo/family-enjoying-restaurant.jpg?s=612x612&w=is&k=20&c=OgX6CVb592epZwgS5yM4J5RyrG5maYuml1fzcDcLY7c="
                  alt=""
                  style={{ height: "300px" }}
                />
                <p className=" text-lg text-orange-600 mt-4">
                  Eat Healthy Food and enjoy a Day with Family
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://media.istockphoto.com/id/1146022859/photo/happy-waiters-serving-food-to-their-guests-in-a-restaurant.jpg?s=170667a&w=0&k=20&c=ZOddSWDOkQKvS5zk5-xoMSoMW1JZcVyXg2MHpXySH6k="
                  alt=""
                  style={{ height: "300px" }}
                />
                <p className=" text-lg text-orange-600 mt-4">
                  Too Serve Food Customer with Happiness
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://c.ndtvimg.com/2020-03/h4tu9i0g_eating-out_625x300_13_March_20.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886"
                  alt=""
                  style={{ height: "300px" }}
                />
                <p className=" text-lg text-orange-600 mt-4">
                  {" "}
                  Eat Some Delicious Food & Enjoy Party
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://media.istockphoto.com/id/862579086/photo/family-enjoying-restaurant.jpg?s=612x612&w=is&k=20&c=OgX6CVb592epZwgS5yM4J5RyrG5maYuml1fzcDcLY7c="
                  alt=""
                  style={{ height: "300px" }}
                />
                <p className=" text-lg text-orange-600 mt-4">
                  Eat Healthy Food and enjoy a Day with Family
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://media.istockphoto.com/id/1146022859/photo/happy-waiters-serving-food-to-their-guests-in-a-restaurant.jpg?s=170667a&w=0&k=20&c=ZOddSWDOkQKvS5zk5-xoMSoMW1JZcVyXg2MHpXySH6k="
                  alt=""
                  style={{ height: "300px" }}
                />
                <p className=" text-lg text-orange-600 mt-4">
                  Too Serve Food Customer with Happiness
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://c.ndtvimg.com/2020-03/h4tu9i0g_eating-out_625x300_13_March_20.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886"
                  alt=""
                  style={{ height: "300px" }}
                />
                <p className=" text-lg text-orange-600 mt-4">
                  {" "}
                  Eat Some Delicious Food & Enjoy Party
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="bg-orange-50  mt-20 h-96">
            <h4 className="text-left ml-12 pt-16 -mb-8">Category:</h4>

            <div className="mt-16 text-lg text-orange-600 text-left ml-20  ">
              <p className="hover:text-blue-600" onClick={redirectToPost1}>
                Table Booking .......
              </p>
              <p className="hover:text-blue-600" onClick={redirectToPost1}>
                Food ......
              </p>
              <p className="hover:text-blue-600" onClick={redirectToPost1}>
                Healthy ......
              </p>
              <p className="hover:text-blue-600" onClick={redirectToPost1}>
                Dessert ......
              </p>
              <p className="hover:text-blue-600" onClick={redirectToPost1}>
                Modern Life .......
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
