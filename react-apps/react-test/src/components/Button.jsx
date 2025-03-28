import React from "react";
import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log("Button clicked!", count);
  };
  return <button onClick={handleClick}>Click Me {count}</button>;
};

export default Button;
