import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

var quizz = ['hello', 'super', 'memory', 'kamui'];
var quizshow = quizz[Math.floor(Math.random()*quizz.length)];

const newgame = () => {
  window.location.reload();
}

// const Give_up = () =>{
//   window.print('hello')
// }
// const word = "Hello";
function App() {
  return (
    <div className = 'box'>
      <div className = 'background'>
        <WordCard value={quizshow}/>
      </div>
      <div className = 'background2'>
        <button className = 'button' onClick={newgame}>new game</button>
        <button className = 'button' onClick={newgame}>Give up</button>
      </div>
    </div>
  );
}

export default App;
