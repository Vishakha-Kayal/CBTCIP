import { assets, formatTime } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const PopularEvents = ({ eventDetails }) => {
  const navigate = useNavigate();
  const [eventType, setEventType] = useState("");

  useEffect(() => {
    if (eventDetails.length > 0) {
      setEventType(eventDetails[0].eventType);
    }
  }, [eventDetails]);

  // Check if eventDetails is empty
  if (eventDetails.length === 0) {
    return <div className="w-screen flex justify-center text-2xl font-primary tracking-tighter font-semibold">No searched data available</div>; // Return fallback UI
  }

  return (
    <>
      {eventDetails.map((event, i) => {
        const dateObj = new Date(event.startDate);
        const monthNames = [
          "JAN", "FEB", "MAR", "APR", "MAY", "JUN", 
          "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
        ];
        const monthIndex = dateObj.getUTCMonth();
        const monthAbbreviation = monthNames[monthIndex];

        const date = dateObj.getUTCDate();
        const endDate = new Date(event.endDate).getUTCDate();

        return (
          <div
            className="eventDiv flex flex-col w-full mb-2 cursor-pointer hover:bg-[#f7f6f5] transition-all ease-linear 2s h-[27rem]"
            key={i}
            onClick={() => navigate(`/api/eventpage/${event.id}`)}
          >
            <div className="w-full h-[60%] overflow-hidden relative">
              <img
                src={event.banner}
                alt={event.name}
                className="w-full h-full"
              />
              <div className="bg-[#FFE047] px-2 h-[2.188rem] absolute bottom-0 rounded-tr-md flex justify-center items-center">
                <p className="font-secondary text-lg font-light">
                  {event.category}
                </p>
              </div>
            </div>
            <div className="h-[40%] md:px-3 flex gap-6 mt-3 px-3 w-full font-['open sans']">
              <div className="w-[25%] flex flex-col">
                <h2 className="text-[#4539b4] text-center font-primary text-2xl font-semibold leading-[normal]">
                  {monthAbbreviation}
                </h2>
                <h2 className="text-[#2d2c3c] text-center font-primary text-[1.625rem] font-bold leading-[normal]">
                  {date === endDate ? `${date}` : `${date}-${endDate}`}
                </h2>
              </div>
              <div className="w-[75%] flex flex-col gap-1">
                <div className="w-[22rem] overflow-hidden text-[#2d2c3c] text-xl font-semibold leading-[normal] line-clamp-2">
                  {event.name}
                </div>
                <div className="text-[#5a5a5a] text-base font-semibold leading-[normal]">
                  {event.location}
                </div>
                <div className="w-[11.875rem] text-[#5a5a5a] text-base leading-[normal] uppercase">
                  <span>{formatTime(event.startTime)} </span>-{" "}
                  <span>{formatTime(event.endTime)}</span>
                </div>
                <section className="flex mt-1">
                  <div className="w-6 h-6 rounded-full">
                    <img src={assets.ticketevent} alt="" className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden text-[#5a5a5a] text-sm font-semibold leading-[normal]">
                    {event.eventType !== "ticketed" ? "Free" : `INR ${event.ticketPrice}`}
                  </div>
                </section>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PopularEvents;