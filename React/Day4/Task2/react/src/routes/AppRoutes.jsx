import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Courses from "../pages/Courses";
import Assignments from "../pages/Assignments";
import Profile from "../pages/Profile";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;