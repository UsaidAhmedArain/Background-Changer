import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  return (
    <div
      className="h-screen w-screen flex justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold">Choose color</h1>
        <input type="color" onChange={(e) => setColor(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
