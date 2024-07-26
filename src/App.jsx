import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import data from "./data.jsx";

function App() {
  const cards = data.map((item) => {
    return <Card {...item} />;
  });


  return (
    <div className="mb-10">
      <Nav />
      <Hero /> 
      <div className="flex items-start justify-evenly overflow-hidden">
        {cards}
      </div>
    </div>
  );
}

export default App;
