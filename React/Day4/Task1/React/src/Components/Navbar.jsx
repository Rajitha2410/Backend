import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex justify-center gap-10">

      <Link to="/" className="text-white font-semibold hover:text-yellow-300">
        Home
      </Link>

      <Link to="/about" className="text-white font-semibold hover:text-yellow-300">
        About
      </Link>

      <Link to="/contact" className="text-white font-semibold hover:text-yellow-300">
        Contact
      </Link>

    </nav>
  );
}

export default Navbar;