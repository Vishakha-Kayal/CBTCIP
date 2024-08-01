import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Route, Routes ,useNavigate} from "react-router-dom"
import Navbar from "./components/Home/Navbar";
import useWindowWidth from "./components/hooks/useWindowWidth";
import SplashScreen from "./components/SplashScreen";
import Home from "./components/Home/Home";
import CreateAccount from "./components/Signup";
import Login from "./components/Login";
import CreateEvent from "./components/Event/CreateEvent";
import EventPage from "./components/Event/EventPage";
import Event from "./components/Event/Event";
import About from "./components/About";
import Contact from "./components/Contact";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import NavbarRegistered from "./components/Home/NavbarRegistered";
// export const url = "https://event360.onrender.com";
export const url = "http://localhost:3000";


function App() {
  const navigate = useNavigate();
  const [checkAuth, setCheckAuth] = useState(false)

  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    // console.log("token = ",token);
    if (!token) return false;
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      console.log("currenttime",currentTime); // Current time in seconds
      console.log("decodedtime",decodedToken.exp); // Current time in seconds
      // if(decodedToken.exp > currentTime){
      //   localStorage.removeItem("token");
      // }
      return decodedToken.exp > currentTime; // Check if token is expired
    } catch (error) {
      console.error("Error decoding token:", error);
      return false;
    }
  }

  const handleLogin = (token) => {
    console.log("handleLogin called");
    localStorage.setItem("token", token); 
    setCheckAuth(true);
  };

  const handleSignup = (token) => {
    localStorage.setItem("token", token);
    setCheckAuth(true);
  };

  const onHandleLogout = ()=>{
    localStorage.setItem("token","");
    setCheckAuth(false);
    navigate('/');  
  }

  return (
    <>
      {/* <SplashScreen/> */}
      <main className="w-full h-full  bg-[#7e79672c]">
        <Routes>
          <Route path="/Signup" element={<CreateAccount onSignup={handleSignup} />} />
          <Route path="/Login" element={<Login onLogin={handleLogin} />} />
          <Route path="/" element={checkAuth ? <> <NavbarRegistered onHandleLogout={onHandleLogout}/><Home /></> : <> <Navbar /><Home /></>} />
          <Route path="/CreateEvent" element={<AuthenticatedRoute element={<CreateEvent />} isAuthenticated={isAuthenticated()} />} />
          <Route path="/AllEvents" element={<Event />} />
          <Route path='/api/eventpage/:id' element={<EventPage />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
// bg-[#7e79672c]
// bg-[#ffe04722]
