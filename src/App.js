import React from 'react';
import './App.css';
import WiseSquare from './WiseSquare';
import AnnoyingForm from './AnnoyingForm';

function App() {
  return (
    <div className="App">
      <h1>React Events Mini Demo</h1>
      <h4>On mouse leave</h4>
      <WiseSquare />
      <h4>On key up</h4>
      <AnnoyingForm />
    </div>
  );
}

export default App;
