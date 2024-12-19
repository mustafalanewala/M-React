import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("white"); 

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <h1>Background Color Changer</h1>
      <div className="button-container">
        {/* We Can directly change using setBgColor */}
        {/* <button onClick={() => setBgColor("orange")}>Orange</button> */}
        <button onClick={() => changeColor("red")}>Red</button>
        <button onClick={() => changeColor("blue")}>Blue</button>
        <button onClick={() => changeColor("green")}>Green</button>
        <button onClick={() => changeColor("yellow")}>Yellow</button>
        <button onClick={() => changeColor("purple")}>Purple</button>
      </div>
    </div>
  );
}

export default App;
