import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { assets ,formatTime} from "../../assets/assets";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { FiClock } from "react-icons/fi";
import SelectTickets from "../TicketBooking/SelectTickets";
import axios from "axios";
import { url } from "../../App";

const EventPage = () => {
  const [event, setEvent] = useState({}); // Changed to useState
  const { id } = useParams();

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get(`${url}/api/listEvents`);
      const eventDetails = await response.data.eventlists;
      // console.log(eventDetails);
      setEvent(eventDetails[id]);
    };
    fetchEvents();
  }, []);

  const eventDate = new Date(event.startDate);
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const options = { year: 'numeric', month: 'short', day: '2-digit' };
  const formattedDate = eventDate.toLocaleDateString('en-US', options).replace(',', ''); 
  console.log(eventDate);

  const [buyTicket, setBuyTicket] = useState(false);
  const navigate = useNavigate();
  const onHandleBuyTicketClick = () => {
    setBuyTicket(true);
  };
  const onHandleCloseTicket = () => {
    setBuyTicket(false);
  };
  return (
    <>
      <main className="w-full min-h-screen bg-[#E9E8E5] relative">
        {buyTicket && (
          <SelectTickets onHandleCloseTicket={onHandleCloseTicket} event={event}/>
        )}
        <div
          className={`z-20 flex w-full min-h-screen pt-6 font-tertiary bg-[#E9E8E5] ${
            buyTicket ? "opacity-[10%]" : ""
          }`}
        >
          <section
            className="w-[10%] h-full flex justify-center text-3xl cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <GoArrowLeft />
          </section>
          <section className="w-[80%] h-full flex flex-col">
            <div className="w-full h-[70vh] flex flex-col">
              <aside className="h-[60%]">
                <img
                  src={event.banner}
                  alt={event.name}
                  className="rounded-[1rem] w-full h-full"
                />
              </aside>
              <aside className="md:h-[40%] px-6 flex flex-col justify-center gap-4 ">
                <div className="flex justify-between">
                  <h1 className="capitalize tracking-tighter font-tertiary text-3xl md:text-[2.25rem] font-bold">
                    {event.name}
                  </h1>
                  <div className="hidden md:flex items-center gap-4 text-xl">
                    <FaStar />
                    <IoShareSocialOutline />
                  </div>
                </div>
                <div className="flex flex-col gap-3 md:flex-row  md:justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-lg">
                      Date And Time Information
                    </p>
                    <article className="flex gap-3 items-center">
                      <LuCalendarDays />
                      {dayNames[eventDate.getUTCDay()]} , {formattedDate}
                    </article>
                    <article className="flex gap-3 items-center">
                      <FiClock />
                      <span>{formatTime(event.startTime)} </span>-{" "}
                      <span>{formatTime(event.endTime)}</span>
                    </article>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-lg">Ticket Information</p>
                    <div className="flex gap-3 items-center">
                      <img
                        src={assets.ticketicon}
                        alt="ticket"
                        className="w-5 h-5"
                      />
                      <p className="text-sm"><span>{event.eventType==="free"?"It's Free":` Standard Ticket: ₹ ${event.ticketPrice} each`}</span></p>
                    </div>
                    <div
                      className={event.eventType==="free"?`hidden`:`mt-1 flex  gap-3 bg-[#FFE047] py-1 px-2 w-[75%] rounded-lg cursor-pointer`}
                      onClick={onHandleBuyTicketClick}
                    >
                      <img
                        src={assets.ticketicon}
                        alt="ticket"
                        className="h-5"
                      />
                      Buy Tickets
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            <div className="w-full h-[80%] ">
              <section className="flex flex-col justify-between col-span-2 p-3 mt-4">
                <div className="mb-4 flex flex-col gap-2">
                  <p className="tracking-tighter font-bold text-3xl">
                    Event Description
                  </p>
                  <article className="border-[2px] border-black text-base tracking-tighter rounded-lg p-4 text-[1.2rem] text-justify gap-3 ">
                    {event.description}
                  </article>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 pb-10">
                  <p className="font-bold tracking-tighter text-2xl md:text-3xl">
                    Hosted By{" "}
                    <span className="text-[#2B293D] inline-block px-2 rounded uppercase font-mono bg-[#FFE047] ">
                      {" "}
                      {event.organiser}
                    </span>
                  </p>
                  <p className="font-semibold text-lg">
                    Contact for more info at : {event.contactInformation}
                  </p>
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default EventPage;
