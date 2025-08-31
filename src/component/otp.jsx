import { useRef } from "react";

export default function App() {
  return (
    <div className="flex justify-center mt-10">
      <OtpBox />
    </div>
  );
}

function OtpBox() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  return (
    <div className="text-center">
      {/* OTP Inputs */}
      <div className="flex gap-2 justify-center">
        <input
          type="text"
          maxLength="1"
          ref={ref1}
          onChange={(e) => {
            if (e.target.value) ref2.current.focus(); // move forward
          }}
          onKeyDown={(e) => {
            if (e.key === "Backspace") {
              // stay here, since it's the first box
            }
          }}
          className="w-10 h-10 border text-center rounded bg-amber-100"
        />
        <input
          type="text"
          maxLength="1"
          ref={ref2}
          onChange={(e) => {
            if (e.target.value) ref3.current.focus();
          }}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && !e.target.value) {
              ref1.current.focus(); // go back
            }
          }}
          className="w-10 h-10 border text-center rounded bg-amber-100"
        />
        <input
          type="text"
          maxLength="1"
          ref={ref3}
          onChange={(e) => {
            if (e.target.value) ref4.current.focus();
          }}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && !e.target.value) {
              ref2.current.focus();
            }
          }}
          className="w-10 h-10 border text-center rounded bg-amber-100"
        />
        <input
          type="text"
          maxLength="1"
          ref={ref4}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && !e.target.value) {
              ref3.current.focus();
            }
          }}
          className="w-10 h-10 border text-center rounded bg-amber-100"
        />
      </div>

      {/* Submit Button */}
      <button className="bg-red-400 mt-5 px-6 py-2 rounded-2xl cursor-pointer">
        Submit
      </button>
    </div>
  );
}
