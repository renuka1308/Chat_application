import React,{useState} from 'react'
import {Chat} from '../components/Chat'

export const Room = (props) => {
  const {nickName}=props
  const [inputValue,setInputValue]=useState('');
  const [btnClicked,setBtnClicked]=useState(false)

  //btn to chat page
  const goToChatPage=()=>{
    setBtnClicked(true)
  }
  return (
    <div>
      {
        btnClicked?
        <Chat inputValue={inputValue}/>
        :
        <>
      <h1>Enter room name {nickName}</h1>
      <input onChange={(e)=>setInputValue(e.target.value)}/>
      <button onClick={goToChatPage}>Enter chat</button>
      </>
    }
    </div>
  )
}