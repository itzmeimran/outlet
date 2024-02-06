import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Index() {
  const nestedRoutes = [
    { name: "Details", path: "details" },
    { name: "Contact Us", path: "contactUs" },
    { name: "Skills", path: "skills" },
  ];
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          border: "1px solid black",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {nestedRoutes.map((item, index) => (
          <li
            key={index}
            style={{
              border: "1px solid black",
              padding: ".8rem 1.3rem",
              listStyle: "none",
            }}
          >
            <NavLink
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to={item.path}
              activeClassName="active"
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </div>
      <div
        style={{
          border: "1px solid black",
          flex: "4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Index;
