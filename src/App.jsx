import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';
function App() {


  const [role, setRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = localStorage.getItem('token');

    if(getToken){
      try {
        const decoded = jwtDecode(getToken);
        setRole(decoded.role);
        console.log(decoded.role);

        if(decoded.role === 'admin'){
          navigate('/admin')
        }else{
          navigate('/')
        }
      } catch (error) {
        console.error("Erroe while decoding token", error);
      }
    }else {
      navigate('/signin')
    }
  },[navigate]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
