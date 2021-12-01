import React from 'react'
import {LeftUp} from "./Components/LeftUp"
import {RightUp} from "./Components/RightUp/RightUp"
import {LeftDown} from "./Components/LeftDown"
import {RightDown} from "./Components/RightDown"
import './App.css'
import $store from "./effector/effector";
import {useStore} from "effector-react";

function App() {

 const data = useStore($store)

 return (
  <div className='app-wrapper'>
   <LeftUp/>
   <RightUp data={data}/>
   <LeftDown data={data}/>
   <RightDown data={data}/>
  </div>
 );
}

export default App
