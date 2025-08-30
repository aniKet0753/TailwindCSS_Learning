import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black-600 grid grid-cols-12 ">
        <div className=" bg-amber-200 col-span-7">Child 1</div>

        <div className="bg-green-200 col-span-10">Chils 3</div>

        <div className="bg-blue-200 col-span-3">Child 4</div>
      </div>
    </>
  );
}

export default App;
