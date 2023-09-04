import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { Store } from "./api/Store";
import './App.css';

import Home from "./pages/Home";
import Services from "./pages/Services";
import Experts from "./pages/Experts";
import Registerpage from "./pages/Registerpage";
import Profilepage from "./pages/Profilepage";
import Loginpage from "./pages/Loginpage";
import ContactUsPage from "./pages/contactus/ContactUsPage";
import ITservices from './pages/ITservices';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
   <>
   <Provider store={Store}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/profilepage/:username" element={<Profilepage />} />
          <Route path='itservices' element={<ITservices/>}/>
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/contactus" element={<ContactUsPage/>}/>
        </Routes>
        {/* <Footer/> */}
      </Provider>
   </>
  );
}

export default App;

//MAG, it appears this file is unnecessary if you've kept your app inside of index.js