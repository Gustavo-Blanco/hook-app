import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });

  const { x, y } = coords;

  const mouseMove = ({ x, y }) => {
    setCoords({ x, y });
  };
  
  useEffect(() => {
      
      
    window.addEventListener("mousemove", mouseMove);
    
    console.log("Component mounted");
    
    return () => {
      console.log("Component unmounted");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Your are great</h3>
      <h4>X: {x}</h4>
      <h4>Y: {y}</h4>
    </div>
  );
};
