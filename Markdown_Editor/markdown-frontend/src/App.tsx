// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import TextConverter from "./components/text-preview";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-screen min-h-screen bg-[#d5e6e4] flex flex-col items-center pt-10">
      <h1 className="text-3xl font-bold px-4 py-2 rounded-lg shadow-2xl text-shadow-cyan-950 text-shadow-2xl text-gray-700">MARKDOWN EDITOR</h1>
      <TextConverter />
    </div>
  </>
  
  );
}

export default App;
