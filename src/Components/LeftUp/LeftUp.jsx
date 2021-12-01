import React from 'react';
import './styles.css'
import {addNumber, addOther, addWord} from "../../effector/effector";

export const LeftUp = () => {

 const [value, setValue] = React.useState('')

 const onChange = e => setValue(e.target.value)

 const onClick = () => {
  if (value.match(/^[a-zA-Zа-яА-Я]+$/)) {
   addWord({value, counter: 1})
  } else {
   if (value.match(/^\d+$/)) {
    addNumber({value, counter: 1})
   } else {
    addOther({value, counter: 1})
   }
  }
 }


 return (
  <div className='wrap-left-up'>
   <input type='text' value={value} onChange={onChange}/>
   <button onClick={onClick}>Добавить</button>
  </div>
 );
};

