import {Link} from "react-router-dom"

const Navbar = () => {
    return (
    <>
    <div className="bg-blue-500 text-white justify-between p-4 flex gap-4">
       <div>Logo</div>
       <div  className="flex gap-5">

        <Link to="/">Update</Link>
        <Link to="/param">Param</Link>
        <Link to="/usestate">Usestate</Link>
       </div>

    </div>
    </>
  
    
  )
}

export default Navbar