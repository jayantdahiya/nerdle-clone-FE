import React, { useContext } from 'react';
import { AppContext } from '../App';

function Number({ numberPosition, attemptValue}) {
    const {board, correctEquation, currAttempt} = useContext(AppContext); 
    const number = board[attemptValue][numberPosition];
    

    const correct = correctEquation[numberPosition] === number;
    const almost = !correct && number !== "" && correctEquation.includes(number);

    const numberState = currAttempt.attempt > attemptValue &&
     (correct ? "correct" : almost ? "almost" : "error");
  return (
    <div className='number' 
      id={numberState}
    >
      {number}
      </div>
  )
}

export default Number;