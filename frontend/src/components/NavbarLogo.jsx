import { assets } from "../assets/assets";

const NavbarLogo = () => {
  return (
    <div className="h-full flex justify-center items-center gap-1 ">
      <img src={assets.ticket} alt="logo" className="w-8 h-8" />
      <h2 className="text-[#FFE047] font-secondary text-lg md:text-2xl md:mt-1">
        EventPlanner360
      </h2>
    </div>
  );
};

export default NavbarLogo;
