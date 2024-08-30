import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';
function App() {

  const [role, setRole] = useState('');
  const[token,setToken]=useState("");
  

  //  const decoded = jwtDecode(token);  
  //  const role=decoded.role;
  // const navigate = useNavigate();
  // try {
  //   const decoded = jwtDecode(token);
  //   setRole(decoded.role)

  //   console.log(decoded);
  // } catch (error) {
  //   console.error('Error decoding token:', error);
  // }

  // useEffect(() => {
  //   setToken(localStorage.getItem('token'));
  //   if (role === 'user') {
  //     navigate('/');
  //   }
  // },[])
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
