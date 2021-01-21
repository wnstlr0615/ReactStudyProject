import React from 'react';
import Hello from './Hello';
import './App.css'
function App() {
  const name="joon"
  const style={
    background : 'aqua',
  }
  return (
    < >
        <Hello/>
        <div style={style}>{name}</div>
        <div className="gray-box"></div>
    </>
  );
}

export default App;
