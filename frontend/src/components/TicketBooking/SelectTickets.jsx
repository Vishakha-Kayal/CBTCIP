import { useRef, useState } from "react";
import AttendeeDetails from "./AttendeeDetails";
import { FaRupeeSign } from "react-icons/fa";
import { TbCirclePlus } from "react-icons/tb";
import { TbCircleMinus } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import OrderSummary from "./OrderSummary";

const SelectTickets = ({ onHandleCloseTicket ,event}) => {
  const selectTicket = useRef();
  const [showAttendeeDetails, setShowAttendeeDetails] = useState(false);
  const [showCheckoutDetails, setShowCheckoutDetails] = useState(false);

  const handleProceedCheckout=()=>{
    // console.log("clicked");
    setShowCheckoutDetails(true);
    setShowAttendeeDetails(false);
    selectTicket.current.style.display = "none";
  }

  const handleProceedClick = () => {
    setShowAttendeeDetails(true);
    selectTicket.current.style.display = "none";
  };

  const onHandleBack = () => {
    setShowAttendeeDetails(false);
    selectTicket.current.style.display = "flex";
  };

  const onHandleCheckoutBack=()=>{
    setShowCheckoutDetails(false);
    setShowAttendeeDetails(true);
    selectTicket.current.style.display = "none";
  }
  return (
    <>
      {showCheckoutDetails && <OrderSummary onHandleCheckoutBack={onHandleCheckoutBack} event={event}/>}
      {showAttendeeDetails && <AttendeeDetails onHandleBack={onHandleBack} handleProceedCheckout={handleProceedCheckout} />}
      <main
        ref={selectTicket}
        className="py-3 w-[35rem] h-[50%] absolute mx-auto bg-[#F1F3F6] left-0 right-0  top-[20%] z-[99] flex flex-col justify-between"
      >
        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-center bg-white px-3 py-4">
            <h2 className="text-[#2D2C3C] tracking-tighter text-2xl font-tertiary">
              Select Tickets
            </h2>
            <h2
              className="text-3xl cursor-pointer"
              onClick={onHandleCloseTicket}
            >
              <IoCloseSharp />
            </h2>
          </div>
          <div>
            <div className="flex justify-between mb-3 px-3  ">
              <h5>Ticket Types</h5>
              <h5>Quantity</h5>
            </div>
            <div className="py-4 flex justify-between border-l-[7px] border-green-800 bg-white px-3">
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold">{event.ticketName}</h3>
                <div className="flex items-center">
                  <FaRupeeSign />
                  <p>{event.ticketPrice}</p>
                </div>
              </div>
              <div className="flex items-center text-2xl gap-2 font-bold">
                <TbCirclePlus />
                <p>1</p>
                <TbCircleMinus />
              </div>
            </div>
          </div>
        </section>
        <section className="checkoutBoxShadowStyle flex flex-col items-center gap-2 bg-white">
          <div className="flex gap-2">
            <h4>
              Qty: <span className="text-green-800">1</span>
            </h4>
            <h4 className="flex">
              Total:{" "}
              <span className="text-green-800">
                <div className="flex items-center">
                  <FaRupeeSign />
                  <p>{event.ticketPrice}</p>
                </div>
              </span>
            </h4>
          </div>
          <button
            className="flex gap-2 items-center bg-[#2B293D] w-[80%] py-3 justify-center text-white text-xl"
            onClick={handleProceedClick}
          >
            <p>Proceed</p>
            <div className="pt-1 flex items-end">
              <IoIosArrowForward />
            </div>
          </button>
        </section>
      </main>
    </>
  );
};

export default SelectTickets;
