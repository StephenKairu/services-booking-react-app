// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import Booking from "./components/Booking";
import Reviews from "./components/Reviews";
import ContactPage from "./components/ContactPage"
// import Pay from "./components/Pay";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contactpage" element={<ContactPage />} />
      </Routes>
      <Footer path="/footer"/>
    </div>
  );
}

export default App;
