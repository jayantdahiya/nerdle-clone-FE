import React, { useContext } from 'react';
import { AppContext } from '../App';

function Key({keyVal, bigKey}) {
    const {onEnter, onDelete, onSelectNumber} = useContext(AppContext);

    const selectNumber = () =>{
        if(keyVal === "ENTER"){
            onEnter();
        } else if(keyVal ==="DELETE") {
            onDelete();
        } else {
        onSelectNumber(keyVal);
    }};
  return (
    <div className='key' id={bigKey && "big"} onClick={selectNumber}>
        {keyVal}
    </div>
  );
}

export default Key;