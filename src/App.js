import "./App.css";

import Boton from "./components/Buttons/Button";
import Pantalla from "./components/Display/Display";
import BotonClear from "./components/ClearButton/ClearButton";

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
      alert("Ingresaste mas de un operador Matemtico");
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
        <Pantalla input={input} />
        <div className="row">
          <Boton click={addInput}>7</Boton>
          <Boton click={addInput}>8</Boton>
          <Boton click={addInput}>9</Boton>
          <Boton click={addInput}>%</Boton>
          <Boton click={addInput}>x²</Boton>
          <Boton click={addInput}>x³</Boton>
        </div>
        <div className="row">
          <Boton click={addInput}>4</Boton>
          <Boton click={addInput}>5</Boton>
          <Boton click={addInput}>6</Boton>
          <Boton click={addInput}>/</Boton>
          <Boton click={addInput}>cos</Boton>
          <Boton click={addInput}>sin</Boton>
        </div>
        <div className="row">
          <Boton click={addInput}>1</Boton>
          <Boton click={addInput}>2</Boton>
          <Boton click={addInput}>3</Boton>

          <Boton click={addInput}>*</Boton>
          <Boton click={addInput}>√</Boton>
          <Boton click={addInput}>√³</Boton>
        </div>
        <div className="row">
          <Boton click={addInput}>0</Boton>
          <Boton click={addInput}>.</Boton>

          <Boton click={addInput}>+</Boton>
          <Boton click={addInput}>-</Boton>
          <Boton click={addInput}>tan</Boton>
          <div className="row">
            <BotonClear clickClear={() => setInput("")}>AC</BotonClear>
          </div>
        </div>
        <Boton click={result}>=</Boton>
      </div>
    </div>
  );
}

export default App;
