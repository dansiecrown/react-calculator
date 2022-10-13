import './App.css';
import { useState } from 'react';

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '-', '+', '.']

  const updateCalc = value => {
    if (
      ops.includes(value) && calc === "" ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  const allDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())}
          key={i}>
          {i}
        </button>
      )
    }
    return digits;
  }

  const equals = () => {
    setCalc(eval(calc).toString())
  }

  const del = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value)
  }

  return (
    <div className="App">

      <div className="calculator">
        <div className="screen">
          {result ? <span className="result">{result}</span> : ""}
          <span className="sub-text">{calc || "0.00"}</span>
          {/* <span className="result">{result || ""}</span> */}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>

          <button onClick={del}>DEL</button>

        </div>

        <div className="digits">
          {allDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={equals}>=</button>
        </div>


      </div>
    </div>
  );
}

export default App;
