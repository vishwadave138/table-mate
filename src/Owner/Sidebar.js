import React, { useState } from "react";
import './Owner.css'
import {
  // FaTh,
  FaBars,
  FaUserAlt,
  FaCookieBite,
  FaIdBadge,
  FaMailBulk,
  FaLocationArrow,
  FaPlus,
  // FaRegChartBar,
  // FaCommentAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/owner1",
      name: "Owner1",
      icon: <FaUserAlt />,
    },
    {
      path: "/menu",
      name: "Menu",
      icon: <FaCookieBite />,
    },
    {
      path: "/booking",
      name: "View Booking",
      icon: <FaIdBadge />,
    },
    {
      path: "/feedback",
      name: "Feedback",
      icon: <FaMailBulk />,
    },
    {
      path: "/sapost",
      name: "Post Blog or Image",
      icon: <FaLocationArrow />,
    },
    {
      path: "/addup",
      name: "Add or Update Menu",
      icon: <FaPlus />,
    },
  ];
  return (
    <div className="container1">
      <div style={{ width: isOpen ? "330px" : "50px" }} className="sidebar">
        <div className="top_section">
          <div style={{ marginLeft: isOpen ? "80px" : "0px" }} className="bars">
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
