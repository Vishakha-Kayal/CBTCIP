import { assets } from "../../assets/assets";
import { IoSearch } from "react-icons/io5";
import { useContext } from "react";
import { listEventsContext } from "../../listEvents";


const Hero = () => {
  const eventState = useContext(listEventsContext);

  const onHandleinput = (e) => {
    const filteredEvents = eventState.eventDetails.filter((event) => 
      event.category.toLowerCase().includes(e.target.value.toLowerCase())
  );
  eventState.setEventDetails(filteredEvents); 
  if(e.target.value==""){
      console.log("use context", eventState.originalEventDetails);
      eventState.setEventDetails(eventState.originalEventDetails); 
    }
    if(eventState.eventDetails.length==0) return <>No searched data available</>
}
  return (
    <>
      <section
        className="z-50 relative  w-full h-48 bg-cover bg-center flex flex-col items-center justify-center lg:inline-flex lg:pt-[11.25rem] lg:pr-[14.438rem] lg:pl-[14.375rem] lg:pb-[7.5rem]"
        style={{ backgroundImage: `url(${assets.HeroImage})` }}
      >
        <div className="heroo absolute top-0 bg-black opacity-50 w-full h-full z-30"></div>
        <h2 className="text-white w-[86%] z-40  md:relative  font-semibold md:p-0 text-xl md:text-[2rem] font-primary md:leading-[3.3rem] md:w-[100%]">
          Don’t miss out! <br></br>{" "}
          <span className="whitespace-nowrap">
            Explore the <span className="text-[#FFE047]">vibrant events</span>{" "}
            <div className="inline md:hidden"><br></br></div>
            happening locally and globally
          </span>
          .
        </h2>
        <aside className="w-[24rem] md:w-[38rem] flex bg-white mt-6 z-40 rounded">
          <div className="w-[10%] h-[3.5rem] flex justify-center items-center">
            <IoSearch
              style={{ width: "2rem", height: "1.8rem", fontWeight: "900" }}
            />
          </div>
          <h3 className="w-[80%] h-full">
            {" "}
            <input
              type="text"
              className="pl-3 md:pl-0 font-primary w-full h-full outline-none"
              placeholder="Search Events, Categories, Location,..."
              onChange={onHandleinput}
            />
          </h3>
        </aside>
      </section>
    </>
  );
};

export default Hero;
