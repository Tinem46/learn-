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
  const name = "John";
  const age = 20;
  const isMale = true;
  const hobbies = ["coding", "reading", "traveling"];
  const address = {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001"
  };
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
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Is Male: {isMale ? "Male" : "Female"}</h1>
      <h1>Hobbies: {hobbies.join(", ")}</h1>
      <h1>Address: {address.street}, {address.city}, {address.state}, {address.zip}</h1>
    </div>
  );
}


