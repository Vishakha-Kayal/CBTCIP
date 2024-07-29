import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import axios from "axios";
import { url } from "../../App";
import { FaRupeeSign } from "react-icons/fa";

const CreateEvent = () => {
  const [name, setName] = useState("");
  const [organiser, setOrganiser] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [contactInfo, setcontactInfo] = useState("");
  const [image, setImage] = useState(false);
  const [eventType, setEventType] = useState("free");
  const [ticketBoolState, setTicketBoolState] = useState(false);
  const [ticketName, setTicketName] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");

  const navigate = useNavigate();
  const removeFile = useRef();

  const normalStyle = {
    border: "2px solid black",
    backgroundColor: "yellow",
    color: "white",
  };
  const selectedDivStyle = {
    border: "2px solid white",
    backgroundColor: "#2B293D",
    color: "black",
  };

  // const ticketedBgStyle = ticketBoolState ? selectedDivStyle : normalStyle;
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("organiser", organiser);
      formData.append("category", category);
      formData.append("startDate", startDate);
      formData.append("endDate", endDate);
      formData.append("startTime", startTime);
      formData.append("endTime", endTime);
      formData.append("description", description);
      formData.append("location", location);
      formData.append("contactInformation", contactInfo);
      formData.append("image", image);
      formData.append("eventType", eventType);
      formData.append("ticketName", ticketName);
      formData.append("ticketPrice", ticketPrice);

      const token = localStorage.getItem("token");
      const response = await axios.post(`${url}/api/createEvent`, formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );
      
      if (response.data.success) {
        setCategory("")
        setName("")
        toast.success("Event Created");
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error("An error occurred while creating the account.");
    }
  };
  useEffect(() => {
    console.log("ticketBoolState updated:", ticketBoolState);
  }, [ticketBoolState]); // This will run whenever ticketBoolState changes

  const onHandleTicketedEvent = () => {
    setTicketBoolState(() => {
      return ticketBoolState ? false : true;
    });
    setEventType("ticketed");
  };
  const onHandleFreeEvent = () => {
    setTicketBoolState(() => {
      return ticketBoolState ? false : true;
    });
    setEventType("free");
  };

  // useEffect(() => {
  //   console.log(image); // This will log the updated image value whenever it changes
  // }, [image]);

  return (
    <>
      <ToastContainer />
      <div className="w-full min-h-screen bg-[#2b293d] flex justify-center text-[#FFE047] font-secondary">
        <section className="w-full md:w-[55%] h-full">
          <article className="h-full w-[85%] px-8 m-auto">
            <header className="flex gap-6 text-[2.3rem] items-center font-semibold font-primary mb-5 py-3">
              <GoArrowLeft
                onClick={() => {
                  navigate("/");
                }}
                style={{ cursor: "pointer" }}
              />
              <p className="text-[#FFE047] pt-2 font-secondary ">
                {" "}
                Create Event
              </p>
            </header>
            <div className="">
              <form onSubmit={onSubmitHandler}>
                <div className="mb-6">
                  <label
                    htmlFor="title"
                    className=" block text-[1.2rem] font-medium "
                  >
                    Name Of The Event
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="placeholder-[#000000a9] text-[#000000a9] py-1 mt-1 block w-full rounded-md shadow-sm outline-none px-1"
                    placeholder="Lakeside Camping At Pawna"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-6 ">
                  <label
                    htmlFor="title"
                    className="block text-[1.2rem] font-medium "
                  >
                    Organiser Of The Event
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="placeholder-[#000000a9] text-[#000000a9] py-1 mt-1 block w-full  rounded-md outline-none px-1"
                    placeholder="Pehchaan"
                    onChange={(e) => setOrganiser(e.target.value)}
                  />
                </div>

                <div className="mb-6 placeholder-[#000000a9]">
                  <label
                    htmlFor="category"
                    className="block text-[1.2rem] font-medium text-[#FFE047] "
                  >
                    Event Category
                  </label>
                  <select
                    id="category"
                    className="block w-full rounded-md p-1 outline-none text-[#000000a9]"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="Arts & Culture">Arts & Culture</option>
                    <option value="Food & Drink">Food & Drink</option>
                    <option value="Sports & Fitness">Sports & Fitness</option>
                    <option value="Comedy & Entertainment">
                      Comedy & Entertainment
                    </option>
                    <option value="Technology">Technology</option>
                    <option value="Family & Kids">Family & Kids</option>
                    <option value="Business & Networking">
                      Business & Networking
                    </option>
                    <option value="Music">Music</option>
                    <option value="Charity & Causes">Charity & Causes</option>
                    <option value="Education & Learning">
                      Education & Learning
                    </option>
                    <option value="Travel & Adventures">
                      Travel & Adventures
                    </option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <label
                  htmlFor="day"
                  className="block text-[1.2rem] font-medium  mb-2"
                >
                  Sessions
                </label>
                <div className="mb-6 grid grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="day"
                      className="block text-[1.2rem] font-medium "
                    >
                      Start Day
                    </label>
                    <input
                      type="date"
                      id="day"
                      className="text-[#000000a9] py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm outline-none px-1"
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="day"
                      className="block text-[1.2rem] font-medium "
                    >
                      End Day
                    </label>
                    <input
                      type="date"
                      id="day"
                      className="text-[#000000a9] py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm outline-none px-1"
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="time"
                      className="block text-[1.2rem] font-medium "
                    >
                      Start Time
                    </label>
                    <input
                      type="time"
                      id="hour"
                      className="text-[#000000a9] py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm outline-none px-1"
                      min="0"
                      max="23"
                      onChange={(e) => setStartTime(e.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="time"
                      className="block text-[1.2rem] font-medium "
                    >
                      End Time
                    </label>
                    <input
                      type="time"
                      id="minute"
                      className="text-[#000000a9] py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm outline-none px-1"
                      min="0"
                      max="59"
                      onChange={(e) => setEndTime(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="description"
                    className="block text-[1.2rem] font-medium "
                  >
                    Event Description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    className="py-1 mt-1 block w-full placeholder-[#000000a9] text-[#000000a9] rounded-md shadow-sm outline-none px-1"
                    placeholder="Describe what's special about your event & other important details."
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="location"
                    className="block text-[1.2rem] font-medium "
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="text-[#000000a9] placeholder-[#000000a9] py-1 mt-1 block w-full outline-none px-1 rounded-md shadow-sm "
                    placeholder="Bal Gandharva Rang Mandir, Mumbai"
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="What type of event"
                    className="block text-[1.2rem] font-medium"
                  >
                    What type of event are you running?
                  </label>

                  <div className="flex gap-4">
                    <div
                      className="rounded-md w-[15rem] gap-1 py-5 px-1 flex flex-col items-center cursor-pointer"
                      style={ticketBoolState ? normalStyle : selectedDivStyle}
                      onClick={onHandleTicketedEvent}
                    >
                      <img
                        src={
                          ticketBoolState ? assets.ticketicon : assets.ticket
                        }
                        className="w-12 h-11"
                        alt=""
                      />
                      <h3
                        className={
                          ticketBoolState
                            ? `text-black  font-tertiary text-justify text-xs font-bold`
                            : `text-white font-tertiary text-justify text-xs`
                        }
                      >
                        Ticketed Event
                      </h3>
                      <p
                        className={
                          ticketBoolState
                            ? `text-black  font-tertiary text-justify text-xs font-bold`
                            : `text-white font-tertiary text-justify text-xs`
                        }
                      >
                        My event requires tickets for entry
                      </p>
                    </div>
                    <div
                      className="rounded-md w-[15rem] gap-1 py-5 px-1 flex flex-col items-center cursor-pointer"
                      style={ticketBoolState ? selectedDivStyle : normalStyle}
                      onClick={onHandleFreeEvent}
                    >
                      <img
                        src={assets.freeevent}
                        className="w-12 h-11"
                        alt="freeImage"
                      />
                      <h3
                        className={
                          ticketBoolState
                            ? `text-white font-tertiary w-full text-center text-xs tracking-tighter font-bold`
                            : `text-black font-tertiary w-full text-center text-xs tracking-tighter font-bold`
                        }
                      >
                        Free Event
                      </h3>
                      <p
                        className={
                          ticketBoolState
                            ? `text-white font-tertiary text-justify text-xs font-bold`
                            : `text-black font-tertiary text-justify text-xs font-bold`
                        }
                      >
                        I’m running a free event
                      </p>
                    </div>
                  </div>
                </div>

                {ticketBoolState && (
                  <>
                    <div className="mb-6 w-full">
                      <label
                        htmlFor="What type of event"
                        className="block text-[1.2rem] font-medium"
                      >
                        What tickets are you selling?
                      </label>

                      <div className="flex items-center gap-2 w-full">
                        <div className="w-[50%] rounded-md  gap-1 py-3 px-1 flex flex-col">
                          <label
                            htmlFor="location"
                            className="block text-[1.2rem] font-medium "
                          >
                            Ticket Name
                          </label>
                          <input
                            type="text"
                            id="location"
                            className="text-[#000000a9] placeholder-[#000000a9] py-1 mt-1 block w-full outline-none rounded-md shadow-sm px-3"
                            placeholder="Ticket Name e.g. General Admission"
                            onChange={(e) => setTicketName(e.target.value)}
                            value={ticketName}
                          />
                        </div>
                        <div className="w-[50%] rounded-md gap-1 py-3 px-1 flex flex-col">
                          <label
                            htmlFor="location"
                            className="block text-[1.2rem] font-medium "
                          >
                            Ticket Price
                          </label>
                          <div className="w-full h-[2rem] flex items-center bg-white rounded-md overflow-hidden">
                            <div className="w-[15%] h-full flex items-center bg-gray-500">
                              <FaRupeeSign
                                style={{ color: "black", width: "100%" }}
                              />
                            </div>
                            <div className="w-[75%]">
                              <input
                                type="text"
                                id="location"
                                className="text-[#000000a9] placeholder-[#000000a9] py-1 mt-1 block w-full outline-none shadow-sm px-3"
                                placeholder="300"
                                onChange={(e) => setTicketPrice(e.target.value)}
                                value={ticketPrice}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className="mb-6">
                  <label
                    htmlFor="Contact Information"
                    className="block text-[1.2rem] font-medium"
                  >
                    Contact Information
                  </label>
                  <input
                    type="number"
                    id="location"
                    className="text-[#000000a9] placeholder-[#000000a9] py-1 mt-1 block w-full outline-none px-1 rounded-md shadow-sm "
                    placeholder="Enter Contact number"
                    onChange={(e) => setcontactInfo(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="attachments"
                    className="block text-[1.2rem] font-medium"
                  >
                    Upload Banner
                  </label>

                  <div className="py-1 mt-4 border-dashed border-2 border-gray-300 p-4 rounded-md text-center">
                    <input
                      type="file"
                      className="text-blue-500 hover:underline"
                      ref={removeFile}
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                    ></input>
                    <button
                      type="button"
                      className="text-red-500 hover:underline"
                      onClick={() =>
                        console.log((removeFile.current.value = ""))
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="hover:bg-[#FFE047] hover:text-[#2b293d] text-lg mb-6 font-semibold px-4 py-2 rounded-md bg-[#2b293d] text-[#FFE047] hover:placeholder-[#000000a9] transition-all 2s ease-linear cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </article>
          <article className="h-full w-[35%]  px-4 ">
            <div className="bg-red-500 w-full mt-14"></div>
          </article>
        </section>
        <div className="hidden md:block w-[40%]">
          <img
            src={assets.eventIllustration}
            alt=""
            className="custom-drop-shadow"
          />
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
