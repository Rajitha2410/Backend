import {Link}from "react-router-dom"

const Novbar = () => {
  return (
    <>
    <div className="bg-amber-200 p-5  text-black font-semibold items-center flex justify-between"> 
        <div>Logo</div>
        <div className="gap-10 flex">
        <Link to="/">Array</Link>
        <Link to="/ObjectProcess">Object</Link>
        <Link to ="/Arrayofobject">Arrayofobject </Link>
        </div>
        
        
          </div>
    
    </>
    
  )
}

export default Novbar