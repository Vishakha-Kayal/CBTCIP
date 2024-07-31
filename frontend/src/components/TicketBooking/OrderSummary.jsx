import React from "react";
import { FaLock } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { LiaRupeeSignSolid } from "react-icons/lia";

const OrderSummary = ({ onHandleCheckoutBack ,event}) => {
  const boxShadowStyle = {
    boxShadow: "-0px 4px 10px 0px rgba(29, 29, 29, 0.25)",
  };

  return (
    <>
      <main className="w-[35rem] h-[65%] absolute mx-auto bg-[#F1F3F6] left-0 right-0 top-[10%] z-[99] flex flex-col justify-between py-2">
        <section className="gap-4 flex items-center pl-5 h-[13%] bg-white">
          <div
            className="text-[1.35rem] font-extrabold"
            onClick={onHandleCheckoutBack}
          >
            <GoArrowLeft />
          </div>
          <h3 className="text-[#2D2C3C] tracking-tighter text-2xl font-tertiary">
            Order Summary
          </h3>
          <div></div>
        </section>
        <section className="w-full  h-[45%] flex justify-center pt-8">
          <div className="bg-white w-[70%] h-[60%] border-t-[3px] relative border-blue-600">
            <h3 className="absolute left-[27%] font-semibold tracking-tighter text-2xl text-[#4872C6]">
            {event.ticketName} Ticket
            </h3>
            <div className="h-full flex justify-between items-center overflow-hidden">
              <div className="w-9 h-9 bg-[#F1F3F6] rounded-full absolute top-1/2 transform -translate-y-1/2 right-[-4%] checkoutRightShadowStyle "></div>
              <div className="w-9 h-9 bg-[#F1F3F6] rounded-full absolute top-1/2 transform -translate-y-1/2 left-[-4%] checkoutDivShadowStyle"></div>
            </div>
            <div className="w-[83%] left-[8%] absolute bottom-4 flex flex-col ">
              <h4 className="text-sm font-semibold">Andrea Gomes</h4>
              <div className="flex justify-between">
                <p className="text-sm font-semibold">
                  andreagomes@example.com@
                </p>
                <div className="h-full flex items-center">
                  <h6 className="h-full inline-block">
                    <LiaRupeeSignSolid style={{ fontWeight: "100" }} />
                  </h6>
                  <h6 className="">{event.ticketPrice}</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[42%] bg-white checkoutBoxShadowStyle">
          <div
            className="w-[60%] m-auto grid grid-cols-2 border-b-[1px] border-black py-4"
            style={{ gridTemplateColumns: "25% 75%" }}
          >
            <div>
              <h3 className="text-[#5A5A5A] text-lg font-semibold">
                Sub Total:
              </h3>
              <p className="text-right text-lg font-semibold text-[#5A5A5A]">
                Tax:
              </p>
            </div>
            <div className="flex flex-col items-end justify-center">
              <div className="flex items-center">
                <p className="text-lg font-semibold">
                  <LiaRupeeSignSolid style={{ marginTop: "5px" }} />
                </p>
                <p className="text-lg font-semibold">{event.ticketPrice}</p>
              </div>
              <div className="flex items-center pl-3">
                <p className="text-lg font-semibold">
                  <LiaRupeeSignSolid style={{ marginTop: "5px" }} />
                </p>
                <p className="text-lg font-semibold">11.80</p>
              </div>
            </div>
          </div>
          <div className="w-[60%] m-auto flex justify-between items-center  mt-3">
            <h2 className="font-bold font-tertiary text-3xl">Order Total:</h2>
            <div className="h-full flex items-center">
              <h6 className="h-full text-xl">
                <FaRupeeSign style={{ fontWeight: "100", color: "#287921" }} />
              </h6>
              <h6 className="text-[#287921] font-bold text-2xl">{event.ticketPrice}</h6>
            </div>
          </div>
          <div>
            <button
              className="m-auto flex gap-2 items-center mt-6 bg-[#287921] w-[89%] rounded py-3 justify-center text-white text-xl"
              
            >
              <div className="pt-1 flex items-center">
              <FaLock />
              </div>
              <p>Pay Now</p>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default OrderSummary;
{
  /* <div className="relative bg-white h-[40vh] w-[60vw] shadow-lg">
<div className="w-full h-[2vh] bg-blue-500"></div>
<div
  style={{
    boxShadow:
      "0px 0px 0px 0px rgba(243, 244, 246, 1),inset -2px 0px 3px -1px rgba(29,29,29,0.25),0px 0px 0px 0px rgba(243, 244, 246, 1),0px 0px 0px 0px rgba(243, 244, 246, 1);",
  }}
  className="  absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-100 rounded-full shadow-inner-left"
></div>
<div
  style={{
    boxShadow:
      "0px 0px 0px 0px rgba(243, 244, 246, 1),0px 0px 0px 0px rgba(243, 244, 246, 1),0px 0px 0px 0px rgba(243, 244, 246, 1),inset 2px 0px 3px -1px rgba(29,29,29,0.25);",
  }}
  className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-100  rounded-full"
></div>
</div> */
}
