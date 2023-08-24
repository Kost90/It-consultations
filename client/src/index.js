import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Store } from "./api/Store";
import './App.css';

import Home from "./pages/Home";
import Services from "./pages/Services";
import Experts from "./pages/Experts";
import Registerpage from "./pages/Registerpage";
import Profilepage from "./pages/Profilepage";
import Loginpage from "./pages/Loginpage";
import ITservices from './pages/ITservices';
import LegalServices from './pages/LegalServices.js'
import FinancialServices from './pages/FinancialServices';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/profilepage/:username" element={<Profilepage />} />
          <Route path='itservices' element={<ITservices/>}/>
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/legalservices" element={<LegalServices/>} />
          <Route path='financialservices' element={<FinancialServices/>}/>
        </Routes>

       
        
      </Provider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
