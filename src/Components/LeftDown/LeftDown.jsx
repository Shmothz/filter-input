import React from 'react';
import './styles.css'

export const LeftDown = ({data}) => {

 console.log('Числа ', data.numbers)

 return (
  <div className='left-down-wrap'>
   {
    data.numbers.map(item => <div key={item.value}>{item.value} x {item.counter}</div>)
   }
  </div>
 );
}