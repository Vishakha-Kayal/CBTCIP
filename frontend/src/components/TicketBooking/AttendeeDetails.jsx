import { GoArrowLeft } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { assets } from "../../assets/assets.js";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useState } from "react";
import axios from "axios";
import { url } from "../../App.jsx";

const AttendeeDetails = ({ onHandleBack, handleProceedCheckout }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName",fullName)
    formData.append("email",email)
    formData.append("contactNumber",contactNumber)
    const response = await axios.post(`${URL}`,formData);
    if(response.data.success){
      console.log("attendee data created succssfully.");
    }else{
      console.log("something went wrong.");
    }
  };

  return (
    <>
      <main className="w-[35rem] h-[68%] absolute mx-auto bg-[#F1F3F6] left-0 right-0 top-[8%] z-[99] flex flex-col justify-between py-3">
        <section className="flex flex-col gap-4">
          <div className="flex gap-3 items-center bg-white px-3 py-4">
            <h2 className="text-2xl cursor-pointer" onClick={onHandleBack}>
              <GoArrowLeft />
            </h2>
            <h2 className="text-[#2D2C3C] tracking-tighter text-2xl font-tertiary">
              Attendee Details
            </h2>
          </div>
          <div>
            <div className="flex justify-between mb-3 px-3 text-[#5A5A5A]">
              <h5>Sound Of Christmas 2023</h5>
              <div className="flex gap-2 items-center">
                <img src={assets.calendar} alt="" className="w-5" />
                <h5>Saturday, 2 December 2023</h5>
              </div>
            </div>
            <h4 className="pl-9 text-sm font-semibold mb-2">
              Standard Ticket: Ticket #<span>1</span>
            </h4>
            <div className="w-[88%] m-auto py-4 flex justify-center border-t-[4px] border-blue-600 bg-white px-3">
              <form className="w-[80%] flex flex-col" onSubmit={onHandleSubmit}>
                <div>
                  <label
                    htmlFor="Full Name"
                    className="text-[#636363] text-sm font-semibold"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Attendee’s full name"
                    className="py-3 mt-2 text-sm rounded outline-none px-4 w-full border-[1px]"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="E-mail"
                    className="text-[#636363] text-sm font-semibold"
                  >
                    E-mail
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your e-mail"
                    className="py-3 mt-2 text-sm rounded outline-none px-4 w-full border-[1px]"
                    value={email} 
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="Phone"
                    className="text-[#636363] text-sm font-semibold"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Attendee's Phone Number"
                    className="py-3 mt-2 text-sm rounded outline-none px-4 w-full border-[1px]"
                    value={contactNumber}
                    onChange={(e) => {
                      setContactNumber(e.target.value);
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
        <p className="text-center text-xs font-semibold">
          I accept the <span className="text-blue-500">Terms of Service </span>
          and have read the{" "}
          <span className="text-blue-500">Privacy Policy</span>
        </p>
        <section className="flex flex-col items-center gap-2 bg-white checkoutBoxShadowStyle">
          <div className="flex gap-2">
            <h4>
              Qty: <span className="text-green-800">1</span>
            </h4>
            <h4 className="flex">
              Total:{" "}
              <span className="text-green-800">
                <div className="flex items-center">
                  <LiaRupeeSignSolid
                    style={{ paddingTop: "2px", fontSize: "1.2rem" }}
                  />
                  <p> 200</p>
                </div>
              </span>
            </h4>
          </div>
          <button
            className="flex gap-2 items-center bg-[#2B293D] w-[89%] rounded py-3 justify-center text-white text-xl"
            onClick={handleProceedCheckout}
          >
            <p>Continue To Checkout</p>
            <div className="pt-1 flex items-end">
              <IoIosArrowForward />
            </div>
          </button>
        </section>
      </main>
    </>
  );
};

export default AttendeeDetails;
