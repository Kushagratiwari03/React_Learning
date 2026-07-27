import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        <span className="bg-gray-500 text-shadow-white rounded-xl p-1">
          TailWind
        </span>
      </h1>
      <Card name="Card Details"/>
    </>
  );
}

export default App;
