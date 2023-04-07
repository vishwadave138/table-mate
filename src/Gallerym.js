import * as React from 'react';
import Restaurant1 from "./Image/Restaurant1.jpg";
import restaurantable2 from "./Image/restaurantable1.jpg";
import restaurantable1 from "./Image/restaurantable2.jpg";
import restaurantfood1 from "./Image/restaurantfood1.jpg";
import restaurantfood2 from "./Image/restaurantfood2.jpg";
import m1 from "./Image/m1.jpg";
import m2 from "./Image/m2.jpg";
import m3 from "./Image/m3.jpg";
import m4 from "./Image/m4.jpg";
import m5 from "./Image/m5.webp";
import m6 from "./Image/m6.webp";
import m7 from "./Image/m7.webp";
import dessert1 from "./Image/dessert1.jpg";
import gozleme from "./Image/gozleme.jpg";
import pizza1 from "./Image/pizza1.jpg";
import turkish from "./Image/turkish.jpg";
import Dialog from '@mui/material/Dialog';
// import ListItemText from '@mui/material/ListItemText';
// import ListItem from '@mui/material/ListItem';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Transition = React.forwardRef(function Transition(
  props:TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Gallerym() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
    <div onClick={handleClickOpen} className='grid gap-2 grid-cols-4 ml-8 my-4 space-y-3 grid-rows-3  '>
        <img src={Restaurant1} alt='' className='h-60 w-64 mt-2.5 hover:opacity-60'/>
        <img src={turkish} alt='' className='h-60 w-64 hover:opacity-60'/>
        <img src={restaurantable1} alt='' className='h-60 w-64 hover:opacity-60'/>
        <img src={restaurantfood1} alt='' className='h-60 w-64 hover:opacity-60'/>
        <img src={restaurantfood2} alt='' className='h-60 w-64 hover:opacity-60'/>
        <img src={restaurantable2} alt='' className='h-60 w-64 hover:opacity-60'/>
        <img src={m1} alt='' className='h-60 w-64 hover:opacity-60'/>
        <img src={gozleme} alt='' className='h-60 w-64 hover:opacity-60'/>
        <img src={m2} alt='' className='h-60 w-64 hover:opacity-60'/>
        <img src={m3} alt='' className='h-60 w-64 hover:opacity-60'/>
        <img src={m4} alt='' className='h-60 w-64 hover:opacity-60'/>
        <img src={pizza1} alt='' className='h-60 w-64 hover:opacity-60'/>
        <img src={m5} alt='' className='h-60 w-64 hover:opacity-60'/>
        <img src={dessert1} alt='' className='h-60 w-64 hover:opacity-60'/>
        <img src={m6} alt='' className='h-60 w-64 hover:opacity-60'/>
        <img src={m7} alt='' className='h-60 w-64 hover:opacity-60'/>
    </div>
    <div className=''>
      <Dialog
      fullScreen
        style={{height:'550px',width:'750px' }}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }} className='bg-white shadow-none'>
          <Toolbar>
            <IconButton
              edge="start"
              color="blue"
              onClick={handleClose}
              aria-label="close"
              
            >
              <CloseIcon />
            </IconButton>

           
          </Toolbar>
        </AppBar>
        <div class="lg:w-4/5 mx-auto ">
            <Carousel style={{ width: "600px", height: "400px" }}>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={Restaurant1}
                  alt="First slide"
                  style={{ width: "600px", height: "400px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={turkish}
                  alt="Second slide"
                  style={{ width: "600px", height: "400px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={restaurantable1}
                  alt="Third slide"
                  style={{ width: "600px", height: "400px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={restaurantable2}
                  alt="Third slide"
                  style={{ width: "600px", height: "400px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={restaurantfood1}
                  alt="Third slide"
                  style={{ width: "600px", height: "400px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={restaurantfood2}
                  alt="Third slide"
                  style={{ width: "600px", height: "400px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={m1}
                  alt="Third slide"
                  style={{ width: "600px", height: "400px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={m2}
                  alt="Third slide"
                  style={{ width: "600px", height: "400px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={m3}
                  alt="Third slide"
                  style={{ width: "600px", height: "400px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={m4}
                  alt="Third slide"
                  style={{ width: "600px", height: "400px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={m5}
                  alt="Third slide"
                  style={{ width: "600px", height: "400px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={m6}
                  alt="Third slide"
                  style={{ width: "600px", height: "400px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={m7}
                  alt="Third slide"
                  style={{ width: "600px", height: "400px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={gozleme}
                  alt="Third slide"
                  style={{ width: "600px", height: "400px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={pizza1}
                  alt="Third slide"
                  style={{ width: "600px", height: "400px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={dessert1}
                  alt="Third slide"
                  style={{ width: "600px", height: "400px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={turkish}
                  alt="Third slide"
                  style={{ width: "600px", height: "400px" }}
                />
              </Carousel.Item>
            </Carousel>
          </div> 
       
      </Dialog>
    </div>
    </div>
  )
}
