import { useState } from "react"


const ArrayofObject = () => {
    const [arrofObj,setArrofObj]=useState([{Name: "Laptop", Price:190000, Brand:"HP"},
                    {Name: "Samsung", Price:50000, Brand:"Galaxy"},
                    {Name: "Iphone", Price:80000, Brand:"Apple"},
                    {Name: "College Bag", Price:8000, Brand:"HP"}
    ])
const handleClick=()=>{
    const copy=[...arrofObj]
    copy.push({Name: "Watch", Price:80000, Brand:"Fasttrack"})

    setArrofObj(copy)


}
const handleUpdate=(upd)=>{
    const copy=[...arrofObj]
    setArrofObj((p)=>[...p].map((e,i)=> i== upd? {...e,Price:90000}:e))

}
const handleDelete=(del)=>{
    const copy =[...arrofObj]
    const deleteData=copy.filter((e,i)=>i!==del)
    setArrofObj(deleteData)
}


  return (
    <div className="bg-gray-400 p-10 gap-10 min-h-screen grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 ">
        {
            arrofObj.map((e,i)=>(
                <div className="bg-white flex flex-col rounded-2xl hover:shadow hover:-translate-y-2 transition duration-500 shadow-lg gap-5 p-6 items-center" key={i}>
                    <div className="text-center space-y-3">
                        <h2 className="text-3xl font-extrabold ">{e.Name}</h2>
                    <h4 className="text-xl font-semibold">{e.Price}</h4>
                    <h4 className="text-xl font-bold">{e.Brand}</h4>
                    </div>
                    <div className="flex gap-5 w-full">
                        <button className="bg-amber-200 hover:bg-amber-200 text-black rounded-lg p-3 w-full " onClick={()=>{handleUpdate(i)}}>Update</button>
                        <button onClick={()=>{handleDelete(i)}}>Delete</button>
                    </div>
                </div>
                
            ))
        }
        <button className="bg-black rounded text-white w-30 h-10 p-3 font-bold" onClick={handleClick}>Add</button>
      
    </div>
  )
}

export default ArrayofObject