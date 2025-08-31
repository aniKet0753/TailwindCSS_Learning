import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import logo from '../img/chat-group.png'
import "./App.css";

function App() {
const [inputValue, setInputValue ] = useState("");
  return (
    <>
    <div className="text-center font-mono">

    <div className="flex place-content-center mb-20 mt-10">
     <img src={logo} alt="logo" className="h-6 w-6"/><p className="text-[#75BFEC]">Webinar</p><p className="text-white">.gg</p>
    </div>

    <div className="mb-10">
      <p className="text-white ">Verify Your Age</p>
    </div>

    <div>
      <p className="text-0.5xl">Please confirm your birth year. This data will not stored.</p>
      <input type="text" className="bg-red-50 rounded-2xl mb-4" placeholder="Your Birth Year" onChange={(e)=>setInputValue(e.target.value)}></input><br></br>
      <button className={`px-4 py-2 rounded text-white 
          ${!inputValue 
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
          }`}>Conform</button>
    </div>

    </div>
    </>
  );
}

export default App;
