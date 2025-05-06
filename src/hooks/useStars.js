import { useState } from "react";

export function useStars() {
  const [stars, setStars] = useState([]);
  function generateStars() {
    const numOfStars =
      Math.floor(window.innerWidth * window.innerHeight) / 10000;

    const newStars = [];
    for (let i = 0; i < numOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
        blur: Math.random() * 1.2 + 0.3,
      });

      setStars(newStars);
    }
  }
  return { stars, generateStars };
}
