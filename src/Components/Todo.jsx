import React from 'react'
import { useState } from 'react'
import './Style.css'

function Todo() {

    const [inputData, setinputData] = useState('');
    const [list, setList] = useState([]);

    const AddResponse = (() => {
        if (inputData.length != 0) {
            setList((prev) => ([...prev, inputData]));
            setinputData('');
        } else {
            alert("Please enter a valid Item");
        }
    })

    const removeItem = ((index) => {
        const updatedItem = list.filter((val,id) => id!==index );
        setList(updatedItem);
    })

  return (
    <>
        <div>
        <input
            id='input'
            type='text'
            placeholder='Type your Item'
            value={inputData}
            onChange={(e) => setinputData(e.target.value)}
        >
        </input>
        <button id='add' onClick={AddResponse}>Add</button>
        </div>
        <ol>
            {list.map((val,index)=>(
                <li key={index}>{val}<botton id='rmvbtn' onClick={()=>removeItem(index)}>Remove</botton></li>

            ))}
        </ol>
        
    </>
  )
}

export default Todo