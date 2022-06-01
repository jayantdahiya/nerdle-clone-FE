import './App.css';
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import { createContext } from 'react';
import { useState } from 'react';
import { boardDefault } from './Equations';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });

  return (
    <div className="App">
     <nav>Nerdle</nav>
     <AppContext.Provider
     value={{
      board,
      setBoard,
     }}
     >
      <div className='App'>
      <Board />
      <Keyboard />
      </div>
     </AppContext.Provider>
    </div>
  );
}

export default App; 
