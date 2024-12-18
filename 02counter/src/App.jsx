import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    } else {
      alert("You Can't Increase Value!");
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("You Can't Decrease Value!");
    }
  };

  return (
    <>
      <h1>Hello From Mustafa</h1>
      <h4>A Simple Counter App</h4>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <span> </span>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
