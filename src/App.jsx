import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Body from "./components/Body.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  // return
  return (
    <div>
      <Navbar />
      <div className="doing">To-Do:</div>
      <Sidebar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
