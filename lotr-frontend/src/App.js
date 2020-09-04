import React, {useState} from 'react';
import './App.css';
import Characters from './Components/Characters'

function App() {

  const [showCharacters, setShowCharacters] = useState(false)

  return (
    <div className="App">
        <header>
          <h1>Lord of the Rings</h1>
          <h2>D A T A</h2>
        </header>
        <div className="body">
        <p>See your favorite characters and beloved quotes from the same!</p>
        <button onClick={() => setShowCharacters(!showCharacters)}>Characters</button>
        {showCharacters && <Characters />}
        </div>
    </div>
  );
}

export default App;
