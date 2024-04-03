import { useState } from "react";
import "./App.css";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Body from "./Body.jsx";
function App() {
  // return
  return (
    <div>
      <div>To-Do:</div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
