
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-amber-500 flex text-black justify-between  p-5">

<div>Logo</div>
<div className="flex  mx-15 gap-10">
        <Link to='/'>Employee</Link>
        <Link to='/Product'>Product</Link>
        <Link to='/Student'>Student</Link>
        </div>
    </div>
  )
}

export default Navbar