import React from 'react';
import './styles.css'

export const RightDown = ({data}) => {

 console.log('Остальное ', data.other)

 return (
  <div className='right-down-wrap'>
   {
    data.other.map(item => <div key={item.value}>{item.value} x {item.counter}</div>)
   }
  </div>
 );
};
