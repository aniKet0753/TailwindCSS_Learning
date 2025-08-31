import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
//mobile first approach breakpoint
  return (
    <>
    <div className="grid grid-cols-12  ">
    <div className=" col-span-12 sm:col-span-5 bg-green-200 text-2xl">
      hi therer from first div
    </div>

    <div className="col-span-12 sm:sm:col-span-5 bg-amber-200">
      hi there from secound div
    </div>
    
    <div className="col-span-12 sm:sm:col-span-2 bg-purple-200">
      hi there from third div
    </div>
    </div>
    </>
  );
}

export default App;
