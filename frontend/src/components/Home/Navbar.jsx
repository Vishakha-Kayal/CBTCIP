import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom"
import NavbarLogo from "../NavbarLogo";

const Navbar = () => {

  return (
    <nav className='md:px-12 w-full h-14 bg-[#2b293d] px-2 flex justify-between items-center'>
        <NavbarLogo/>
      <div className="mr-4 md:hidden">
        {/* <img src={ticket} alt="" className="w-8 h-8" /> */}
        <GiHamburgerMenu style={{ color: "FFE047", width: "2rem", height: "1.5rem", cursor: "pointer" }} />
      </div>
      <div className="h-full hidden md:flex gap-3 items-center justify-evenly">
        <p className="flex items-center px-2 text-xl relative font-secondary text-[#FFE047] nav-item"><Link to="/">Home</Link></p>
        <p className="flex items-center px-2 text-xl relative font-secondary text-[#FFE047] nav-item"><Link to="/AllEvents">Events</Link></p>
        <p className="flex items-center px-2 text-xl relative font-secondary text-[#FFE047] nav-item"><Link to="/About">AboutUs</Link></p>
        <p className="flex items-center px-2 text-xl relative font-secondary text-[#FFE047] nav-item"><Link to="/Contact">Contact</Link></p>
      </div>
      <div className="h-full hidden md:flex gap-3 md:items-center md:justify-evenly">
        <p className="flex items-center px-2 text-xl relative font-secondary text-[#FFE047] nav-item"><Link to="/CreateEvent">Create Event</Link></p>
        <p className="flex items-center px-2 text-xl relative font-secondary text-[#FFE047] nav-item"><Link to="/Login">Login</Link></p>
        <p className="bg-[#FFE047] px-2 text-xl font-secondary flex items-center rounded"><Link to="/SignUp">Sign Up</Link></p>
      </div>

    </nav>
  )
}

export default Navbar