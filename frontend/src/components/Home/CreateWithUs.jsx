import { assets } from "../../assets/assets";
import { FaRegCalendarPlus } from "react-icons/fa";

const CreateWithUs = () => {
  return (
    <div
      className="flex justify-center items-center gap-20 mt-7 bg-cover bg-[50%_50%] h-[20vh]"
      style={{ backgroundImage: `url(${assets.homebgplan})` }}
    >
      <div className="flex flex-col items-start justify-center gap-3 font-primary py-20">
        <p className="font-primary font-medium text-[#FFE047] text-2xl tracking-[0] leading-[normal]">
          Create an event with Eventify
        </p>
        <p className="text-[#FFE047] font-normal text-assignment-1 text-sm tracking-[0] leading-[normal]">
          Got a show, event, activity or a great experience? Partner with us &
          get listed on Eventify.
        </p>
      </div>
      <div className="text-[#2B293D] bg-[#FFE047] flex gap-2 items-center px-4 rounded h-[30%]">
        <FaRegCalendarPlus />
        <p className="text-lg font-medium">Create Event</p>
      </div>
    </div>
  );
};

export default CreateWithUs;
