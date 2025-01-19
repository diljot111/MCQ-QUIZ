import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header/Header";
import Categories from "./Card/Categories";
// Optional components for additional routes
// import Contact from "./Contact";
// import Home from "./Home";
import Contact from "./Contact/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/", // Home route
      element: (
        <>
          <Header />
          {/* <Categories /> */}
          {/* <Home /> */}
        </>
      ),
    },
    {
      path: "/contact", // Contact route
      element: (
        <>
          <Header />
          <Contact />
        </>
      ),
    },
  ]);

  return (
    <>
   
    <RouterProvider router={router} />
    <Categories />
    </>
  );
}

export default App;
