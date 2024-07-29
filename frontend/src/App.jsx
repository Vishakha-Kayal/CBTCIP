import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"
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
export const url = "http://localhost:3000";


function App() {
  const [checkAuth, setCheckAuth] = useState(false)
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    console.log("token = ",token);
    return !!token;
  }
  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setCheckAuth(true);
  };
  const handleSignup = (token) => {
    localStorage.setItem("token", token);
    setCheckAuth(true);
  };
  return (
    <>
      {/* <SplashScreen/> */}
      <main className="w-full h-full  bg-[#7e79672c]">
        <Routes>
          <Route path="/Signup" element={<CreateAccount onSignup={handleSignup} />} />
          <Route path="/Login" element={<Login onLogin={handleLogin} />} />
          <Route path="/" element={checkAuth ? <> <NavbarRegistered /><Home /></> : <> <Navbar /><Home /></>} />
          <Route path="/CreateEvent" element={<AuthenticatedRoute element={<CreateEvent />} isAuthenticated={isAuthenticated()} />} />
          <Route path="/AllEvents" element={<Event />} />
          <Route path='/eventpage/:id' element={<EventPage />} />
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