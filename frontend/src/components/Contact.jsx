import { useState } from "react";
import Navbar from "./Home/Navbar";
import axios from "axios";
import { url } from "../App.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    try {
      const response = await axios.post(`${url}/api/query/contact`, {
        fname,
        lname,
        email,
        query
      }, {
        headers: {
          'Content-Type': 'application/json' // Set content type to JSON
        },timeout: 10000 
      });
      console.log("Response:", response.data); // Log the response
      if (response.data.success) {
        toast.success("Event Created");
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message); // Log any errors
      toast.error("An error occurred while sending the message.");
    }
  };
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="w-full min-h-screen bg-[#e4ebe8] pt-8">
        <div className="w-full h-[75vh] flex">
          <div className="w-[50%] h-full left  flex flex-col px-16 pt-28 gap-5">
            <div>
              <h1 className="text-4xl font-bold">Contact Us</h1>
            </div>
            <div>
              <p className="text-lg font-medium">
                Need to get in touch with us? Either fill out the form with your
                inquiry or find the{" "}
                <a
                  href="mailto:vishakhakayal636@gmail.com"
                  className="point-cursor font-semibold underline text-[#43856F]"
                >
                  email
                </a>
                &nbsp; you'd like to contact below
              </p>
            </div>
          </div>
          <div className="w-[50%] h-full right flex items-center justify-center">
            <div className="w-[70%] h-[82%] bg-[#2b293d] text-[#FFE047] font-secondary rounded-lg overflow-hidden contactFormDiv ">
              <form onSubmit={onSubmitHandler} className="contactForm">
                <div className="w-full h-[16vh]  px-6 pt-4 flex gap-7">
                  <div className="w-[50%] h-full  flex flex-col gap-1">
                    <h3 className="text-xl font-semibold">First Name</h3>
                    <input
                      type="text"
                      name="firstName"
                      className="w-full h-[7vh] rounded-md border-[1px] px-2   border-black outline-none"
                      required
                      onChange={(e) => {
                        setFname(e.target.value);
                      }}
                    />
                  </div>
                  <div className="w-[50%] h-full  flex flex-col gap-1">
                    <h3 className="text-xl font-semibold">Last Name</h3>
                    <input
                      type="text"
                      name="lastName"
                      className="w-full h-[7vh] rounded-md border-[1px] px-2   border-black outline-none"
                      required
                      onChange={(e) => {
                        setLname(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full h-[15vh]  px-6 pt-1">
                  <div className="w-full h-full  flex flex-col gap-1">
                    <h3 className="text-xl font-semibold">Email</h3>
                    <input
                      type="email"
                      name="email"
                      className="w-full h-[7vh] rounded-md border-[1px] px-2  border-black outline-none"
                      required
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full h-[15vh] px-6 ">
                  <div className="w-full h-full  flex flex-col gap-1">
                    <h3 className="text-xl font-semibold">
                      What can we help you with?
                    </h3>
                    <textarea
                      name="query"
                      id=""
                      cols="20"
                      rows="3"
                      className="rounded-md w-full h-full px-2 py-1 outline-none text-black border-[1px] border-black"
                      required
                      onChange={(e) => {
                        setQuery(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
                <div className="w-full h-[15vh] px-6 ">
                  <input
                    type="submit"
                    name="submit"
                    id="submit"
                    value="Submit"
                    className="mt-6 w-[40%] px-2  h-[7vh] bg-[#FFE047] rounded-md text-[#2b293d] text-xl font-semibold cursor-pointer"
                  />
                </div>
              </form>
            </div>
            {/* <div className="responseDiv"><h1 className="bg-[#B8D4CF] p-5 text-center text-xl font-semibold rounded-md ">Thanks we will be in touch</h1></div> */}
          </div>
        </div>
        <div className="w-full h-[12.3vh] bg-[#FFE047]"></div>
      </div>
    </>
  );
};

export default Contact;
