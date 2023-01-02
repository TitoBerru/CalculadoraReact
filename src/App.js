import "./App.css";

import Button from "./components/Buttons/Button";
import Display from "./components/Display/Display";
import ClearButton from "./components/ClearButton/ClearButton";

import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addInput = (val) => {
    let currentVal = input + val;
    setInput(currentVal);

    if (
      input.charAt(input.length - 1) === val ||
      input.charAt(input.length - 1) === val ||
      input.charAt(input.length - 1) === val ||
      input.charAt(input.length - 1) === val
    ) {
      setInput("");
      alert("Ingresaste mas de un operador");
    }
  };

  const result = () => {
    if (input.includes("x²")) {
      let inputArr = input.split("x");
      let result = inputArr[0] * inputArr[0];
      setInput(result);
    }

    if (input.includes("x³")) {
      let inputArr = input.split("x");
      let result = inputArr[0] * inputArr[0] * inputArr[0];
      setInput(result);
    }

    if (input.includes("cos")) {
      let inputArr = input.split("cos");
      let result =Math.cos(inputArr[0]) * inputArr[1];     
      setInput(result);
    }

    if (input.includes("sin")) {
      let inputArr = input.split("sin");
      let result =Math.sin(inputArr[0]);     
      setInput(result);
    }

    if (input.includes("√")) {
      let inputArr = input.split("√");
      let result = Math.sqrt(inputArr[0]);
      setInput(result);
    }

    if (input.includes("√³")) {
      let inputArr = input.split("√³");
      let result = Math.ceil(Math.pow(inputArr[0], 1 / 3))
      // let result = Math.sqrt(inputArr[0]);
      setInput(result);
    }

    //Math.tan(degrees * Math.PI / 180); tan
    if (input.includes("tan")) {
      let inputArr = input.split("tan");
      let result = Math.tan(inputArr[0]* Math.PI /180);     
      setInput(result);
    }

   

    if (input) {
      setInput(evaluate(input));
      if (evaluate(input) === Infinity) {
        alert("No se pude dividir por 0.");
        setInput("");
      }
    } else {
      alert("Por favor ingresar algun valor.");
    }
  };

  return (
    <div className="App">
      <div className="logo-container"></div>
      <div className="calculator-container">
        <Display input={input} />
        <div className="row">
          <Button click={addInput}>7</Button>
          <Button click={addInput}>8</Button>
          <Button click={addInput}>9</Button>
          <Button click={addInput}>%</Button>
          <Button click={addInput}>x²</Button>
          <Button click={addInput}>x³</Button>
        </div>
        <div className="row">
          <Button click={addInput}>4</Button>
          <Button click={addInput}>5</Button>
          <Button click={addInput}>6</Button>
          <Button click={addInput}>/</Button>
          <Button click={addInput}>cos</Button>
          <Button click={addInput}>sin</Button>
        </div>
        <div className="row">
          <Button click={addInput}>1</Button>
          <Button click={addInput}>2</Button>
          <Button click={addInput}>3</Button>

          <Button click={addInput}>*</Button>
          <Button click={addInput}>√</Button>
          <Button click={addInput}>√³</Button>
        </div>
        <div className="row">
          <Button click={addInput}>0</Button>
          <Button click={addInput}>.</Button>

          <Button click={addInput}>+</Button>
          <Button click={addInput}>-</Button>
          <Button click={addInput}>tan</Button>
          <div className="row">
            <ClearButton clickClear={() => setInput("")}>AC</ClearButton>
          </div>
        </div>
        <Button click={result}>=</Button>
      </div>
    </div>
  );
}

export default App;
