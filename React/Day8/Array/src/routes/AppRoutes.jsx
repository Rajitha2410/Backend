
import { Route, Routes } from 'react-router-dom'
import Novbar from '../Component/Novbar'
import Array from '../Pages/Array'
import ObjectProcess from '../Pages/ObjectProcess'
import ArrayofObject from '../Pages/Arrayofobject'


const AppRoutes = () => {
  return (
    <>
     <Novbar/>
    
    <Routes>
        <Route path="/" element={<Array />} />
        <Route path="/ObjectProcess" element={<ObjectProcess />} />
        <Route path="/Arrayofobject" element={<ArrayofObject />} />
    </Routes>


  
    
    </>
  )
}

export default AppRoutes