import { useState } from "react"



const Todo = () => {
  const [todo,setTodo]=useState(" ")
  const[savedate,setSaveDate]=useState([])
  const[editId,setEditId]=useState(null)

  const handleChange=(e)=>{
    setTodo(e.target.value)
   
  }
  const handleAdd=(e)=>{
    const data={id:Date.now(),todo}
    if(!todo){
      alert("Please Fill The Form ")
      return
    }
    setSaveDate((p)=>[...p,data])
    setTodo("")
  }
  const handleEdit=(data)=>{

    setTodo(data.todo)
    setEditId(data.id)
  }
  const handleDelete=(id)=>{
    const copy=[...savedate]
    const del=copy.filter((e,i)=>e.id!==id)
    setSaveDate(del)
  }
  const handleUpdate=()=>{
    setSaveDate((p)=>[...p].map((e,i)=>e.id==editId?{...e,todo}:e))
    setEditId(null)
    setTodo("  ")
  }
  return (
    <>
    <div>
      <input  className="border bg-amber-300 h-10  mx-4"value={todo} onChange={handleChange}/>
      {editId===null?<button className="bg-black text-white p-2 rounded" onClick={handleAdd}>Add Task</button>:<button  className="bg-black text-white p-2 rounded" onClick={handleUpdate}>Update Task</button>}

    </div>
    <div>
       {savedate.map((e)=>(
        <div key={e.id}>
          <h1>{e.id}</h1>
          <p>{e.todo}</p>
          <button  className="bg-green-500 text-black rounded p-2 mx-3 w-20"onClick={()=>handleEdit(e)}>Edit</button>
          <button  className="bg-red-500 text-black rounded p-2 mx-3 w-20"onClick={()=>handleDelete(e.id)}>Delete</button>
          </div>
       ))}
    </div>
    </>
  )
}

export default Todo