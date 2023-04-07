import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";
import Navbar from "./Navbar";
import Foodmenu from "./Foodmenu";
import Slider from "./Slider";
import Bill from "./Bill";
// import Table from "./Table";
import Post1 from "./Post1";
import Mango from "./Mango";
import Fill from "./Fill";
import Gallerym from "./Gallerym";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Slider/> */}
        <Mango/>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          <Route path="/bill" element={<Bill/>} />
          <Route path="/post1" element={<Post1/>} />
          <Route path="/fill" element={<Fill/>} />
          <Route path="/mango" element={<Mango/>} />
          <Route path="/foodmenu" element={<Foodmenu/>} />
          <Route path="/gallerym" element={<Gallerym/>} />
          <Route path="/slider" element={<Slider/>} />

        </Routes>
       {/* <Table/> */}
        {/* <Foodmenu /> */}
      </Router>
    </div>
  );
}
export default App;
