import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let handleclick = (value) => {
    setCount(count + value);
  };
  return (
    <>
      <div className="App">
        <h1>Counter App</h1>
        <p>Counter: {count}</p>
        <button onClick={() => handleclick(1)}>+</button>
        <button onClick={() => handleclick(-1)}>-</button>
      </div>
    </>
  );
}

export default App;