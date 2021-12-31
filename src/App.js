import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [factorialNumber, setFactorialNumber] = useState(null);
  const [inputNumber, setInputNumber] = useState(null);

  const calculateFactorialNumber = (e) => {
    e.preventDefault();
    let answer = 1;
    if (inputNumber === 0 || inputNumber === 1) {
      setFactorialNumber(answer);
      return answer;
    } else {
      for (var i = inputNumber; i >= 1; i--) {
        answer = answer * i;
      }
      setFactorialNumber(answer);
      return answer;
    }
  };

  return (
    <div className='App'>
      <h1>Factorial Calculator</h1>
      <form onSubmit={calculateFactorialNumber}>
        <input
          type='number'
          placeholder='Enter a number...'
          onChange={(e) => setInputNumber(e.target.value)}
        />
        <br />
        <button type='submit'>Calculate Factorial</button>
      </form>
      <h2>Factorial: {factorialNumber}</h2>
    </div>
  );
}
