import React, { useState } from "react";
import './Superad.css'
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Superad = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/rrequest",
      name: "Restaurant Register Request",
      icon: <FaTh />,
    },
    {
      path: "/rdetails",
      name: "Restaurants Details",
      icon: <FaUserAlt />,
    },
    {
      path: "/udetails",
      name: "Users Details",
      icon: <FaRegChartBar />,
    },
    
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Superad;

