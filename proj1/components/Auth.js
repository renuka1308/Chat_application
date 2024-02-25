import React, { useState } from "react";
import {auth,provider} from '../config/firebase'
import { signInWithPopup, signOut } from "firebase/auth";
import {Room} from '../components/Room'
import Cookies from "universal-cookie";

const cookies=new Cookies()

export const Auth = () => {
  const [isLogin,setIsLogin]=useState(cookies.get('kiwi'));
  const [nickName,setNickName]=useState(cookies.get('name'))


  //sign in btn
  const googleSignIn=async()=>{
    const result=await signInWithPopup(auth,provider)
    console.log(result.user.displayName);
    cookies.set('kiwi',result.user.refreshToken);
    setIsLogin(true)
    setNickName(result.user.displayName)
  }

  //sign out
  const googleSignOut=async()=>{
    await signOut(auth)
    cookies.remove('kiwi')
    setIsLogin('')
    cookies.remove('name')
    setNickName('')

  }
  return (
    <div>
      {console.log(isLogin)}
      {
        isLogin?
        <>
        <Room nickName={nickName}/>
        <button onClick={googleSignOut}>Sign out</button>
        </>:
        <>
      <h1>Sign in with Google</h1>
      <button onClick={googleSignIn}>Sign in</button>
      </>
    }
    </div>
  )
}



