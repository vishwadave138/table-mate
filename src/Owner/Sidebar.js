import React, { useState } from "react";
import './Owner.css'
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/owner1",
      name: "Owner1",
      icon: <FaTh />,
    },
    {
      path: "/foodmenu",
      name: "Menu",
      icon: <FaUserAlt />,
    },
    {
      path: "/booking",
      name: "Booking",
      icon: <FaRegChartBar />,
    },
    {
      path: "/pay",
      name: "Payment History",
      icon: <FaCommentAlt />,
    },
    {
      path: "/sapost",
      name: "Post Blog or Image",
      icon: <FaCommentAlt />,
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

export default Sidebar;
