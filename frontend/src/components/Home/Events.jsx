// import { eventDetails } from "../../assets/assets"
import Heading from "../Heading";
import PopularEvents from "./PopularEvents";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState,useContext } from "react";
import { getTomorrow ,getThisWeekend} from "../../assets/assets";
import { listEventsContext } from "../../listEvents";

const Events = () => {
  const eventState = useContext(listEventsContext);
const navigate=useNavigate();
const onHandleClick = () =>{
  navigate('/AllEvents')
}

  return (
    <>
      <div className="md:px-12">
        <Heading name="Popular Events in Mumbai" />
        <div className="flex gap-2 mt-6">
          <button className="border-black rounded-full border-[1px] px-2 py-1 text-[0.7rem] md:text-[0.8rem]" onClick=
          {()=>eventState.setEventDetails(eventState.originalEventDetails)}>
            All
          </button>
          <button className="border-black rounded-full border-[1px] px-2 py-1 text-[0.7rem] md:text-[0.8rem]" onClick={()=>{
            eventState.setEventDetails(eventState.eventDetails.filter((event)=>{
              const eventDate =  new Date(event.startdate)
              return event.startdate == new Date(Date.now())
            }))
          }}>
            Today
          </button>
          <button className="border-black rounded-full border-[1px] px-2 py-1 text-[0.7rem] md:text-[0.8rem]"  onClick={()=>{
            eventState.setEventDetails(eventState.eventDetails.filter((event)=>{
              const { start, end } = getTomorrow();
              const eventDate =  new Date(event.startdate)
              return eventDate >= start && eventDate <= end;
            }))
          }}>
            Tomorrow
          </button>
          <button className="border-black rounded-full border-[1px] px-2 py-1 text-[0.7rem] md:text-[0.8rem]" onClick={()=>{
            eventState.setEventDetails(eventState.eventDetails.filter((event)=>{
              const { start, end } = getTomorrow();
              const eventDate =  new Date(event.startdate)
              return eventDate >= start && eventDate <= end;
            }))
          }}>
            This Weekend
          </button>
          <button className="border-black rounded-full border-[1px] px-2 py-1 text-[0.7rem] md:text-[0.8rem]"onClick={()=>{
            eventState.setEventDetails(eventState.eventDetails.filter((event)=>{
              return "free" == event.eventType;
            }))
          }}>
            Free
          </button>
        </div>
      </div>
      {/* <div className="mt-6 md:px-12 md:flex md:flex-row  gap-2"> */}
      <div className="mt-6 grid grid-cols-1  md:grid md:grid-cols-3 md:px-12 gap-4 ">
        <PopularEvents eventDetails={eventState.eventDetails}/>
    
      </div>
      <Button onHandleClick={onHandleClick}/>
    </>
  );
};

export default Events;
