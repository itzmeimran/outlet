import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About/Index";
import Testimonial from "../Pages/Testimonial";
import { NavLink, Route, Routes } from "react-router-dom";
function Navbar() {
  const routes = [
    { name: "Home", path: "/", element: <Home /> },
    { name: "About", path: "/about", element: <About /> },
    { name: "Testimonial", path: "/testimonial", element: <Testimonial /> },
  ];
  return (
    <nav>
      <ul
        style={{
          border: "1px solid black",
          textDecoration: "none",
          display: "flex",
          gap: "1rem",
          padding: "1rem",
          listStyle: "none",
        }}
      >
        {routes.map((item, index) => (
          <li key={index}>
            <NavLink
              style={{ textDecoration: "none", fontWeight: "bold" }}
              to={item.path}
              activeClassName="active"
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
