import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import Booking from "./components/Booking";
import Reviews from "./components/Reviews";
// import Pay from "./components/Pay";
// import Footer from "./components/Footer";
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
      </Routes>
      {/* <Footer /> */}




      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
