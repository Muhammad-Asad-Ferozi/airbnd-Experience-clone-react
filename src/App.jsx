import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import data from "./data.jsx";
import Slider from "./components/Slider.jsx"
function App() {
  const cards = data.map((item) => {
    return <Card {...item} />;
  });


  return (
    <div className="mb-10">
       <Nav />
      <Hero />  
      <Slider />
    </div>
  );
}

export default App;
