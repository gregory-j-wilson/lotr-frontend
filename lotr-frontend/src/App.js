import React from 'react';
import './App.css';
import Characters from './Components/Characters'

function App() {


  return (
    <div className="App">
        <header>
          <h1>Lord of the Rings</h1>
          <h2>D A T A</h2>
        </header>
        <p>See your favorite characters and beloved quotes from the same!</p>
        <button onClick>Characters</button>
        <Characters />
    </div>
  );
}

export default App;
