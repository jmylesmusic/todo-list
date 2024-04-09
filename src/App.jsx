import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Body from "./components/Body.jsx";
import Sidebar from "./components/Sidebar.jsx";
import ListItem from "./components/ListItem.jsx";
import List from "./components/List.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Body>
        <List />
      </Body>
      {/* <ListItem /> */}
      <Footer />
    </>
  );
}

export default App;
