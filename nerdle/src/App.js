import './App.css';
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import { createContext } from 'react';
import { useState } from 'react';
import { boardDefault } from './Equations';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, numberPos: 0 });

  const correctEquation = "1+2+3=06";

  const onDelete = () => {
    if(currAttempt.numberPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.numberPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, numberPos: currAttempt.numberPos-1});
  }

  const onSelectNumber = (keyVal) => {
    if (currAttempt.numberPos > 7) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.numberPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, numberPos: currAttempt.numberPos+1});
  }

  const onEnter = () => {
    if (currAttempt.numberPos !== 8) return;
    setCurrAttempt({attempt: currAttempt.attempt+1, numberPos:0});
  }

  return (
    <div className="App">
     <nav>
      <h2>
        Nerdle-Clone
      </h2>
     </nav>
     <AppContext.Provider
     value={{
      board,
      setBoard,
      currAttempt,
      setCurrAttempt,
      onEnter,
      onDelete,
      onSelectNumber,
      correctEquation,
     }}
     >
      <div className='game'>
      <Board />
      <Keyboard />
      </div>
     </AppContext.Provider>
    </div>
  );
}

export default App;