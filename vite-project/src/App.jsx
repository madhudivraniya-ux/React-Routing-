import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Register from "./Pages/Register";
import Login from "./Pages/Login";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;