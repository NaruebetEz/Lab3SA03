import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

var quizz = ['hello', 'super', 'memory', 'kamui'];
var quizshow = quizz[Math.floor(Math.random()*quizz.length)];

// const word = "Hello";
function App() {
  return (
    <div className = 'box'>
      <div className = 'background'>
        <WordCard value={quizshow}/>
      </div>
    </div>
  );
}

export default App;
