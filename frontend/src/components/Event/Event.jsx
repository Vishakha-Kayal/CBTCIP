import Navbar from "../Home/Navbar";
import { IoSearch } from "react-icons/io5";
import { assets, formatTime } from "../../assets/assets";
import { useEffect, useState } from "react";
import axios from "axios";
import {url} from  "../../App"

const Event = () => {
  const [eventDetails,setEventDetails]=useState([])
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get(`${url}/api/listEvents`);
      setEventDetails(response.data.eventlists)
      console.log(eventDetails);
    };
    fetchEvents();
  },[]);

  return (
    <>
      <Navbar />
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
            />
          </h3>
        </aside>
      </section>
      <section className="w-full bg-white flex h-screen py-6 px-14">
        <aside className="w-[30%] h-full border-r-[1px] border-black flex flex-col gap-4">
          <h2 className="font-primary font-semibold tracking-tight text-3xl">
            Filters
          </h2>
          <article className="border-b-2 border-[#6F6F6F4D] py-5 font-tertiary ">
            <h3 className="text-xl font-semibold text-[#2D2C3C]">Price</h3>
            <div className="py-3 text-[#2B293D]">
              <div>
                <input type="checkbox" name="free" className="text-base" />
                <label htmlFor="free" className="pl-2 text-base">
                  Free
                </label>
              </div>
              <div>
                <input type="checkbox" name="paid" />
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
                <input type="checkbox" name="free" className="text-base" />
                <label htmlFor="free" className="pl-2 text-base">
                  Today
                </label>
              </div>
              <div>
                <input type="checkbox" name="free" className="text-base" />
                <label htmlFor="free" className="pl-2 text-base">
                  Tomorrow
                </label>
              </div>
              <div>
                <input type="checkbox" name="paid" />
                <label htmlFor="paid" className="pl-2 text-base">
                  This Week
                </label>
              </div>
              <div>
                <input type="checkbox" name="paid" />
                <label htmlFor="paid" className="pl-2 text-base">
                  This Weekend
                </label>
              </div>
              <div>
                <input type="checkbox" name="paid" />
                <label htmlFor="paid" className="pl-2 text-base">
                  Next Week
                </label>
              </div>
              <div>
                <input type="checkbox" name="paid" />
                <label htmlFor="paid" className="pl-2 text-base">
                  This Month
                </label>
              </div>
              <div>
                <input type="checkbox" name="paid" />
                <label htmlFor="paid" className="pl-2 text-base">
                  Next Month
                </label>
              </div>
            </div>
          </article>

          <article className="border-b-2 border-[#6F6F6F4D] py-5 font-tertiary ">
            <h3 className="text-xl font-semibold text-[#2D2C3C]">Price</h3>
            <div className="py-3 text-[#2B293D]">
              <div>
                <input type="checkbox" name="free" className="text-base" />
                <label htmlFor="free" className="pl-2 text-base">
                  Adventure Travel
                </label>
              </div>
              <div>
                <input type="checkbox" name="paid" />
                <label htmlFor="paid" className="pl-2 text-base">
                  Art Exhibitions
                </label>
              </div>
              <div>
                <input type="checkbox" name="paid" />
                <label htmlFor="paid" className="pl-2 text-base">
                  Family & Kids
                </label>
              </div>
              <div>
                <input type="checkbox" name="paid" />
                <label htmlFor="paid" className="pl-2 text-base">
                  Charity & Causes
                </label>
              </div>
              <div>
                <input type="checkbox" name="paid" />
                <label htmlFor="paid" className="pl-2 text-base">
                  Business & Networking
                </label>
              </div>
              <div>
                <input type="checkbox" name="paid" />
                <label htmlFor="paid" className="pl-2 text-base">
                  Technology
                </label>
              </div>
              <div>
                <input type="checkbox" name="paid" />
                <label htmlFor="paid" className="pl-2 text-base">
                  Food & Drink
                </label>
              </div>
              <div>
                <input type="checkbox" name="paid" />
                <label htmlFor="paid" className="pl-2 text-base">
                  Comedy & Entertainment
                </label>
              </div>
              <div>
                <input type="checkbox" name="paid" />
                <label htmlFor="paid" className="pl-2 text-base">
                  Arts & Culture
                </label>
              </div>
              <div>
                <input type="checkbox" name="paid" />
                <label htmlFor="paid" className="pl-2 text-base">
                  Educational & Business
                </label>
              </div>
            </div>
          </article>
        </aside>
        <aside className="w-[70%] h-full">
          <h2 className="float-end font-primary font-semibold tracking-tight text-xl">
            Clear All Filters
          </h2>
          <article className="w-[95%] mt-14 h-full m-auto flex flex-wrap gap-4">
            {eventDetails.map((event, index) => (

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
                    {formatTime(event.startTime)} - {formatTime(event.endTime)}
                  </div>
                  <section className="flex items-center gap-2 ">
                    <div className="w-4 h-4 rounded-full bg-black">
                      <img src={assets.ticket} alt="" className="w-4 h-4" />
                    </div>

                    <div className="overflow-hidden text-[#5a5a5a] text-[0.8rem] font-semibold leading-[normal]">
                    {event.eventType != "ticketed" ? "Free" : `INR ${event.ticketPrice}`}
                    </div>
                  </section>
                </div>
              </div>

            ))}
          </article>
        </aside>
      </section>
    </>
  );
};

export default Event;
