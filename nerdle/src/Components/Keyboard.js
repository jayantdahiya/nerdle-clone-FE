import React from 'react';
import Key from './Key';

export default function Keyboard() {
  const keys1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const keys2 = ["+", "-", "*", "/", "="];
  return (
    <div className='keyboard'>
      <div className='line1'>
        {keys1.map((key)=>{
          return <Key keyVal={key} />
        })}
      </div>
      <div className='line2'>
        {keys2.map((key)=>{
          return <Key keyVal={key} />
        })}
        <Key keyVal="ENTER" bigKey/>
        <Key keyVal="DELETE" bigKey/>
      </div>
    </div>
  )
}