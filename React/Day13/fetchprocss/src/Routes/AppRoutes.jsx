
import { Route, Routes } from "react-router-dom"
import Fetch from "../Pages/Fetch"
import Navbar from "../Components/Navbar"
import Search from "../Pages/Search"
import Timer from "../Pages/Timer"

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center  gap-5 touch-pan-down">
        <Routes>
          <Route path="/" element={<Fetch />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Fetch" element={<Fetch/>} />
          <Route path="/Timer" element={<Timer/>} />
        </Routes>
      </div>
    </>
  )
}

export default AppRoutes
