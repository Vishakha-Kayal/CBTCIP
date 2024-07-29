import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom"
import NavbarLogo from "../NavbarLogo";

const NavbarRegistered = () => {
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
          <div className="h-full hidden md:flex gap-3 items-center justify-evenly">
            <p className="flex items-center px-2 text-xl relative font-secondary text-[#FFE047] nav-item"><Link to="/CreateEvent">Create Event</Link></p>
            <p className="flex items-center px-2 text-xl relative font-secondary text-[#FFE047] nav-item"><Link to="/Login">Tickets</Link></p>
            <p className="bg-[#FFE047] px-2 py-1 rounded"><Link to="/SignUp">V</Link></p>
          </div>
    
        </nav>
      )
}

export default NavbarRegistered