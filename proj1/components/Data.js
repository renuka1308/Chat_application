import React, { useState } from "react"
import { dataBase } from "../config/firebase"
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";

export const Data = () => {
  const[namee,setNamee]=useState('')
  const[age,setAge]=useState('')
  const[gender,setGender]=useState('')
  const[job,setJob]=useState('')
  const[info,setInfo]=useState([])

  //create btn
  const addDataToDataBase=async()=>{
    await addDoc(collection(dataBase,'users'),{
      name:namee,
      age:age,
      Gender:gender,
      Job:job
    });
    setNamee('')
    setAge('')
    setGender('')
    setJob('')
  }

  //READ BTN
  const getFirebaseData=async()=>{
    let data=await getDocs(collection(dataBase,'users'));
    let filteredData=data.docs.map((document)=>({
      ...document.data(),
      id:document.id,
    }))
    setInfo(filteredData);
  }
  // console.log(filteredData);

  //update btn
  const updateData=async(idName)=>{
    await updateDoc(doc(dataBase,"users",idName),{
      job:"web dev",
      name:'lkg'
    })
    getFirebaseData();
  }

  //delete btn
  const deleteData=async(idName)=>{
    await deleteDoc(doc(dataBase,"users",idName));
    getFirebaseData();
  }
  return (
    <div>
      Name:<input placeholder="Enter ur name" onChange={(e)=>setNamee(e.target.value)} value={namee}/>
      <br/>
      Age:<input placeholder="Age" onChange={(e)=>setAge(e.target.value)} value={age}/>
      <br/>
      Gender:<input placeholder="Gender" onChange={(e)=>setGender(e.target.value)} value={gender}/>
      <br/>
      Job:<input placeholder="Job" onChange={(e)=>setJob(e.target.value)} value={job}/>
      <br/>
      <button onClick={addDataToDataBase}>Create</button>
      <button onClick={getFirebaseData}>Read</button>
      {
        info.map((obj)=>{
          return <>
          <h1>{obj.name}</h1>
          <h1>{obj.Gender}</h1>
          <h1>{obj.Job}</h1>
          <button onClick={()=>updateData(obj.id)}>update</button>
          <button onClick={()=>deleteData(obj.id)}>Delete</button>
          </>
        })
      }
    </div>
  )
}

