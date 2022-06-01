import React, { useContext } from 'react';
import { AppContext } from '../App';

function Number({ numberPostion, attemptValue}) {
    const {board} = useContext(); 
    const number = board[attemptValue][numberPostion];
  return (
    <div className='letter'>Number</div>
  )
}

export default Number