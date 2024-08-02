import { useState } from "react";
import data from "../data.jsx";
import Card from "./Card.jsx";

export default function Slider() {
    
    const [status, setStatus] = useState(0);

    function turnLeft() {
        if (status > 0) {
            setStatus(status - 1);
        }
    }
    
    function turnRight() {
        if (status < data.length - 3) {
            setStatus(status + 1);
        }
    }

    const cards = data.map((item, index) => <Card key={index} {...item} />);
    const visibleCards = cards.slice(status, status + 3);
  return (
    <div className=" relative ">
      <div className="flex items-start justify-evenly overflow-hidden">
        {visibleCards}
      </div>

      <img
        onClick={turnLeft}
        className="absolute top-[45%] w-[50px] left-7 rounded-full hover:shadow-lg hover:shadow-pink-800"
        src="./left.png"
        alt="left"
      />
      <img
        onClick={turnRight}
        className="absolute top-[45%] w-[50px] right-7  rounded-full hover:shadow-lg hover:shadow-pink-800"
        src="./right.png"
        alt="left"
      />
    </div>
  );
}
