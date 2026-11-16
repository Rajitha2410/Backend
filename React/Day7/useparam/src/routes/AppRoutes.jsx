import{Routes,Route} from 'react-router-dom'
import Update from '../Pages/Update'
import Param from '../Pages/Param'
import UseState from '../Pages/Usestate'
import Navbar from '../Components/Navbar'

const AppRoutes = () => {
  return (
    <>
    <Navbar/>
    
    <Routes>
        <Route path='/' element={<Update/>}/>
        <Route path='/Param' element={<Param/>}/>
        <Route path='/UseState' element={<UseState/>}/>
    </Routes>
    </>
  )
}

export default AppRoutes