import React, { useState } from "react";
import toDoListItems from "../assets/todolist-items.json";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import List from "./List";
import "../index.css";
import About from "./About.jsx";
import { Routes, Route } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<List />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <div>
              <h1>404 Page</h1>
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default Body;
