import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-1000" style={{ backgroundColor: color }}>
      <h1 className="text-white text-center">Background Color Test</h1>
      <div className="flex justify-center mt-4">
        <button 
          onClick={() => setColor("blue")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Change to Blue
        </button>
        <button 
          onClick={() => setColor("green")}
          className="px-4 py-2 bg-green-500 text-white rounded ml-2"
        >
          Change to Green
        </button>
        <button 
          onClick={() => setColor("red")}
          className="px-4 py-2 bg-red-500 text-white rounded ml-2"
        >
          Change to Red
        </button>
      </div>
    </div>
  );
}

export default App;
