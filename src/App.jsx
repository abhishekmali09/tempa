import { Routes,Route } from "react-router"
import Home from "./pages/home"
import Service from "./pages/service"
import Contact from "./pages/contact"
import Navbar from "./components/navbar"
import Footer from './components/footer'
function App() {


  return (
    <>
        <Navbar/>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="/treatments" element={<Service/>} />
            <Route path="/contact-us" element={<Contact/>} />
        </Routes>
        <Footer/>
    </>
  )
}

export default App
