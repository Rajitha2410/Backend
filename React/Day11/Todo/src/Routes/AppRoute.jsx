import { Route, Routes } from "react-router-dom"
import Todo from "../Pages/Todo"
import Navbar from "../Components/Navbar"


const AppRoute = () => {
  return (
    <>
    <Navbar/>
    <div>

        <Routes>

            <Route path="/" element={<Todo/>}/>
        </Routes>
    </div>
    </>
  )
}

export default AppRoute