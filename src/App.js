import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";
import Navbar from "./Navbar";
import Foodmenu from "./Foodmenu";
import Slider from "./Slider";
import Bill from "./Bill";
import Table from "./Table";
import Post1 from "./Post1";
import Mango from "./Mango";
import Fill from "./Fill";
import Gallerym from "./Gallerym";
import Payment from "./Payment";
import Orf from "./Orf";
import Footer from "./Footer";
import Dashbord from "./Owner/Dashbord";
import Sidebar from "./Owner/Sidebar";
import Owner1 from "./Owner/Owner1";
import Booking from "./Owner/Booking";
import Pay from "./Owner/Pay";
import SAPost from "./Owner/SAPost";
// import Superad from "./Superadmin/Superad";
import Rdetails from "./Superadmin/Rdetails";
import Udetails from "./Superadmin/Udetails";
import Rrequest from "./Superadmin/Rrequest";

// import Ownerpage from "./Owner/Ownerpage";

// import { Link } from "react-router-dom";
import Login from "./components/Login.components";
import Food from "./Food";
import Cart from "./Cart";
// import SignUp from './components/Signup.components'


// import ContextCart from "./ContextCart"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Slider/> */}
        {/* <Mango/> */}
        {/* <ContextCart/> */}
       
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          <Route path="/bill" element={<Bill />} />
          <Route path="/post1" element={<Post1 />} />
          <Route path="/fill" element={<Fill />} />
          <Route path="/mango" element={<Mango />} />
          <Route path="/foodmenu" element={<Foodmenu />} />
          <Route path="/gallerym" element={<Gallerym />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/table" element={<Table />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/orf" element={<Orf />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/owner1" element={<Owner1/>} />
          <Route path="/foodmenu" element={<Foodmenu />} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/sapost" element={<SAPost/>} />
          <Route path="/rdetails" element={<Rdetails />} />
          <Route path="/udetails" element={<Udetails />} />
          <Route path="/rrequest" element={<Rrequest />} />
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/ownerpage" element={<Ownerpage />} /> */}
       
          
          
        </Routes>
        {/* <Superad/> */}
        
       
     
        {/* <Orf/> */}
        {/* <Table/> */}
        {/* <Bill/> */}
        {/* <Foodmenu /> */}
        {/* <Login/> */}
        {/* <SignUp/> */}
        <Footer />
      </Router>
    </div>
  );
}
export default App;
