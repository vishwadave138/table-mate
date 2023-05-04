import React, { useState } from "react";
import Foodimages from "../Foodimages";
import "./Menu.css";
// import * as React from 'react';
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle1 from "@mui/material/DialogTitle";

import { FaTrashAlt } from "react-icons/fa";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitle1Props {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;
  const { children1, onClose1, ...other1 } = props;

  return (
    <div>
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
    <DialogTitle1 sx={{ m: 0, p: 2 }} {...other1}>
      {children1}
      {onClose1 ? (
        <IconButton
          aria-label="close"
          onClick={onClose1}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle1>

    </div>
    
  );
}


export default function Menu() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [select, setSelect] = useState();

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };
  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
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
      <div>
        <h1 className="text-3xl italic  mt-4 text-center ml-20 ">Food Menu</h1>
      </div>

      <div className="flex justify-between mx-4 cursor-pointer">
        <h6
          onClick={handleClickOpen}
          className="font-semibold mx-2 border-2 border-orange-500 bg-orange-500 rounded-md text-xl text-white "
        >
          <font className="text-xl font-bold">+</font> Add New Categories
        </h6>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Add Category
          </BootstrapDialogTitle>

          <div className="">
            <lable className="mx-2  text-lg">New Category</lable>
            <br />
            <input
              type="name"
              className="border border-gray-400 w-60 mx-2 rounded-md h-8  "
              placeholder=" Add New Category"
            />
          </div>

          <div className="text-end ">
            <button
              autoFocus
              onClick={handleClose}
              className="text-orange-600 hover:bg-blue-600 hover:text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </BootstrapDialog>
        
        <div className="flex">
          <h6
            onClick={handleClickOpen1}
            className="mx-2 border-2 border-orange-500 bg-orange-500 rounded-md text-xl text-white"
          >
            Add
          </h6>
          <BootstrapDialog
            onClose={handleClose1}
            aria-labelledby="customized-dialog-title"
            open={open1}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose1}
            >
              New Food item
            </BootstrapDialogTitle>

            <div>
              <div>
                <label>
                  + Add Images
                  <span>up to 10 images</span>
                  <input
                    type="file"
                    name="images"
                    onChange={onSelectFile}
                    multiple
                    accept="image/png , image/jpeg, image/webp"
                  />
                </label>
                <br />

                {/* <input type="file" multiple /> */}

                {selectedImages.length > 0 &&
                  (selectedImages.length > 10 ? (
                    <p className="error">
                      You can't upload more than 10 images! <br />
                      <span>
                        please delete <b> {selectedImages.length - 10} </b> of
                        them{" "}
                      </span>
                    </p>
                  ) : (
                    <button
                      className="mx-48"
                      onClick={() => {
                        console.log(selectedImages);
                      }}
                    >
                      UPLOAD {selectedImages.length} IMAGE
                      {selectedImages.length === 1 ? "" : "S"}
                    </button>
                  ))}
                <div className="images">
                  {selectedImages &&
                    selectedImages.map((image, index) => {
                      return (
                        <div key={image} className="image">
                          <img
                            src={image}
                            height="250"
                            width="250"
                            alt="upload"
                            className="mx-36"
                          />
                          <div className="flex justify-center text-xl">
                            <button onClick={() => deleteHandler(image)}>
                              <FaTrashAlt className=" hover:text-orange-600" />
                            </button>

                            <p className="mt-3 ml-10 text-orange-600">
                              No. of image:- {index + 1}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="flex mt-3 mx-2">
                <p className="text-lg">Food Category</p>
                <select
                  value={select}
                  onChange={(e) => setSelect(e.target.value)}
                  className="border border-gray-400 w-72 mx-2.5 rounded-md h-8 ml-10"
                  
                >
                  <option >Select Food Category</option>
                  <option>Starters</option>
                  <option>sharing Platters</option>
                  <option>Salads</option>
                  <option>Accompaniments</option>
                  <option>The more known Beverages</option>
                  <option>Artisan Pizzas</option>
                  <option>Try the world</option>
                  <option>Pasta Fatta In-Casa</option>
                  <option>Piping Hot Casseroles</option>
                  <option>Across the Great Wall</option>
                  <option>Main Course Indian</option>
                  <option>Dal & Rice</option>
                  <option>Biryaani</option>
                  <option>Comfort Food</option>
                  <option>Indian Breads</option>
                  <option>Sweets</option>
                  <option>Desserts</option>
                </select>
              </div>
              <div className="mt-1">
                <lable className="mx-2  text-lg"> Food Name</lable>
                <input
                  type="name"
                  className="border border-gray-400 w-72  ml-14 mr-2 rounded-md h-8  "
                  placeholder=" Enter Food Name"
                />
              </div>
              <div className="mt-3">
                <lable className="mx-2  text-lg "> Food Description </lable>
                <input
                  type="text"
                  className="border border-gray-400 w-72 mx-2.5 rounded-md h-8  "
                  placeholder=" Enter Food Description"
                />
              </div>
              <div className="mt-3">
                <lable className="mx-2  text-lg"> Price</lable>
                <input
                  type="price"
                  className="border border-gray-400 w-72 mr-2 ml-28 rounded-md h-8  "
                  placeholder=" Enter Food Price"
                />
              </div>
            </div>

            <div className="text-end ">
              <button
                autoFocus
                onClick={handleClose1}
                className="text-orange-600 hover:bg-blue-600 hover:text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </BootstrapDialog>

          <h6 className="mx-2 border-2 border-orange-500 bg-orange-500 rounded-md text-xl text-white">
            Update
          </h6>
          <h6 className="mx-2 border-2 border-orange-500 bg-orange-500 rounded-md text-xl text-white">
            Remove
          </h6>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div className="menu">
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

        <div className="grid gap-6 grid-cols-4 grid-rows-3 ">
          {img.map((value) => {
            return (
              <div
                className="ip"
                class="shadow-xl shadow-gray-500 rounded-lg h-full w-48 hover:bg-gray-600 hover:text-white"
              >
                <img
                  src={value.pic}
                  alt=" "
                  className="h-28 w-32 rounded-2xl ml-8 mt-2"
                />
                <div className="-space-y-0.5">
                  <h1 className="text-lg font-bold">{value.name}</h1>
                  <p class="text-xs">{value.decrip}</p>
                  <h3 className="text-lg font-bold">₹ {value.price}/-</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
