import React, { useState } from "react";
import toDoListItems from "../assets/todolist-items.json";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import List from "./List";
import "../index.css";

const Body = () => {
  return (
    <div>
      <Navbar />
      <List />
      <Footer />
    </div>
  );
};

export default Body;
