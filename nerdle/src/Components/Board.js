import React from 'react';
import Number from './Number';

export default function Board() {
     
  return (
    <div className='board'>
        <div className='row'>
            < Number numberPostion={0} attemptValue={0} />
            < Number numberPostion={1} attemptValue={0} />
            < Number numberPostion={2} attemptValue={0} />
            < Number numberPostion={3} attemptValue={0} />
            < Number numberPostion={4} attemptValue={0} />
            < Number numberPostion={5} attemptValue={0} />
            < Number numberPostion={6} attemptValue={0} />
            < Number numberPostion={7} attemptValue={0} />
        </div>
        <div className='row'>
            < Number numberPostion={0} attemptValue={1} />
            < Number numberPostion={1} attemptValue={1} />
            < Number numberPostion={2} attemptValue={1} />
            < Number numberPostion={3} attemptValue={1} />
            < Number numberPostion={4} attemptValue={1} />
            < Number numberPostion={5} attemptValue={1} />
            < Number numberPostion={6} attemptValue={1} />
            < Number numberPostion={7} attemptValue={1} />
        </div>
        <div className='row'>
            < Number numberPostion={0} attemptValue={2} />
            < Number numberPostion={1} attemptValue={2} />
            < Number numberPostion={2} attemptValue={2} />
            < Number numberPostion={3} attemptValue={2} />
            < Number numberPostion={4} attemptValue={2} />
            < Number numberPostion={5} attemptValue={2} />
            < Number numberPostion={6} attemptValue={2} />
            < Number numberPostion={7} attemptValue={2} />
        </div>
        <div className='row'>
            < Number numberPostion={0} attemptValue={3} />
            < Number numberPostion={1} attemptValue={3} />
            < Number numberPostion={2} attemptValue={3} />
            < Number numberPostion={3} attemptValue={3} />
            < Number numberPostion={4} attemptValue={3} />
            < Number numberPostion={5} attemptValue={3} />
            < Number numberPostion={6} attemptValue={3} />
            < Number numberPostion={7} attemptValue={3} />
        </div>
        <div className='row'>
            < Number numberPostion={0} attemptValue={4} />
            < Number numberPostion={1} attemptValue={4} />
            < Number numberPostion={2} attemptValue={4} />
            < Number numberPostion={3} attemptValue={4} />
            < Number numberPostion={4} attemptValue={4} />
            < Number numberPostion={5} attemptValue={4} />
            < Number numberPostion={6} attemptValue={4} />
            < Number numberPostion={7} attemptValue={4} />
        </div>
        <div className='row'>
            < Number numberPostion={0} attemptValue={5} />
            < Number numberPostion={1} attemptValue={5} />
            < Number numberPostion={2} attemptValue={5} />
            < Number numberPostion={3} attemptValue={5} />
            < Number numberPostion={4} attemptValue={5} />
            < Number numberPostion={5} attemptValue={5} />
            < Number numberPostion={6} attemptValue={5} />
            < Number numberPostion={7} attemptValue={5} />
        </div>
    </div>
  )
}
