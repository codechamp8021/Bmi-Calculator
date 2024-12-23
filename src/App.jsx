import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  // BMI Calculation Logic
  const calcBmi = (e) => {
    e.preventDefault(); // Prevent form submission

    // Reset error message before calculation
    setError('');

    if (weight <= 0 || height <= 0) {
      setError('Please enter a valid weight and height!');
      setBmi('');
      setMsg('');
    } else {
      const bmiValue = (weight / (height * height)) * 703;
      setBmi(bmiValue.toFixed(1));

      // Set BMI Category
      if (bmiValue < 18.5) {
        setMsg('You are underweight. Kuch khaya piya karo yaar!');
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setMsg('You are normal. Tu jaisa hai waisa sahi hai!');
      } else if (bmiValue > 24.9 && bmiValue <= 29) {
        setMsg('You are overweight. Tu kam khaya kr yrr, thoda manage karna sikh!');
      } else if (bmiValue > 29) {
        setMsg('Obesity. Kuch to sharam kar le chutiye!');
      } else {
        setMsg('Please enter valid details.');
      }
    }
  };

  // Reload Logic
  const reload = () => {
    setWeight(0);
    setHeight(0);
    setBmi('');
    setMsg('');
    setError('');
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <form onSubmit={calcBmi}>
        <div className="input-group">
          <label htmlFor="weight">Weight (lbs)</label>
          <input
            type="number"
            placeholder="Enter weight value"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="height">Height (inches)</label>
          <input
            type="number"
            placeholder="Enter height value"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn btn-outline" type="button" onClick={reload}>
            Reload
          </button>
        </div>
      </form>
      
      {error && <div className="error-message">{error}</div>}
      
      {bmi && !error && (
        <div className="result">
          <h3>Your BMI is: {bmi}</h3>
          <p>{msg}</p>
        </div>
      )}
    </div>
  );
}

export default App;
