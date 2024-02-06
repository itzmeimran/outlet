import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Testimonial from "./Pages/Testimonial";
import Index from "./Pages/About/Index";
import Details from "./Pages/About/Details";
import ContactUs from "./Pages/About/ContactUs";
import Skills from "./Pages/About/Skills";
import Welcome from "./Pages/About/Welcome";
function App() {
  const routes = [
    { path: "/", element: <Home /> },
    {
      path: "/about",
      children: [
        { path: "/", element: <Index /> },
        { path: "/about/skills", element: <Skills /> },
        { path: "/about/details", element: <Details /> },
        { path: "/about/contactUs", element: <ContactUs /> },
      ],
    },
    { path: "/testimonial", element: <Testimonial /> },
  ];
  return (
    <div>
      <Navbar />
      {/* <Routes>
        {routes.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            element={
              item.children ? (
                <Routes>
                  {item.children.map((child, i) => (
                    <Route key={i} path={child.path} element={child.element} />
                  ))}
                </Routes>
              ) : (
                item.element
              )
            }
          />
        ))}
      </Routes> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Index />}>
          <Route path="" element={<Welcome />} />
          <Route path="details" element={<Details />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contactUs" element={<ContactUs />} />
        </Route>
        <Route path="testimonial" element={<Testimonial />} />
      </Routes>
    </div>
  );
}

export default App;
