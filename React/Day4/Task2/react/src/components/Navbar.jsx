import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) =>
    `px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
      isActive
        ? "bg-indigo-600 text-white shadow-md"
        : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
    }`;

  return (
    <nav className="bg-white shadow-md px-10 py-5 flex justify-between items-center">
      <h2 className="text-2xl font-bold text-indigo-700">
        Student Portal
      </h2>

      <div className="flex gap-4">
        <NavLink to="/" className={linkStyle}>
          Dashboard
        </NavLink>

        <NavLink to="/courses" className={linkStyle}>
          Courses
        </NavLink>

        <NavLink to="/assignments" className={linkStyle}>
          Assignments
        </NavLink>

        <NavLink to="/profile" className={linkStyle}>
          Profile
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;