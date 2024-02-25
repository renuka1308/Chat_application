import React, { useState } from "react";
import {Room} from './Room'

export const Cat = (props) => {
  const {inputValue}=props;
  const [prev,setPrev]=useState(false)

  const prevvBtn=()=>{
    setPrev(true)
  }
  return (
  <>
  {
  prev?
  <Room/>
  :
  <>
  <div>Welcome : {inputValue}</div>
  <button onClick={prevvBtn}>Back</button>
  </>
}
</>
  )
}

import React, { useState } from "react";
import {Room} from './Room'
// import { Data } from "./Data";

export const Chat = (props) => {
  const {inputValue}=props
  const [prev,setPrev]=useState(false)

  const prevBtn=()=>{
    setPrev(true)
  }
  return (
    <div>
      {
        prev?
        <Room/>
        :
        <>
      <h1>Welcome {inputValue}</h1>
      <button onClick={prevBtn}>Back</button>
      {/* <Data/> */}
        </>
    }
    </div>
  )
}