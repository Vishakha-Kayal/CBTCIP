import Navbar from "../Home/Navbar";
import { IoSearch } from "react-icons/io5";
import { assets, formatTime } from "../../assets/assets";
import { useEffect, useState} from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getTomorrow,
  getThisWeek,
  getThisWeekend,
  getNextWeek,
  getThisMonth,
  getNextMonth,
} from "../../assets/assets";
import { getEvents } from "../../api/eventApi";

const Event = () => {
  const [eventDetailsApi, setEventDetailsApi] = useState([]);
  const [eventDetails, setEventDetails] = useState([]);
  const [originalEventDetails, setOriginalEventDetails] = useState([]);
  const [isPending, setIsPending] = useState();

  const [filters, setFilters] = useState({
    free: false,
    ticketed: false,
    today: false,
    tomorrow: false,
    thisweek: false,
    weekend: false,
    nextweek: false,
    thismonth: false,
    nextmonth: false,
    Adventure: false,
    Charity: false,
    Sports: false,
    Business: false,
    Technology: false,
    Food: false,
    Arts: false,
    Comedy: false,
  });

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getEvents();
      setEventDetails(response.data.eventlists);
      setOriginalEventDetails(response.data.eventlists);
      setEventDetailsApi(response.data.eventlists);
    }
    fetchEvents();
  }, []);

  // Log state variables after they have been updated
  // useEffect(() => {
  //   console.log("event", eventDetails);
  // }, [eventDetails, originalEventDetails, eventDetailsApi]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.checked });
  };

  const onHandleinput = (e) => {
    console.log("eventDetails", eventDetails);
    const filteredEvents = eventDetails.filter((event) =>
      event.category.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setEventDetails(filteredEvents);
    if (e.target.value == "") {
      setEventDetails(originalEventDetails);
    }
    if (eventDetails.length == 0) return <>No searched data available</>;
  };

  useEffect(() => {
    const applyFilters = () => {
      let filteredEvents = eventDetailsApi;
      console.log("filtered", filteredEvents);

      // Date Filters
      if (filters.today) {
        // const { start, end } = getTomorrow();
        filteredEvents = filteredEvents.filter((event) => {
          const eventDate = new Date(event.startDate);
          return eventDate == new Date(Date.now());
        });
      }
      if (filters.tomorrow) {
        const { start, end } = getTomorrow();
        filteredEvents = filteredEvents.filter((event) => {
          const eventDate = new Date(event.startDate);
          return eventDate >= start && eventDate <= end;
        });
      }
      if (filters.thisweek) {
        const { start, end } = getThisWeek();
        filteredEvents = filteredEvents.filter((event) => {
          const eventDate = new Date(event.startDate);
          return eventDate >= start && eventDate <= end;
        });
      }
      if (filters.weekend) {
        // This Weekend
        const { start, end } = getThisWeekend();
        filteredEvents = filteredEvents.filter((event) => {
          const eventDate = new Date(event.startDate);
          return eventDate >= start && eventDate <= end;
        });
      }
      if (filters.nextweek) {
        // Next Week
        const { start, end } = getNextWeek();
        filteredEvents = filteredEvents.filter((event) => {
          const eventDate = new Date(event.startDate);
          return eventDate >= start && eventDate <= end;
        });
      }
      if (filters.thismonth) {
        // This Month
        const { start, end } = getThisMonth();
        filteredEvents = filteredEvents.filter((event) => {
          const eventDate = new Date(event.startDate);
          return eventDate >= start && eventDate <= end;
        });
      }
      if (filters.nextmonth) {
        // Next Month
        const { start, end } = getNextMonth();
        filteredEvents = filteredEvents.filter((event) => {
          const eventDate = new Date(event.startDate);
          return eventDate >= start && eventDate <= end;
        });
      }
      // Add other date filters similarly...

      // Price Filters
      if (filters.free && filters.ticketed) {
        filteredEvents = filteredEvents.filter(
          (event) =>
            event.eventType === "free" || event.eventType === "ticketed"
        );
      } else if (filters.free) {
        filteredEvents = filteredEvents.filter(
          (event) => event.eventType === "free"
        );
      } else if (filters.ticketed) {
        filteredEvents = filteredEvents.filter(
          (event) => event.eventType === "ticketed"
        );
      }

      // Category filters
      if (filters.Adventure) {
        filteredEvents = filteredEvents.filter(
          (event) => event.category === "Travel & Adventures"
        );
      }
      if (filters.Charity) {
        filteredEvents = filteredEvents.filter(
          (event) => event.category === "Charity & Causes"
        );
      }
      if (filters.Sports) {
        filteredEvents = filteredEvents.filter(
          (event) => event.category === "Sports & Fitness"
        );
      }
      if (filters.Business) {
        filteredEvents = filteredEvents.filter(
          (event) => event.category === "Business & Networking"
        );
      }
      if (filters.Technology) {
        filteredEvents = filteredEvents.filter(
          (event) => event.category === "Technology"
        );
      }
      if (filters.Food) {
        filteredEvents = filteredEvents.filter(
          (event) => event.category === "Food & Drink"
        );
      }
      if (filters.Comedy) {
        filteredEvents = filteredEvents.filter(
          (event) => event.category === "Comedy & Entertainment"
        );
      }
      if (filters.Arts) {
        filteredEvents = filteredEvents.filter(
          (event) => event.category === "Arts & Culture"
        );
      }

      setEventDetails(filteredEvents);
    };

    applyFilters();
  }, [filters]);

  return (
    <>
      <Navbar />
      <ToastContainer />
      <section
        style={{
          background:
            "linear-gradient(0deg, rgba(43, 41, 61, 0.50) 0%, rgba(43, 41, 61, 0.50) 100%), linear-gradient(90deg, #2B293D -4.38%, rgba(45, 44, 60, 0.80) 49.85%, #2B293D 104.07%)",
          height: "40vh",
        }}
        className="flex flex-col items-center justify-center"
      >
        <h4 className="font-primary text-2xl leading-[2rem] md:text-4xl text-white font-bold md:leading-[4.375rem]">
          Explore a world of events. Find what excites you!
        </h4>
        <aside className="w-[38rem] flex bg-white mt-6 z-40 rounded">
          <div className="w-[10%] h-[3.5rem] flex justify-center items-center">
            <IoSearch
              style={{ width: "2rem", height: "1.8rem", fontWeight: "900" }}
            />
          </div>
          <h3 className="w-[80%] h-full">
            {" "}
            <input
              type="text"
              className="font-primary w-full h-full outline-none"
              placeholder="Search Events, Categories, Location,..."
              onChange={onHandleinput}
            />
          </h3>
        </aside>
      </section>
      <section className="w-full bg-white flex h-screen py-6 px-14">
        <aside className="hidden w-[30%] h-full border-r-[1px] border-black md:flex flex-col gap-4">
          <h2 className="font-primary font-semibold tracking-tight text-3xl">
            Filters
          </h2>
          <article className="border-b-2 border-[#6F6F6F4D] py-5 font-tertiary ">
            <h3 className="text-xl font-semibold text-[#2D2C3C]">Price</h3>
            <div className="py-3 text-[#2B293D]">
              <div>
                <input
                  type="checkbox"
                  name="free"
                  className="text-base"
                  onChange={handleFilterChange}
                />
                <label htmlFor="free" className="pl-2 text-base">
                  Free
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="ticketed"
                  onChange={handleFilterChange}
                />
                <label htmlFor="paid" className="pl-2 text-base">
                  Paid
                </label>
              </div>
            </div>
          </article>

          <article className="border-b-2 border-[#6F6F6F4D] py-5 font-tertiary ">
            <h3 className="text-xl font-semibold text-[#2D2C3C]">Date</h3>
            <div className="py-3 text-[#2B293D]">
              <div>
                <input
                  type="checkbox"
                  name="today"
                  className="text-base"
                  onChange={handleFilterChange}
                />
                <label htmlFor="today" className="pl-2 text-base">
                  Today
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="tomorrow"
                  className="text-base"
                  onChange={handleFilterChange}
                />
                <label htmlFor="tomorrow" className="pl-2 text-base">
                  Tomorrow
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="thisweek"
                  onChange={handleFilterChange}
                />
                <label htmlFor="This Week" className="pl-2 text-base">
                  This Week
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="weekend"
                  onChange={handleFilterChange}
                />
                <label htmlFor="This Week" className="pl-2 text-base">
                  This Weekend
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="nextweek"
                  onChange={handleFilterChange}
                />
                <label htmlFor="nextweek" className="pl-2 text-base">
                  Next Week
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="thismonth"
                  onChange={handleFilterChange}
                />
                <label htmlFor="thismonth" className="pl-2 text-base">
                  This Month
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="nextmonth"
                  onChange={handleFilterChange}
                />
                <label htmlFor="nextmonth" className="pl-2 text-base">
                  Next Month
                </label>
              </div>
            </div>
          </article>

          <article className="border-b-2 border-[#6F6F6F4D] py-5 font-tertiary ">
            <h3 className="text-xl font-semibold text-[#2D2C3C]">Category</h3>
            <div className="py-3 text-[#2B293D]">
              <div>
                <input
                  type="checkbox"
                  name="Adventure"
                  className="text-base"
                  onChange={handleFilterChange}
                />
                <label htmlFor="Adventure" className="pl-2 text-base">
                  Adventure Travel
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  name="Sports"
                  onChange={handleFilterChange}
                />
                <label htmlFor="Sports" className="pl-2 text-base">
                  Sports & Fitness
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Charity"
                  onChange={handleFilterChange}
                />
                <label htmlFor="Charity" className="pl-2 text-base">
                  Charity & Causes
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Business"
                  onChange={handleFilterChange}
                />
                <label htmlFor="Business" className="pl-2 text-base">
                  Business & Networking
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Technology"
                  onChange={handleFilterChange}
                />
                <label htmlFor="Technology" className="pl-2 text-base">
                  Technology
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Food"
                  onChange={handleFilterChange}
                />
                <label htmlFor="Food" className="pl-2 text-base">
                  Food & Drink
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Comedy"
                  onChange={handleFilterChange}
                />
                <label htmlFor="Comedy" className="pl-2 text-base">
                  Comedy & Entertainment
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Arts"
                  onChange={handleFilterChange}
                />
                <label htmlFor="Arts" className="pl-2 text-base">
                  Arts & Culture
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Educational"
                  onChange={handleFilterChange}
                />
                <label htmlFor="Educational" className="pl-2 text-base">
                  Educational & Business
                </label>
              </div>
            </div>
          </article>
        </aside>
        <aside className="w-full md:w-[70%] h-full">
          <h2
            className="float-end font-primary font-semibold tracking-tight text-xl cursor-pointer"
            onClick={() => {
              setEventDetails(originalEventDetails);
            }}
          >
            Clear All Filters
          </h2>
          <article className="w-[95%] mt-14 h-full m-auto flex flex-wrap gap-4">
            {isPending ? (
              <div className="flex justify-center text-2xl font-primary tracking-tighter font-semibold">
                <div className="loader bg-slate-400"></div>
              </div>
            ) : eventDetails.length === 0 ? (
              <div className="flex justify-center text-2xl font-primary tracking-tighter font-semibold">
                No events found. Please try a different search.
              </div>
            ) : (
              eventDetails.map((event, index) => (
                <div
                  className="event-card w-full md:w-[48%] md:h-[17%] bg-white shadow-md flex gap-2"
                  key={index}
                >
                  <div className="w-[40%] h-full relative">
                    <img
                      src={event.banner}
                      alt={event.name}
                      className="w-full h-full"
                    />
                    <div className="bg-[#FFE047] px-2 h-[1.5rem] absolute bottom-0 rounded-tr-md flex justify-center items-center ">
                      <p className="font-secondary text-base font-light whitespace-nowrap">
                        {event.category}
                      </p>
                    </div>
                  </div>
                  <div className="w-[60%] h-full flex flex-col  gap-1">
                    <div className="w-full text-[#2d2c3c]  text-sm font-semibold ">
                      {event.name}
                    </div>
                    <div className="text-[#5a5a5a]  text-sm font-semibold leading-[normal]">
                      {event.location}
                    </div>
                    <div className="w-full text-[#5a5a5a] text-[0.7rem] leading-[normal] uppercase">
                      {formatTime(event.startTime)} -{" "}
                      {formatTime(event.endTime)}
                    </div>
                    <section className="flex items-center gap-2 ">
                      <div className="w-4 h-4 rounded-full bg-black">
                        <img src={assets.ticket} alt="" className="w-4 h-4" />
                      </div>

                      <div className="overflow-hidden text-[#5a5a5a] text-[0.8rem] font-semibold leading-[normal]">
                        {event.eventType != "ticketed"
                          ? "Free"
                          : `INR ${event.ticketPrice}`}
                      </div>
                    </section>
                  </div>
                </div>
              ))
            )}
          </article>
        </aside>
      </section>
    </>
  );
};

export default Event;
