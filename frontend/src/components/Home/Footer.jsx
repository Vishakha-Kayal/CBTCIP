import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="md:h-[27rem] bg-[#2B293D] pb-3">
      <div className="w-[89%] h-[85%] m-auto py-8 grid grid-cols-2 md:grid-cols-4 border-b-[1px] border-[#A9A9A9] mb-4">
        <aside className="flex flex-col gap-4">
          <div className="text-[#FFFFFF] font-semibold font-primary text-lg md:text-2xl">
            Company Info
          </div>
          <div className="text-[#A9A9A9] flex flex-col gap-1 text-base">
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Careers</p>
            <p>FAQs</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </aside>
        <aside className="flex flex-col gap-4 ">
          <div className="text-[#FFFFFF] font-semibold font-primary text-lg md:text-2xl">
            Help
          </div>
          <div className="text-[#A9A9A9] flex flex-col gap-1 text-base">
            <p>Account Support</p>
            <p>Listing Events</p>
            <p>Event Ticketing</p>
            <p>Ticket Purchase Terms & Conditions</p>
          </div>
        </aside>
        <aside className="flex flex-col gap-4 ">
          <div className="text-[#FFFFFF] font-semibold font-primary text-lg md:text-2xl">
            Categories
          </div>
          <div className="text-[#A9A9A9] flex flex-col gap-1 text-base">
            <p>Concerts & Gigs</p>
            <p>Festivals & Lifestyle</p>
            <p>Business & Networking</p>
            <p>Food & Drinks</p>
            <p>Performing Arts</p>
            <p>Sports & Outdoors</p>
            <p>Exhibitions</p>
            <p>Workshops, Conferences & Classes</p>
          </div>
        </aside>
        <aside className="flex flex-col gap-4 ">
          <div className="text-[#FFFFFF] font-semibold font-primary text-lg md:text-2xl">
            Follow Us
          </div>
          <div className="text-[#A9A9A9] flex flex-col gap-1 text-base">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>
        </aside>
      </div>
      <section className="flex justify-center items-center gap-2  text-[#A9A9A9] text-[1.1rem]">
      <FaRegCopyright />
        <p>2023 Eventify. All rights reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
