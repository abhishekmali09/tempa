import { Routes,Route } from "react-router"
import Home from "./pages/home"
import Service from "./pages/service"
import Contact from "./pages/contact"
import Navbar from "./components/navbar"
import Footer from './components/footer'
import FreeQuote from "./pages/freeQuote"
import AboutUs from "./pages/AboutUs"
import Doctors from "./pages/doctors"
import Hospitals from "./pages/hospitals"
import DoctorDetail from "./pages/doctorDetail"
import HospitalsDetail from "./pages/hospitalsDetail"
function App() {


  return (
    <>
        <Navbar/>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="/treatments" element={<Service/>} />
            <Route path="/contact-us" element={<Contact/>} />
            <Route path="/free-quote" element={<FreeQuote/>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/doctors" element={<Doctors/>} />
            <Route path="/hospitals" element={<Hospitals/>} />
            <Route path="/doctors/:doctorId" element={<DoctorDetail/>} />
            <Route path="/hospitals/:hospitalId" element={<HospitalsDetail/>} />
        </Routes>
        <Footer/>
    </>
  )
}

export default App
