import 'bootstrap/dist/css/bootstrap.min.css';

import { SuperDistributor } from './Components/NavBar/Retailor/SuperDistributor/SuperDistributor';
import { Routes, Route } from "react-router-dom"
import Layout from './Layout';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import { Investor } from './Components/NavBar/Retailor/Investor/Investor';
import { Distributor } from './Components/NavBar/Retailor/Distributor/Distributor';
import { DMT } from "./Components/NavBar/Products/DMT/DMT";
import { Casewithdrawal } from './Components/NavBar/Products/CASE-WITHD/Casewhithdrawal';
import { BbpsRecharge } from './Components/NavBar/Products/BBPS-Recharge/BbpsRecharge';
import { Cms } from './Components/NavBar/Products/CMS/Cms';
import { Recharge } from './Components/NavBar/Products/RECHARGE/Recharge';
import { Pancard } from './Components/NavBar/Products/PAN-CARD/Pancard';
import { Aeps } from './Components/NavBar/Products/AEPS/Aeps';
import { MiniMicroAtm } from "./Components/NavBar/Products/ATM/MiniMicroAtm"
import AboutUs from './Components/NavBar/AboutUS/AboutUs';
import Contactus from './Components/NavBar/ContactUS/Contactus';
import Signup from './Components/NavBar/SignUP/Signup';
import Login from './Components/NavBar/LOGIN/Login';
import { DsRetailor } from './Components/NavBar/Retailor/DsRetailor/DsRetailor';
import Faqs from './Components/Footer/FAQS/Faqs';



function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/super-distributer' element={<SuperDistributor />} />
        <Route path='/investor' element={<Investor />} />
        <Route path='/distributor' element={<Distributor />} />
        <Route path='/dsretailor' element={<DsRetailor />} />
        <Route path='/dmt' element={<DMT />} />
        <Route path='/casewithdrawal' element={<Casewithdrawal />} />
        <Route path='/bbps' element={<BbpsRecharge />} />
        <Route path='/cms' element={<Cms />} />
        <Route path='/recharge' element={<Recharge />} />
        <Route path='/pancard' element={<Pancard />} />
        <Route path='/aeps' element={<Aeps />} />
        <Route path='/minimicroatm' element={<MiniMicroAtm />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/faqs' element={<Faqs />} />
      </Routes>
      <Footer />




    </>
  );
}

export default App;
