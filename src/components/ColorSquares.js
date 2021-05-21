import React, { useState } from "react";
import "./squares.css";
const ColorSquares = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "pink",
    "purple",
    "indigo",
    "grey"
  ];
  const changeBgColor = (event) => {
    // let id = event.target.getAttribute("data-index");
    // let ind = parseInt(id, 10);
    // let i = ind < colors.length ? (ind += 1) : 0;

    // setCurrentIndex(i);
    // console.log(currentIndex);
    //  const color = colors[currentIndex%colors.length];

    const color = colors[Math.floor(Math.random() * colors.length)];
    event.target.style.backgroundColor = color;
    event.target.innerText = color;
  };
  return (
    <>
      <div className="grid-container">
        {colors.map((color, index) => {
          return (
            <div
              className="grid-item"
              key={index}
              data-index={index}
              style={{ background: color }}
              onClick={changeBgColor}
            >
              {color}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ColorSquares;
