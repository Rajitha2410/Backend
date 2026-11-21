import { Link, Links } from "react-router-dom"


const Navbar = () => {
  return (
   
    <>
    <div className=" bg-blue-300 text-gray-800 flex justify-end-safe p-5 gap-10 ">
    <Link to="/">Fetch</Link>
    <Link to="/Search">Search</Link>
    <Link to="/Timer">timer</Link>
    </div>
    </>
  )
}

export default Navbar