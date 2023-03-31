// import React from "react";
import { MdOutlineTableBar } from "react-icons/md";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import Carousel from "react-bootstrap/Carousel";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import StarIcon from "@mui/icons-material/Star";
import p1 from './Image/p1.jpg';
import hotel from './Image/hotel.jpg';
import ffood from './Image/ffood.jpg';
import party from './Image/party.jpg';


export default function About() {
  return (
    <div>
      <div className=" bg-[url('./Image/about.jpg')] w-full h-96 ">
        <h1 className="text-7xl text-orange-500 justify-center pt-40">
          About Us
        </h1>
      </div>

      <div>
        <h2 className="underline text-4xl text-orange-600 mt-4 font-bold">
          Who we Are
        </h2>
        <p className="text-2xl mt-4 italic">
          A restaurant with a menu and table book that will make your mouth
          water.
          <br /> Servicing delicious food , enjoy our seasonal menu and
          experience the beauty of naturalness.
        </p>
      </div>

      <section class="text-orange-700 body-font font-serif">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-orange-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <p className="text-left  text-lg">
                  Lorem Ipsum is simply dummy text of the printingand
                  typesetting industry lorem Ipsum has been the industrys
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled it to make a type specimen
                  book It has survived.
                </p>
                <h4 className="text-left text-xl text-black">
                  -Intership Students
                </h4>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              {/* <div class="h-full bg-orange-50 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"> */}
              <img
                src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/h/i/p4225-164561204962160c11721f9.jpg?tr=tr:n-xlarge"
                alt="pic"
                style={{ height: "550px" }}
              />
              {/* </div> */}
            </div>
            <div class="p-4 lg:w-1/3 ">
              <div class="h-full bg-orange-100 border-2 border-orange-500  bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h4 className=" text-xl text-black">Open Day</h4>
                <p className="text-lg">Monday to Sunday</p>

                <h4 className=" text-xl text-black mt-8">Service Time</h4>
                <p className="text-lg">24/7</p>

                <h4 className=" text-xl text-black mt-8">Booking Time</h4>
                <p className="text-lg">At least before 3 hour</p>

                <h4 className=" text-xl text-black mt-8">Contact Us</h4>
                <p className="text-lg">+91 9510302121</p>
                <p className="text-lg">tablemate2023@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-between text-orange-600 mx-32">
        <div>
          <h3 className="text-4xl ">500+</h3>
          <p className="text-xl text-black">Daily Booking</p>
        </div>
        <div>
          <h3 className="text-4xl">50+</h3>
          <p className="text-xl text-black">Register Restaurant</p>
        </div>
        <div>
          <h3 className="text-4xl">15+</h3>
          <p className="text-xl text-black">Expert People</p>
        </div>
        <div>
          <h3 className="text-4xl">5+</h3>
          <p className="text-xl text-black">Award Win</p>
        </div>
      </section>

      <div className="bg-orange-100 ">
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center mt-12">
            <div class="lg:max-w-lg  md:w-2/5 w-4/5 mb-10 md:mb-0 -rotate-45">
              <div className=" grid gap-4 grid-cols-2 grid-rows-2 hover:scale-90">
                <img
                  class="object-cover object-center rounded-2xl  h-48 "
                  alt="hero"
                  src="https://th.bing.com/th/id/OIP.hoAGApvKyTH_NMdQaoi_xgHaE7?pid=ImgDet&rs=1"
                />
                <img
                  class="object-cover object-center rounded-2xl  h-48 "
                  alt="hero"
                  src="https://th.bing.com/th/id/OIP.cUoM5uAveUz1jgzXNUM8RQHaFI?w=281&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                />
                <img
                  class="object-cover object-center rounded-2xl  h-48 "
                  alt="hero"
                  src="https://theovenmarket.com/wp-content/uploads/2020/09/image-1980x1321.jpg"
                />
                <img
                  class="object-cover object-center rounded-2xl  h-48 "
                  alt="hero"
                  src="https://www.wallpaperup.com/uploads/wallpapers/2015/07/24/761315/8934af0e1ee17e0f134b4b95b8ea9043.jpg"
                />
              </div>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 ml-8 flex flex-col md:items-start md:text-left items-center text-center">
              <p class="text-orange-600 text-xl font-bold">
                35 YEAR OF EXPERIENCE
              </p>
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Award Winning Restaurant
              </h1>
              <p class="mb-8 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printingand typesetting
                industry lorem Ipsum has been the industrys standard dummy text
                ever since the when an unknown printer took a galley of type.
              </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Meet our Team
                </button>
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <p class="text-orange-600 text-xl font-bold">
                DELIGHTFUL EXPERIENCE
              </p>
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Dinner, Event or Party?
              </h1>
              <p class="mb-8 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printingand typesetting
                industry lorem Ipsum has been the industrys standard dummy text
                ever since the when an unknown printer took a galley of type.
              </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Discover Now
                </button>
              </div>
            </div>
            <div class="lg:max-w-lg  md:w-2/5 w-4/5 -rotate-45">
              <div className=" grid gap-4 grid-cols-2 grid-rows-2 hover:scale-90 translate-x-4 skew-y-3 md:transform-none">
                <img
                  class="object-cover object-center rounded-2xl  h-48 "
                  alt="hero"
                  src="https://th.bing.com/th/id/OIP.NEf4sfZkbvduQXN6JUbkKgHaE8?w=304&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                />
                <img
                  class="object-cover object-center rounded-2xl  h-48 "
                  alt="hero"
                  src="https://th.bing.com/th/id/OIP.Go6un0xRCCP4NgwMb8wMgwHaE7?w=294&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                />
                <img
                  class="object-cover object-center rounded-2xl  h-48 "
                  alt="hero"
                  src="https://th.bing.com/th/id/OIP.nDRUW6erw8rNcfSArwVjCAHaEK?pid=ImgDet&rs=1"
                />
                <img
                  class="object-cover object-center rounded-2xl  h-48 rotate-90"
                  alt="hero"
                  src="https://th.bing.com/th/id/OIP.Ysbu4RvOy53EYXykjLl4aQHaEo?w=314&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <h3 className="text-4xl font-bold mt-8 text-amber-700">Our Service</h3>
      <h1 className="text-5xl font-mono mt-8 text-gray-600">
        Exquisite Restaurant in City
      </h1>

      <section class="text-gray-600 body-font flex">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="flex-grow sm:text-right text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-xl  title-font font-medium mb-2">
                Fine Dining
              </h2>
              <p class="leading-relaxed text-sm">
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been.
              </p>
            </div>
            <div class=" sm:order-none order-first sm:w-20 sm:h-20 h-20 w-20  inline-flex hover:skew-y-12 items-center justify-center rounded-full bg-gray-600 text-orange-300 shadow-zinc-700 shadow-2xl flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="sm:w-16 sm:h-16 w-20 h-20 "
                viewBox="0 0 24 24"
              >
                <DinnerDiningIcon />
              </svg>
            </div>
          </div>
          <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div class="sm:w-20 sm:h-20 h-20 w-20 inline-flex hover:skew-y-12 items-center justify-center rounded-full bg-gray-600 text-orange-300 shadow-zinc-700 shadow-2xl flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="sm:w-24 sm:h-24 w-24 h-24 mt-6 ml-5"
                viewBox="0 0 24 24"
              >
                <MdOutlineTableBar />
              </svg>
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-xl title-font font-medium mb-2">
                Table Booking
              </h2>
              <p class="leading-relaxed text-sm">
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been.
              </p>
            </div>
          </div>
        </div>

        <div class=" px-1 py-24 mx-auto">
          <img
            src="https://i.pinimg.com/originals/b0/fd/ec/b0fdecb62b32352777d30ae55cc762f7.jpg"
            alt="pic"
            className="h-full"
          />
        </div>

        <div class="container px-5 py-24 mx-auto">
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="flex-grow sm:text-right text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-xl title-font font-medium mb-2">
                Good Service
              </h2>
              <p class="leading-relaxed text-sm">
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been.
              </p>
            </div>
            <div class=" sm:order-none order-first hover:skew-y-12 sm:w-20 sm:h-20 h-20 w-20  inline-flex items-center justify-center rounded-full bg-gray-600 text-orange-300 shadow-zinc-700 shadow-2xl flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="sm:w-16 sm:h-16 w-20 h-20 "
                viewBox="0 0 24 24"
              >
                <RestaurantIcon />
              </svg>
            </div>
          </div>
          <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div class="sm:w-20 sm:h-20 h-20 w-20 hover:skew-y-12  inline-flex items-center justify-center rounded-full bg-gray-600 text-orange-300 shadow-zinc-700 shadow-2xl flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="sm:w-16 sm:h-16 w-20 h-20 "
                viewBox="0 0 24 24"
              >
                <NightlifeIcon />
              </svg>
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-xl title-font font-medium mb-2">
                Banquets Hall
              </h2>
              <p class="leading-relaxed text-sm">
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div>
        <h3 className="text-4xl font-bold mt-4 text-amber-700">TESTIMONIALS</h3>
        <h1 className="text-5xl font-mono mt-8 text-gray-600">
          What People Are Saying
        </h1>

        <div className="bg-[url('./Image/about.jpg')] h-96 w-full mt-8">
          <Carousel fade>
            <Carousel.Item className="mt-4">
              <div className="flex justify-center ">
                <Card sx={{ maxWidth: 300 }} className="mx-4">
                  <CardActionArea>
                    <CardContent className="bg-orange-100">
                      <Typography gutterBottom variant="h5" component="div">
                        <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
                        <StarIcon />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <div className="flex justify-between mt-6 p-4">
                        <img
                          src="https://th.bing.com/th/id/OIP.uSdp0VqvQlsBuR9YpsvppwHaHa?pid=ImgDet&rs=1"
                          alt=""
                          className="h-24 w-24 rounded-full "
                        />
                        <div>
                          <h4>Tom barry</h4>
                          <p>Bhuyangdev</p>
                        </div>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 300 }} className="mx-4">
                  <CardActionArea>
                    <CardContent className="bg-orange-100">
                      <Typography gutterBottom variant="h5" component="div">
                        <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
                        <StarIcon />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <div className="flex justify-between mt-6 p-4">
                        <img
                          src="https://th.bing.com/th/id/OIP.k4MCvu9NiOAXVcvhVzUaygHaJv?w=146&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.71"
                          alt=""
                          className="h-24 w-24 rounded-full "
                        />
                        <div>
                          <h4>Jarry barry</h4>
                          <p>s.g.road</p>
                        </div>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 300 }} className="mx-4">
                  <CardActionArea>
                    <CardContent className="bg-orange-100">
                      <Typography gutterBottom variant="h5" component="div">
                        <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
                        <StarIcon />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <div className="flex justify-between mt-6 p-4">
                        <img
                          src="https://th.bing.com/th/id/OIP.oFd_nW_L5p3KXWrRBenWpwHaHo?w=180&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                          alt=""
                          className="h-24 w-24 rounded-full "
                        />
                        <div>
                          <h4>micky </h4>
                          <p>c.g.road</p>
                        </div>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Carousel.Item>

            <Carousel.Item className="mt-4">
              <div className="flex justify-center ">
                <Card sx={{ maxWidth: 300 }} className="mx-4">
                  <CardActionArea>
                    <CardContent className="bg-orange-100">
                      <Typography gutterBottom variant="h5" component="div">
                        <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
                        <StarIcon />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <div className="flex justify-between mt-6 p-4">
                        <img
                          src="https://3.bp.blogspot.com/-KuDycz6d2TY/VkoXyJj6InI/AAAAAAAAbas/APvwqOsmHfw/s1600/suneo-face-hd-wallpaper.jpg"
                          alt=""
                          className="h-24 w-24 rounded-full "
                        />
                        <div>
                          <h4>suneo</h4>
                          <p>science city</p>
                        </div>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 300 }} className="mx-4">
                  <CardActionArea>
                    <CardContent className="bg-orange-100">
                      <Typography gutterBottom variant="h5" component="div">
                        <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
                        <StarIcon />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <div className="flex justify-between mt-6 p-4">
                        <img
                          src="https://th.bing.com/th/id/OIP.JjMiahQ_V7Pr3VESkGZMmwHaJz?pid=ImgDet&rs=1"
                          alt=""
                          className="h-24 w-24 rounded-full "
                        />
                        <div>
                          <h4>doraemon</h4>
                          <p>chankheda</p>
                        </div>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 300 }} className="mx-4">
                  <CardActionArea>
                    <CardContent className="bg-orange-100">
                      <Typography gutterBottom variant="h5" component="div">
                        <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
                        <StarIcon />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <div className="flex justify-between mt-6 p-4">
                        <img
                          src="https://th.bing.com/th/id/OIP.0400y4fs1QDsYtR5VFv8ZwHaHk?w=193&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                          alt=""
                          className="h-24 w-24 rounded-full "
                        />
                        <div>
                          <h4>shizuka</h4>
                          <p>gota</p>
                        </div>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Carousel.Item>

            <Carousel.Item className="mt-4">
              <div className="flex justify-center ">
                <Card sx={{ maxWidth: 300 }} className="mx-4">
                  <CardActionArea>
                    <CardContent className="bg-orange-100">
                      <Typography gutterBottom variant="h5" component="div">
                        <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
                        <StarIcon />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <div className="flex justify-between mt-6 p-4">
                        <img
                          src="https://www.pngfind.com/pngs/m/162-1629371_19608-nobita-nobita-doraemon-hd-png-download.png"
                          alt=""
                          className="h-24 w-24 rounded-full "
                        />
                        <div>
                          <h4>lobita</h4>
                          <p>nava vadaj</p>
                        </div>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 300 }} className="mx-4">
                  <CardActionArea>
                    <CardContent className="bg-orange-100">
                      <Typography gutterBottom variant="h5" component="div">
                        <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
                        <StarIcon />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <div className="flex justify-between mt-6 p-4">
                        <img
                          src="https://th.bing.com/th/id/OIP.OWWbMO_lUl0s28_old5DbwAAAA?w=188&h=331&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                          alt=""
                          className="h-24 w-24 rounded-full "
                        />
                        <div>
                          <h4>daisy duck</h4>
                          <p>new ranip</p>
                        </div>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 300 }} className="mx-4">
                  <CardActionArea>
                    <CardContent className="bg-orange-100">
                      <Typography gutterBottom variant="h5" component="div">
                        <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
                        <StarIcon />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <div className="flex justify-between mt-6 p-4">
                        <img
                          src="https://th.bing.com/th/id/OIP.1qq5gADluAc9PdW67rOMMwHaPv?pid=ImgDet&w=800&h=1701&rs=1"
                          alt=""
                          className="h-24 w-24 rounded-full "
                        />
                        <div>
                          <h4>minnie</h4>
                          <p>Ranip</p>
                        </div>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <h5 className="text-3xl font-bold mt-4 text-amber-700">WHY CHOOSE US</h5>
      <h1 className="text-5xl font-mono mt-8 text-gray-600">Our Strength</h1>

      <div className=" flex text-xl font-bold text-white justify-center flex-wrap">
        <div>
        <img src={p1} alt='' className="mx-3 h-80 w-64" />
        <p class="absolute  ml-4  bg-yellow-700  w-64 h-12">Table Booking</p>
        </div>
        <div>
        <img src={hotel} alt='' className="mx-3 h-80 w-64"/>
        <p class="absolute   ml-4 bg-yellow-700  w-64 h-12">Good Restaurant</p>
        </div>
        <div>
        <img src={ffood} alt='' className="mx-3 h-80 w-64 "/>
        <p class="absolute  ml-4  bg-yellow-700  w-64 h-12">Satisfy Service</p>
        </div>
        <div >
        <img src={party} alt='' className="mx-3 h-80 w-64 "/>
        <p class="absolute  ml-4  bg-yellow-700 w-64 h-12 ">Event & Party</p>
        </div>
      </div>

    </div>
  );
}
