import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { assets, formatTime } from '../assets/assets';
import { url } from '../App';

const Dashboard = () => {
  const [event, setEvent] = useState([])
  const Navigate = useNavigate();
  const [username, setUsername] = useState("")
  let userId;

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) Navigate('/login')
      const decodedToken = jwtDecode(token);
      userId = decodedToken._id;
      // console.log(userId);
      
      const response = await axios.get(`${url}/users/userWith/${userId}`);
      if (response.data.success) {
        // console.log("response", response.data.userEvent);
        if (Array.isArray(response.data.userEvent)) {
          setEvent(response.data.userEvent);
        } else if (response.data.userEvent) {
          setEvent([response.data.userEvent]);
        } else {
          setEvent([]);
        }
      }
      setUsername(decodedToken.username)
    }
    fetchUser()
  }, [])

  const editBtn = async (eventId) => {
    const response = await axios.post(`${url}/users/editThis/${eventId}`)
  }
  const deleteBtn = async (eventId) => {      
    try {
      const response = await axios.post(`${url}/users/deleteThis/${eventId}`);
      if (response.data.success) {
        setEvent(prevEvents => prevEvents.filter(event => event._id !== eventId));
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  }

  return (
    <div className='w-full min-h-screen'>
      <header className='text-center text-2xl font-semibold'>
        Welcome {username} to your dashboard
      </header>
      <div className='px-12 py-9 w-full flex flex-wrap'>
        {event.map((data, index) => {
          const {banner, name, category, location, startTime, endTime, ticketPrice, eventType, startDate, endDate} = data;
          
          const dateObj = new Date(startDate);
          const monthNames = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
          ];
          const monthIndex = dateObj.getUTCMonth();
          const monthAbbreviation = monthNames[monthIndex];

          const date = dateObj.getUTCDate();
          const endDateObj = new Date(endDate);
          const endDateDay = endDateObj.getUTCDate();

          return (
            <div key={index}
              className="w-[40%] eventDiv flex flex-col mb-2 cursor-pointer hover:bg-[#f7f6f5] transition-all ease-linear 2s h-[27rem] mr-4"
            >
              <div className="w-full h-[60%] overflow-hidden relative">
                <img
                  src={banner}
                  alt={name}
                  className="w-full h-full object-cover"
                />
                <div className="bg-[#FFE047] px-2 h-[2.188rem] absolute bottom-0 rounded-tr-md flex justify-center items-center">
                  <p className="font-secondary text-lg font-light">
                    {category}
                  </p>
                </div>
              </div>
              <div className="h-[40%] md:px-3 flex gap-6 mt-3 px-3 w-full font-['open sans']">
                <div className="w-[25%] flex flex-col">
                  <h2 className="text-[#4539b4] text-center font-primary text-2xl font-semibold leading-[normal]">
                    {monthAbbreviation}
                  </h2>
                  <h2 className="text-[#2d2c3c] text-center font-primary text-[1.625rem] font-bold leading-[normal]">
                    {date === endDateDay ? `${date}` : `${date}-${endDateDay}`}
                  </h2>
                </div>
                <div className="w-[75%] flex flex-col gap-1">
                  <div className="w-[22rem] overflow-hidden text-[#2d2c3c] text-xl font-semibold leading-[normal] line-clamp-2">
                    {name}
                  </div>
                  <div className="text-[#5a5a5a] text-base font-semibold leading-[normal]">
                    {location}
                  </div>
                  <div className="w-[11.875rem] text-[#5a5a5a] text-base leading-[normal] uppercase">
                    <span>{formatTime(startTime)} </span>-{" "}
                    <span>{formatTime(endTime)}</span>
                  </div>
                  <section className="flex justify-between mt-1">
                    <div className="flex">
                      <div className="w-6 h-6 rounded-full">
                        <img src={assets.ticketevent} alt="" className="w-5 h-5" />
                      </div>
                      <div className="overflow-hidden text-[#5a5a5a] text-sm font-semibold leading-[normal]">
                        {eventType !== "ticketed" ? "Free" : `INR ${ticketPrice}`}
                      </div>
                    </div>
                    <div className="flex gap-2 text-lg font-semibold text-[#5a5a5a]">
                      <button onClick={() => editBtn(data._id)}>Edit</button>
                      <button onClick={() => deleteBtn(data._id)}>Delete</button>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard