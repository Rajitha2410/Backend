import {useState} from "react"

const Array = () => {
  const[arr,setArr]=useState(["React","Node","JS","HTML","css"])

   const handleClick=()=>{
    let copy=[...arr]
    copy.push("AWS")
    setArr(copy)
   } 

   const handleUpdate=(eid)=>{
      let copy =[...arr]
      copy[eid]="MERN"
      setArr(copy)  
    }

    const handleDelet=(did)=>{
      let copy = [...arr]
      const deleteData =copy.filter((e,i)=>i!==did)
      setArr(deleteData)
    }

    
  return (
   <>
   <div classname="flex justify-center items-center">
        {arr.map((e,i)=>(
          <div className="flex justify-center items-center gap-5 ">
            <p key={i}>{e}</p>
           
            <button  className="bg-blue-500 text-white text-2xl w-30 h-10  gap-4 mx-5 my-5" onClick={()=>handleUpdate(i)}>Update</button>
            <button className="bg-red-500 text-white text-2xl w-30 h-10 gap-4" onClick={()=>handleDelet(i)} >Delete</button>
            
            </div>
        ))}
   </div>
   <button  className="bg-green-500 text-white  w-30 h-10 flex justify-center mx-160" onClick={handleClick}>Click To Add</button>
   
   </>
  )
}

export default Array