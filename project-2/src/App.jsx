import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard';
import { questionList } from './questions';

const App = () => {
  const [next, setNext] = useState(0);
  const [flip, setFlip] = useState(false);
  const [noMorePrev, setFirst] = useState(true);
  const [noMoreNext, setLast] = useState(false);
  const [input, setInput] = useState("");
  const [correct_input, setCheckedInput] = useState("");

  let currentQuestion = questionList[next];

  const checkAnswer = () => {
    if (flip == true) {
      setCheckedInput("wrong-side");
    } else if (input.toLowerCase() == questionList[next].answer.toLowerCase()) {
      setCheckedInput("correct");
    } else {
      setCheckedInput("wrong");
    }
  }

  const shuffle = () => {
    let currentIndex = questionList.length;
    while (currentIndex != 0) {

      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [questionList[currentIndex], questionList[randomIndex]] = [questionList[randomIndex], questionList[currentIndex]];
    }
  }
  
  const flipFlashcard = () => {
    setFlip(!flip);
  }

  const prevFlashcard = () => {
    setInput("");
    setCheckedInput("");
    setLast(false);
    setFlip(false);
    if (next == 0) {
      return;
    } else if (next == 1) {
      setFirst(true);
      setNext(next - 1);
    } else {
      setFirst(false);
      setNext(next - 1);
    }
  }

  const nextFlashcard = () => {
    setInput("");
    setCheckedInput("");
    setFirst(false);
    setFlip(false);
    if (next == 9) {
      return;
    } else if (next == 8) {
      setLast(true);
      setNext(next + 1);
    }else {
      setLast(false);
      setNext(next + 1);
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>Capitals Practice</h1>
        <h3>How well do you know your capitals? Test how good you are at geography right here!!</h3>
        <h3>Total Number of Cards: 10</h3>
        <Flashcard content={currentQuestion} onClick={flipFlashcard} flip={flip}></Flashcard>
        <div className='form-container'>
          <p>Guess your answer here:</p>
          <input type="text" onChange={(e) => setInput(e.target.value)} id={correct_input} placeholder='answer here' value={input}></input>
          <button onClick={checkAnswer}>Submit</button>
        </div>
        <div className='buttons'>
          <button onClick={prevFlashcard} className={`${noMorePrev ? 'noMorePrev' : ''}`}>←</button>
          <button onClick={nextFlashcard} className={`${noMoreNext ? 'noMoreLast' : ''}`}>→</button>
          <button onClick={shuffle}>Shuffle Cards</button>
        </div>
      </div>
    </div>
  )
}

export default App
