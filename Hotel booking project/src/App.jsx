
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Room from '../Room'
import Section from './Pages/Sections'
import Nopage from './Pages/Nopage'
import Navbarr from './Component/Navbar'
import Home from './Home'

function App() {
 

  return (
    <>

    <Routes>
    <Route path='/' element={<Navbarr/>}>
    <Route index element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/room' element={<Room/>} />
    <Route path='/section' element={<Section/>} />
    <Route path="*" element={<Nopage/>} />

    </Route>
    </Routes>



    </>
  )
}

export default App
