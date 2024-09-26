import Heading from "../Heading";
import PopularEvents from "./PopularEvents";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTomorrow, getThisWeekend } from "../../assets/assets";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getEvents } from "../../api/eventApi";

const Events = () => {
  const [eventDetails, setEventDetails] = useState([]);
  const [originalEventDetails, setOriginalEventDetails] = useState([]);
  const navigate = useNavigate();
  const onHandleClick = () => {
    navigate('/AllEvents')
  }
  const [isPending,setIsPending]=useState(false);
  useEffect(() => {
    const fetchEvents= async () => {
      setIsPending(true)
      const response = await getEvents();
      setIsPending(false)
      setEventDetails(response.data.eventlists);
      setOriginalEventDetails(response.data.eventlists);
    }

    if (isPending) {
      toast.loading("Fetching events...", { toastId: 'loading' });
    } else {
      toast.dismiss('loading');
      if (eventDetails.length > 0) {
        console.log("Events loaded successfully!");
      } else {
        toast.info("No events available.");
      }
    }
    fetchEvents();
  }, []);

  if (isPending) {
    return <div className="w-screen flex justify-center text-4xl text-red-600 mt-11 font-primary tracking-tighter font-semibold">Loading events ...</div>;
  }

  // if (error) {
  //   return <div className="w-screen flex justify-center text-4xl text-red-600 mt-11 font-primary tracking-tighter font-semibold">Error: {error}</div>;
  // }

  if (eventDetails.length === 0) {
    return <div className="w-screen flex justify-center text-4xl text-red-600 mt-11 font-primary tracking-tighter font-semibold">No events available</div>;
  }
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="md:px-12">
        <Heading name="Popular Events in Mumbai" />
        <div className="flex gap-2 mt-6">
          <button className="border-black rounded-full border-[1px] px-2 py-1 text-[0.7rem] md:text-[0.8rem]" onClick=
            {() => eventState.setEventDetails(originalEventDetails)}>
            All
          </button>
          <button className="border-black rounded-full border-[1px] px-2 py-1 text-[0.7rem] md:text-[0.8rem]" onClick={() => {
            eventState.setEventDetails(eventState.eventDetails.filter((event) => {
              const eventDate = new Date(event.startdate)
              return event.startdate == new Date(Date.now())
            }))
          }}>
            Today
          </button>
          <button className="border-black rounded-full border-[1px] px-2 py-1 text-[0.7rem] md:text-[0.8rem]" onClick={() => {
            eventState.setEventDetails(eventState.eventDetails.filter((event) => {
              const { start, end } = getTomorrow();
              const eventDate = new Date(event.startdate)
              return eventDate >= start && eventDate <= end;
            }))
          }}>
            Tomorrow
          </button>
          <button className="border-black rounded-full border-[1px] px-2 py-1 text-[0.7rem] md:text-[0.8rem]" onClick={() => {
            eventState.setEventDetails(eventState.eventDetails.filter((event) => {
              const { start, end } = getTomorrow();
              const eventDate = new Date(event.startdate)
              return eventDate >= start && eventDate <= end;
            }))
          }}>
            This Weekend
          </button>
          <button className="border-black rounded-full border-[1px] px-2 py-1 text-[0.7rem] md:text-[0.8rem]" onClick={() => {
            eventState.setEventDetails(eventState.eventDetails.filter((event) => {
              return "free" == event.eventType;
            }))
          }}>
            Free
          </button>
        </div>
      </div>
      {/* <div className="mt-6 md:px-12 md:flex md:flex-row  gap-2"> */}
      <div className="mt-6 grid grid-cols-1  md:grid md:grid-cols-3 md:px-12 gap-4 ">
        <PopularEvents eventDetails={eventDetails} />

      </div>
      <Button onHandleClick={onHandleClick} />
    </>
  );
};

export default Events;
