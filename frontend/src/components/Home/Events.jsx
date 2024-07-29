// import { eventDetails } from "../../assets/assets"
import Heading from "../Heading";
import PopularEvents from "./PopularEvents";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {url} from  "../../App"


const Events = () => {
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get(`${url}/api/listEvents`);
      setEventDetails(response.data.eventlists)
      console.log(eventDetails);
    };
    fetchEvents();
  },[]);
const navigate=useNavigate();
const [eventDetails,setEventDetails]=useState([])
const onHandleClick = () =>{
  navigate('/AllEvents')
}

  return (
    <>
      <div className="md:px-12">
        <Heading name="Popular Events in Mumbai" />
        <div className="flex gap-2 mt-6">
          <button className="border-black rounded-full border-[1px] px-2 py-1 text-[0.7rem] md:text-[0.8rem]">
            All
          </button>
          <button className="border-black rounded-full border-[1px] px-2 py-1 text-[0.7rem] md:text-[0.8rem]">
            Today
          </button>
          <button className="border-black rounded-full border-[1px] px-2 py-1 text-[0.7rem] md:text-[0.8rem]">
            Tomorrow
          </button>
          <button className="border-black rounded-full border-[1px] px-2 py-1 text-[0.7rem] md:text-[0.8rem]">
            This Weekend
          </button>
          <button className="border-black rounded-full border-[1px] px-2 py-1 text-[0.7rem] md:text-[0.8rem]">
            Free
          </button>
        </div>
      </div>
      {/* <div className="mt-6 md:px-12 md:flex md:flex-row  gap-2"> */}
      <div className="mt-6 grid grid-cols-1  md:grid md:grid-cols-3 md:px-12 gap-4 ">
        <PopularEvents eventDetails={eventDetails}/>
    
      </div>
      <Button onHandleClick={onHandleClick}/>
    </>
  );
};

export default Events;
