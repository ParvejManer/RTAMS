// src/App.js
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import ContactUs from "./pages/ContactUs";
// import Login from "./pages/Login";
// import UserRegistrationForm from "./components/UserRegistrationForm";
// import VehicleRegistrationForm from "./components/VehicleRegistrationForm";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
