import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Categories from "./Card/Categories"
import AiQuiz from "./Questions/AiQuiz";
import CyberQuiz from "./Questions/CyberQuiz";
import WebQuiz from "./Questions/WebQuiz";
import DSQuiz from "./Questions/DSQuiz";
import DSAQuiz from "./Questions/DSAQuiz";
import UIQuiz from "./Questions/UIQuiz";
import MADQuiz from "./Questions/MADQuiz";
import MERNQuiz from "./Questions/MERNQuiz";
import Contact from "./Contact/Contact"
// Layout for shared components
const Layout = () => (
  <>
    <Header />
    <div className="content-container">
      <Outlet /> {/* Routed components will render here */}
    </div>
  </>
);

const router = createBrowserRouter([
  {
    path: "/", // Base layout with shared Header
    element: <Layout />,
    children: [
      { path: "/", element: <Categories /> },
      { path: "/ai-quiz", element: <AiQuiz /> },
      { path: "/cyber-quiz", element: <CyberQuiz /> },
      { path: "/web-quiz", element: <WebQuiz /> },
      { path: "/ds-quiz", element: <DSQuiz /> },
      { path: "/dsa-quiz", element: <DSAQuiz /> },
      { path: "/ui-quiz", element: <UIQuiz /> },
      { path: "/mad-quiz", element: <MADQuiz /> },
      { path: "/mern-quiz", element: <MERNQuiz /> },
    ],
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
