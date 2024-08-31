import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';
function App() {

  const [role, setRole] = useState('');
  const[token,setToken]=useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token1 = localStorage.getItem('token');

    if(token1){
      setToken(token1);
    }
  }, []);

  useEffect(() => {
    if(token){
      try {
        const decoded = jwtDecode(token);
        setRole(decoded.role)
        console.log(decoded.role)

        if(decoded.role === 'user'){
          navigate('/');
        }else{
          navigate('/admin')
        }
      } catch (error) {
        console.error("Error while decoding token", error)
      }
    }
  }, [token, navigate]);


  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
