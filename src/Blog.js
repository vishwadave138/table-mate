import React from "react";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();
  const redirectToPost1 = () => {
    //Redirect to the python page
    navigate("/post1");
  };

  return (
    <div>
      <div className=" bg-[url('https://thumbs.dreamstime.com/z/preparing-cooking-spices-vegetables-kitchen-board-top-view-free-space-your-text-rustic-style-164635861.jpg')] w-full h-screen bg-cover aboulate  ">
        <h1 className="text-amber-400  text-7xl font-serif font-bold  text-right pt-60  mr-28">
          Blog
        </h1>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-4 py-20 mx-auto ">
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-xl shadow-slate-300">
              <div class="rounded-lg h-64 overflow-hidden">
                <p className="absolute bg-green-500 mt-7 text-white w-24">
                  {" "}
                  3 april, 2023{" "}
                </p>
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://media.istockphoto.com/id/862579086/photo/family-enjoying-restaurant.jpg?s=612x612&w=is&k=20&c=OgX6CVb592epZwgS5yM4J5RyrG5maYuml1fzcDcLY7c="
                />
              </div>
              <h2 class="text-xl font-medium title-font text-orange-600 mt-5">
                Eat Healthy Food and enjoy a Day with Family
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <h6
                class="text-indigo-500 inline-flex items-center mt-3 hover:text-orange-50 hover:bg-teal-500"
                onClick={redirectToPost1}
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </h6>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-xl shadow-slate-300">
              <div class="rounded-lg h-64 overflow-hidden">
                <p className="absolute bg-green-500 mt-7 text-white w-24">
                  {" "}
                  3 april, 2023{" "}
                </p>
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://media.istockphoto.com/id/1146022859/photo/happy-waiters-serving-food-to-their-guests-in-a-restaurant.jpg?s=170667a&w=0&k=20&c=ZOddSWDOkQKvS5zk5-xoMSoMW1JZcVyXg2MHpXySH6k="
                />
              </div>
              <h2 class="text-xl font-medium title-font text-orange-600 mt-5">
                Too Serve Food Customer with Happiness
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <h6
                class="text-indigo-500 inline-flex items-center mt-3  hover:text-orange-50 hover:bg-teal-500"
                onClick={redirectToPost1}
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </h6>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-xl shadow-slate-300">
              <div class="rounded-lg h-64 overflow-hidden">
                <p className="absolute bg-green-500 mt-7 text-white w-24">
                  {" "}
                  3 april, 2023{" "}
                </p>
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://c.ndtvimg.com/2020-03/h4tu9i0g_eating-out_625x300_13_March_20.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886"
                />
              </div>
              <h2 class="text-xl font-medium title-font text-orange-600 mt-5">
                Eat Some Delicious Food & Enjoy Party
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <h6
                class="text-indigo-500 inline-flex items-center mt-3 hover:text-orange-50 hover:bg-teal-500"
                onClick={redirectToPost1}
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </h6>
            </div>
          </div>
        </div>
        <div class="container px-4 pb-20 mx-auto ">
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-xl shadow-slate-300">
              <div class="rounded-lg h-64 overflow-hidden">
                <p className="absolute bg-green-500 mt-7 text-white w-24">
                  {" "}
                  3 april, 2023{" "}
                </p>
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://media.istockphoto.com/id/862579086/photo/family-enjoying-restaurant.jpg?s=612x612&w=is&k=20&c=OgX6CVb592epZwgS5yM4J5RyrG5maYuml1fzcDcLY7c="
                />
              </div>
              <h2 class="text-xl font-medium title-font text-orange-600 mt-5">
                Eat Healthy Food and enjoy a Day with Family
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <h6
                class="text-indigo-500 inline-flex items-center mt-3 hover:text-orange-50 hover:bg-teal-500"
                onClick={redirectToPost1}
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </h6>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-xl shadow-slate-300">
              <div class="rounded-lg h-64 overflow-hidden">
                <p className="absolute bg-green-500 mt-7 text-white w-24">
                  {" "}
                  3 april, 2023{" "}
                </p>
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://media.istockphoto.com/id/1146022859/photo/happy-waiters-serving-food-to-their-guests-in-a-restaurant.jpg?s=170667a&w=0&k=20&c=ZOddSWDOkQKvS5zk5-xoMSoMW1JZcVyXg2MHpXySH6k="
                />
              </div>
              <h2 class="text-xl font-medium title-font text-orange-600 mt-5">
                Too Serve Food Customer with Happiness
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <h6
                class="text-indigo-500 inline-flex items-center mt-3  hover:text-orange-50 hover:bg-teal-500"
                onClick={redirectToPost1}
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </h6>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-xl shadow-slate-300">
              <div class="rounded-lg h-64 overflow-hidden">
                <p className="absolute bg-green-500 mt-7 text-white w-24">
                  {" "}
                  3 april, 2023{" "}
                </p>
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://c.ndtvimg.com/2020-03/h4tu9i0g_eating-out_625x300_13_March_20.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886"
                />
              </div>
              <h2 class="text-xl font-medium title-font text-orange-600 mt-5">
                Eat Some Delicious Food & Enjoy Party
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <h6
                class="text-indigo-500 inline-flex items-center mt-3 hover:text-orange-50 hover:bg-teal-500"
                onClick={redirectToPost1}
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
