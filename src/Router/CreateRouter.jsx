import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
// import UserRegistrationForm from "../components/UserRegistrationForm";
import VehicleRegistrationForm from "../components/VehicleRegistrationForm";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import OwnershipHistory from "../pages/OwnershipHistory";
import UserProfile from "../pages/UserProfile";

const CreateRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/landingpage" element={<LandingPage />}/>
        <Route path="/landingpage/vehicleform" element={<VehicleRegistrationForm/>} />
        <Route path='/landingpage/history' element={<OwnershipHistory />} />
        <Route path="/profile" element={<UserProfile />} />
        {/* <Route path="/userform" element={<UserRegistrationForm />} />
        <Route path="/userform/vehicleform" element={<VehicleRegistrationForm />}/> */}
      </Route>
    )
  );

export default CreateRouter;
