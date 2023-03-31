import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";
import Navbar from "./Navbar";
// import Searchbar from "./Searchbar";
// import Foodmenu from "./Foodmenu";
import Slider from "./Slider";
import Bill from "./Bill";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {CartProvider} from "react-use-cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Slider/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          <Route path="/bill" element={<Bill/>} />
        </Routes>
        {/* <Searchbar /> */}
       
        {/* <Foodmenu /> */}
      </Router>
    </div>
  );
}
export default App;
