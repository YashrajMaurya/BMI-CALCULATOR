import React, { useMemo, useState } from 'react';
import './App.css';

const App = () => {
  const [height, setHeight] = useState(140);
  const [weight, setWeight] = useState(40);
  function onWeightChange(event) {
    setWeight(event.target.value)
  }
  function onHeightChange(event) {
    setHeight(event.target.value)
  }
  const output = useMemo(() => {
    const calculateHeight = height / 100
    return (weight / (calculateHeight * calculateHeight)).toFixed(1)
  }, [weight, height])
  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight: {weight} kg</p>
        <input type='range' className='input-slider' step="1" min="40" max="200" onChange={onWeightChange} defaultValue="40" />
        <p className='slider-output'>Height: {height} cm</p>
        <input type='range' className='input-slider' step="1" onChange={onHeightChange} min="140" max="220" defaultValue="140" />
        <div className='output-section'>
          <p>Your BMI is </p>
          <p className='output'>{output}</p>
        </div>
      </div>
    </main>
  );
}

export default App;
