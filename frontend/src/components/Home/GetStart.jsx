import { assets } from "../../assets/assets";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GetStart = () => {
  const navigate=useNavigate();
  return (
    <div
      className="mt-7 flex flex-col justify-center items-center bg-cover bg-[50%_50%] h-[30vh] md:mr-12 md:ml-12"
      style={{ backgroundImage: `url(${assets.personalised})` }}
    >
      <div className="w-full md:w-[73%] flex flex-col items-start justify-center gap-3 font-primary">
        <p className="w-full font-primary font-bold text-assignment-1dark-bluish-grey text-3xl tracking-[0] leading-[normal]">
          Events specially curated for you!
        </p>
        <p className="text-[#2D2C3C] font-normal text-assignment-1 text-xl tracking-[0] leading-[normal]">
          Get event suggestions tailored to your interests! Don&#39;t let your
          favorite events slip away.
        </p>
      </div>
      <div className="bg-[#2B293D] text-[#FFE047] flex gap-2 items-center px-4 py-2 rounded mt-8 cursor-pointer" onClick={()=>{navigate('/AllEvents')}}>
        <p className="text-lg">Get Started</p>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default GetStart;
