import React, { useState } from 'react';
import CatFactComponent from './components/CatFactComponent';
import './App.module.css';

function App() {
  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <CatFactComponent />
    </div>
  );
}

export default App;