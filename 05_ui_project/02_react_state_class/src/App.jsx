import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  // let counter = 0;

  function addValue() {
    setCounter(prev => {     // prev is representing current value
      const next = prev + 1
      if(next > 20) {
        return 20;
      } else {
        return next;
      }
    })
    console.log(counter);
  }

  function removeValue() {
    setCounter(prev => {
      const next = prev - 1
      if(next < 0) {
        return 0;
      } else {
        return next;
      }
    })
  }

  return (
    <div>
      <h1>Counter Project</h1>
      <h2>Counter = {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </div>
  )
}

export default App
