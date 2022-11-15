import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import More from "./components/More";
import NotFound from "./components/NotFound";

function ReactRouterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/Portfolio" element={<Portfolio />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/More" element={<More />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default ReactRouterRoutes;
