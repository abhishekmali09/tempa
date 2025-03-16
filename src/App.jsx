import { Routes,Route } from "react-router"
import Home from "./pages/home"
import Service from "./pages/service"
import Contact from "./pages/contact"
import Navbar from "./components/navbar"
import Footer from './components/footer'
import FreeQuote from "./pages/freeQuote"
function App() {


  return (
    <>
        <Navbar/>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="/treatments" element={<Service/>} />
            <Route path="/contact-us" element={<Contact/>} />
            <Route path="/free-quote" element={<FreeQuote/>} />
        </Routes>
        <Footer/>
    </>
  )
}

export default App
