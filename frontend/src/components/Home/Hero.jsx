import { assets } from "../../assets/assets";
import { IoSearch } from "react-icons/io5";

const Hero = () => {
  return (
    <>
      <section
        className="z-50 relative w-full h-48 bg-cover bg-center flex flex-col items-center justify-center lg:inline-flex lg:pt-[11.25rem] lg:pr-[14.438rem] lg:pl-[14.375rem] lg:pb-[7.5rem]"
        style={{ backgroundImage: `url(${assets.HeroImage})` }}
      >
        <div className="absolute top-0 bg-black opacity-50 w-full h-full z-30"></div>
        <h2 className="text-white font-semibold text-xl md:text-[2rem] font-primary z-40 md:leading-[3.3rem] md:w-[100%]">
          Don’t miss out! <br></br>{" "}
          <span className="whitespace-nowrap">
            Explore the <span className="text-[#FFE047]">vibrant events</span>{" "}
            happening locally and globally
          </span>
          .
        </h2>
        <aside className="w-[38rem] flex bg-white mt-6 z-40 rounded">
          <div className="w-[10%] h-[3.5rem] flex justify-center items-center">
            <IoSearch style={{width:"2rem",height:"1.8rem",fontWeight:"900"}}/>
          </div>
          <h3 className="w-[80%] h-full"> <input type="text" className="font-primary w-full h-full outline-none" placeholder="Search Events, Categories, Location,..." /></h3>
        </aside>
      </section>
    </>
  );
};

export default Hero;
