import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { url } from "./App";

export const listEventsContext = createContext(null);

export const EventsProvider = (props) => {
    const [eventDetails, setEventDetails] = useState([]);
    const [originalEventDetails, setOriginalEventDetails] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get(`${url}/api/listEvents`);
      setEventDetails(response.data.eventlists);
      setOriginalEventDetails(response.data.eventlists);
    };
    fetchEvents();
  },[]);
  return (
    <listEventsContext.Provider value={{eventDetails,setEventDetails,originalEventDetails}}>{props.children}</listEventsContext.Provider>
  );
};
