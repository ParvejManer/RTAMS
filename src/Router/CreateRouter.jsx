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
import LandingPageDashboard from "../pages/LandingPageDashboard";
import AdminDashboard from "../components/Admin/AdminDashboard";
import AdminPageDashboard from "../pages/AdminPageDashboard";
import ProtectedRoute from "./ProtectedRoute";
import SigninOptions from "../components/Signin/SigninOptions";
import TotalUsers from "../components/Admin/TotalUsers";
import TotalVehicles from "../components/Admin/TotalVehicles";
import VehicleTransferUser from "../components/VehicleTransfer/VehicleTransferUser";
import AdminVehicleTransfer from "../components/Admin/Admin-TransferRequests/AdminVehicleTransfer";
// const CreateRouter = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<App />}>
//         <Route index element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/signin" element={<Signin />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/landingpage" element={<LandingPage />}/>
//         <Route path="/landingpage/vehicleform" element={<VehicleRegistrationForm/>} />
//         <Route path='/landingpage/history' element={<OwnershipHistory />} />
//         <Route path="/profile" element={<UserProfile />} />
//       </Route>
//     )
//   );



// const CreateRouter = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<AboutUs />} />
//       <Route path="contact" element={<ContactUs />} />
//       <Route path="signin" element={<Signin />} />
//       <Route path="signup" element={<Signup />} />
//       <Route path="landingpage" element={< landingPageDashboard/>}>
//         <Route index element={< LandingPage/>} />
//         <Route path="history" element={<OwnershipHistory />} />
//         <Route path="vehicleform" element={<VehicleRegistrationForm />} />
//       </Route>
//       <Route path="profile" element={<UserProfile />} />
//     </Route>
//   )
// );

const CreateRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SigninOptions />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPageDashboard />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="landingpage" element={<LandingPageDashboard />}>
            <Route index element={<LandingPage />} />
            <Route path="history" element={<OwnershipHistory />} />
            <Route path="vehicleform" element={<VehicleRegistrationForm />} />
            <Route path="transferVehicle" element={< VehicleTransferUser />} />
          </Route>
          <Route path="profile" element={<UserProfile />} />
        </Route>
        <Route path="admin" element={<AdminPageDashboard />}>
          <Route index element={<AdminDashboard />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="history" element={<OwnershipHistory />} />
          <Route path="user" element={<TotalUsers />} />
          <Route path="vehicle" element={<TotalVehicles />} />
          <Route path="transfer" element={<AdminVehicleTransfer />} />
        </Route>        
      </Route>
    </>

  )
);


export default CreateRouter;
