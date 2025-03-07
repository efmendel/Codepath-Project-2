import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard';
import { questionList } from './questions';

const App = () => {
  const [next, setNext] = useState(0);
  const [flip, setFlip] = useState(false);
  let currentQuestion = questionList[next];

  const flipFlashcard = () => {
    setFlip(!flip);
  }

  const nextFlashcard = () => {
    setFlip(false);
    setNext(Math.floor(Math.random() * 10));
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>Capitals Practice</h1>
        <h3>How well do you know your capitals? Test how good you are at geography right here!!</h3>
        <h3>Total Number of Cards: 10</h3>
        <Flashcard content={currentQuestion} onClick={flipFlashcard} flip={flip}></Flashcard>
        <div className='buttons'>
          <button onClick={nextFlashcard}>→</button>
        </div>
      </div>
    </div>
  )
}

export default App
