import React from 'react';
import './App.css';

function ColorBox({ color }) {
  return (
    <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: color,
      margin: '10px',
      display: 'inline-block'
    }}>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Color Box Display</h1>
      <section className="color-box-container">
        <ColorBox color="red" />
        <ColorBox color="green" />
        <ColorBox color="blue" />
        <ColorBox color="yellow" />
        <ColorBox color="purple" />
        <ColorBox color="orange" />
        <ColorBox color="brown" />
        <ColorBox color="gray" />
        <ColorBox color="black" />
        <ColorBox color="white" />
      </section>
    </div>
  );
}


