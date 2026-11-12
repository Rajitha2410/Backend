import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm px-6 md:px-16 py-5 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <Heart className="text-pink-500" size={28} />
        <span className="text-xl font-bold text-gray-800">
          Dear Future Me
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-gray-600 hover:text-pink-500">
          Home
        </Link>

        <Link to="/about" className="text-gray-600 hover:text-pink-500">
          About
        </Link>

        <Link to="/service" className="text-gray-600 hover:text-pink-500">
          Service
        </Link>

        <Link to="/contact" className="text-gray-600 hover:text-pink-500">
          Contact
        </Link>
      </div>

      <Link
        to="/service"
        className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600"
      >
        Get Started
      </Link>
    </nav>
  );
}

export default Navbar;