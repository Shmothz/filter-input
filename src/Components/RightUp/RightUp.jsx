import React from 'react';
import './styles.css'

export const RightUp = ({data}) => {

 console.log('Слова ', data.words)

 return (
  <div className='right-up-wrap'>
   {
    data.words.map(item => <div key={item.value}>{item.value} x {item.counter}</div>)
   }
  </div>
 );
};

