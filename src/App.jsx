import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Body from "./components/Body.jsx";
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
