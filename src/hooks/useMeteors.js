import { useState } from "react";

export function useMeteors() {
  const [meteors, setMeteors] = useState([]);

  function generateMeteors() {
    const numOfMeteors = 4;

    const newMeteors = [];
    for (let i = 0; i < numOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        animationDelay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  }
  return { meteors, generateMeteors };
}
