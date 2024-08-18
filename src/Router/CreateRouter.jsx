import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import UserRegistrationForm from "../components/UserRegistrationForm";
import VehicleRegistrationForm from "../components/VehicleRegistrationForm";
import App from "../App";
import LandingPage from "../pages/LandingPage";

const CreateRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landingpage" element={<LandingPage />}/>
        <Route path="/userform" element={<UserRegistrationForm />} />
        <Route path="/userform/vehicleform" element={<VehicleRegistrationForm />}/>
      </Route>
    )
  );

export default CreateRouter;
