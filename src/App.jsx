import { useState } from "react";
import "./App.css";
import Body from "./components/Body.jsx";
import Sidebar from "./components/Sidebar.jsx";

// import ListItem from "./components/ListItem.jsx";
function App() {
  return (
    <>
      <Sidebar className="sidebar" />
      <Body />
    </>
  );
}

export default App;
