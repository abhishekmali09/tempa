// import { Routes,Route } from "react-router"
// import Home from "./pages/home"
// import Treatments from "./pages/treatments"
// import Contact from "./pages/contact"
// import Navbar from "./components/navbar"
// import Footer from './components/footer'
// import FreeQuote from "./pages/freeQuote"
// import AboutUs from "./pages/AboutUs"
// import Doctors from "./pages/doctors"
// import Hospitals from "./pages/hospitals"
// import DoctorDetail from "./pages/doctorDetail"
// import HospitalsDetail from "./pages/hospitalsDetail"
// import FreeQuoteDoctorWise from "./pages/freeQuoteDoctorWise"
// import FreeQuoteTreatmentWise from "./pages/freeQuoteTreatmentWise"
// function App() {


//   return (
//     <>
//         <Navbar/>
//         <Routes>
//             <Route index element={<Home/>} />
//             <Route path="/treatments" element={<Treatments/>} />
//             <Route path="/contact-us" element={<Contact/>} />
//             <Route path="/free-quote" element={<FreeQuote/>} />
//             <Route path="/free-quote/d/:doctorId" element={<FreeQuoteDoctorWise/>} />
//             <Route path="/free-quote/t/:treatmentId" element={<FreeQuoteTreatmentWise/>} />
//             <Route path="/about-us" element={<AboutUs/>} />
//             <Route path="/doctors" element={<Doctors/>} />
//             <Route path="/hospitals" element={<Hospitals/>} />
//             <Route path="/doctors/:doctorId" element={<DoctorDetail/>} />
//             <Route path="/hospitals/:hospitalId" element={<HospitalsDetail/>} />
//         </Routes>
//         <Footer/>
//     </>
//   )
// }

// export default App

import {  Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Treatments from "./pages/treatments";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FreeQuote from "./pages/freeQuote";
import AboutUs from "./pages/AboutUs";
import Doctors from "./pages/doctors";
import Hospitals from "./pages/hospitals";
import DoctorDetail from "./pages/doctorDetail";
import HospitalsDetail from "./pages/hospitalsDetail";
import FreeQuoteDoctorWise from "./pages/freeQuoteDoctorWise";
import FreeQuoteTreatmentWise from "./pages/freeQuoteTreatmentWise";
import TreatmentDetail from './pages/TreatmentDetail'; // New component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/free-quote" element={<FreeQuote />} />
        <Route path="/free-quote/d/:doctorId" element={<FreeQuoteDoctorWise />} />
        <Route path="/free-quote/t/:treatmentId" element={<FreeQuoteTreatmentWise />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/doctors/:doctorId" element={<DoctorDetail />} />
        <Route path="/hospitals/:hospitalId" element={<HospitalsDetail />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/treatments/:id" element={<TreatmentDetail />} />

        {/* <Route path="/treatment-details/:id" element={<TreatmentDetails />} />
         */}
      </Routes>
      <Footer />

      </>
  );
}

export default App;