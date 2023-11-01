import { useState } from "react";
 
 export const Counter = () => {
  const [number, setNumber] = useState(0);

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    setNumber(number - 1);
  };
  
  return (
    <>
      <h1>{number}</h1>
      <button onClick={incrementNumber}>Increment</button>
      <button onClick={decrementNumber}>Decrement</button>
    </>
  )
 }