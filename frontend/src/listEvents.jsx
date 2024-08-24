import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { url } from "./App";

export const listEventsContext = createContext(null);

export const EventsProvider = (props) => {
    const [eventDetails, setEventDetails] = useState([]);
    const [originalEventDetails, setOriginalEventDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
     try{
      setIsLoading(true);
      const response = await axios.get(`${url}/api/listEvents`);
      setEventDetails(response.data.eventlists);
      setOriginalEventDetails(response.data.eventlists);
      setError(null);
     }
     catch (err) {
      setError('Failed to fetch events. Please try again later.');
      console.error('Error fetching events:', err);
    } finally {
      setIsLoading(false);
    }
    };
    fetchEvents();
  },[]);
  return (
    <listEventsContext.Provider value={{eventDetails,
      setEventDetails,
      originalEventDetails,
      isLoading,
      error
    }}>{props.children}</listEventsContext.Provider>
  );
};
