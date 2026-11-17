import { Route, Routes } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Employee from "../Pages/Employee"
import Product from "../Pages/Product"
import Student from "../Pages/Student"


const AppRoute = () => {
  return ( 
<>
    <Navbar/>
    <div>
        
<Routes>
    <Route path="/" element={<Employee/>} />
    <Route path="/Product" element={<Product/>} />
    <Route path="/Student" element={<Student />} />    
</Routes>

    </div>
    </>

  )
}

export default AppRoute