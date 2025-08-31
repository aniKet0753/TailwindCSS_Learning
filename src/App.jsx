import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import logo from '../img/chat-group.png'
import "./App.css";
import Otpbox from '../src/component/otp'

function App() {

  return (
    <>
    <div className="text-center font-mono">
      <Otpbox />
    </div>
    </>
  );
}

export default App;
