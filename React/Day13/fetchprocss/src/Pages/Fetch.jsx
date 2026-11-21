
import React, { useEffect, useState } from "react";

const Fetch = () => {
const [showDatas,setShowDatas]=useState([])

    
    const fetchData=async()=>{
        try{
          const datas=await fetch("https://dummyjson.com/products")
         
          const parseData=await datas.json()
           console.log(parseData.products)
           setShowDatas(parseData.products)
        
        }
        catch(error){
           console.log(error)
        }
            
    }
    useEffect(()=>{
     fetchData()
    },[])
  return (
    <>
    {
      showDatas.map((e,i)=>(
     <div key={e.id}>
      <h1>Name{e.title}</h1>
     
      <p>{e.category}</p>

     </div>
      ))
    }
    </>
  )
}

export default Fetch