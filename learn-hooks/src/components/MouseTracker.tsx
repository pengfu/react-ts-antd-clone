import React, { useState, useEffect } from "react";

const MouseTracker: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePos = (e: MouseEvent) => {
      console.log('upate pos')
      setPos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("click", updatePos);
    // 每次渲染前会clean前一个effect
    return () => {
      document.removeEventListener("click", updatePos);
    };
  });

  return (
    <p>
      X:{pos.x}, Y: {pos.y}
    </p>
  );
};

export default MouseTracker;
