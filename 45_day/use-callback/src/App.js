import React, { useEffect, useState, useCallback } from "react";
import Child from "./components/Child";
import './App.css';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const updateOne = () => {
    console.log(
      "Я не мемоизирован"
    );
  };

  const updateTwo = useCallback(() => {
    console.log(
      "Я мемоизирован!"
    );
  }, []);
  // }, [counter]);

  return (
    <div className="App">
      <button
        onClick={() => setCounter(counter + 1)}
      >One</button>
      <br />
      <button
        onClick={() => setCounterTwo(counterTwo + 1)}
      >
        Two
      </button>
      <Child
        updateOne={updateOne}
        updateTwo={updateTwo}
      />
    </div>
  );
}
