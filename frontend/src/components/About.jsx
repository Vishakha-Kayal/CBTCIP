import { BiCategory } from "react-icons/bi";
import { TbNavigationShare } from "react-icons/tb";
import { MdEventAvailable } from "react-icons/md";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import { RiListIndefinite } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { RiCommunityLine } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import Navbar from "./Home/Navbar";

const About = () => {
  return (
    <>
    <Navbar/>
      <div className="w-full min-h-screen p-4">
        <div className="flex items-center gap-6">
          <div className="w-[3.7rem] h-3 border-black border-[1px] rounded-xl"></div>
          <p className="text-[#565c17] text-lg font-primary font-semibold">
            Who We Are
          </p>
        </div>
        <div className="w-full h-[96%] flex flex-col md:flex-row gap-10 ">
          <div className="md:w-[45%] relative mt-7 flex items-center z-10">
            <h3 className="font-primary text-xl text-justify font-semibold tracking-tighter z-50">
              Welcome to Eventify, your go-to platform for discovering and
              managing vibrant events happening both locally and globally. Our
              mission is to connect people through memorable experiences and
              make event planning and participation a seamless and enjoyable
              process. Eventify is powered by a passionate team of event
              enthusiasts, tech experts, and customer service professionals
              dedicated to making your event experience exceptional. We are
              committed to continuous improvement and innovation, always
              striving to bring you the best features and services. Explore a
              wide range of events across various categories such as
              Entertainment, Educational & Business, Cultural & Arts, Sports &
              Fitness, Technology & Innovation, and Travel & Adventure
            </h3>
            <div className="hidden md:block absolute md:left-32 z-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="457"
                height="466"
                viewBox="0 0 657 666"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M303.866 6.55758C367.026 6.06796 437.644 -15.2366 488.897 21.6761C539.997 58.4789 533.418 135.561 561.352 192.001C590.527 250.948 661.953 294.745 656.489 360.29C651.043 425.623 576.696 459.272 534.863 509.751C491.848 561.656 471.388 640.891 407.11 661.207C342.812 681.53 280.024 630.134 215.45 610.706C151.396 591.435 70.6831 600.058 29.27 547.529C-12.161 494.977 14.9433 418.482 11.2271 351.665C7.8836 291.549 -10.567 231.816 8.5352 174.717C28.7666 114.243 65.2545 56.0835 120.669 24.5306C175.093 -6.45765 241.241 7.04305 303.866 6.55758Z"
                  fill="#ffe0476f"
                  fill-opacity="0.8"
                />
              </svg>
            </div>
          </div>
          <div className="md:w-[50%] pr-6 flex flex-col p-2 rounded-lg font-tertiary">
            <section className="border-b-black border-[1px] pb-4 ">
              <h1 className="text-2xl font-semibold font-primary mb-6">
                What We Offer ?
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                <div className="flex justify-start items-start gap-2 ">
                  <h1 className="text-4xl">
                    <BiCategory />
                  </h1>
                  <p className="w-[80%] text-justify">
                    <span className="font-bold">Diverse Categories:</span>{" "}
                    Explore a wide range of events across various categories
                    such as Entertainment, Educational & Business, Cultural &
                    Arts, Sports & Fitness, Technology & Innovation, and Travel
                    & Adventure.
                  </p>
                </div>
                <div className="flex justify-start items-start gap-2 ">
                  <h1 className="text-4xl">
                    <TbNavigationShare />
                  </h1>
                  <p className="w-[80%] text-justify">
                    <span className="font-bold">Easy Navigation:</span> Our
                    user-friendly interface allows you to effortlessly search
                    and filter events based on your interests, location, and
                    availability.
                  </p>
                </div>
                <div className="flex justify-start items-start gap-2 ">
                  <h1 className="text-4xl">
                    <MdEventAvailable />
                  </h1>
                  <p className="w-[80%] text-justify">
                    <span className="font-bold">Create and Manage Events:</span>{" "}
                    Organizers can easily create, manage, and promote their
                    events, reaching a wider audience and enhancing engagement.
                  </p>
                </div>
                <div className="flex justify-start items-start gap-2 ">
                  <h1 className="text-4xl">
                    <MdOutlineSecurityUpdateGood />
                  </h1>
                  <p className="w-[80%] text-justify">
                    <span className="font-bold">Stay Updated:</span> Receive
                    timely updates and notifications about upcoming events,
                    special offers, and exclusive discounts.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h1 className="text-2xl font-semibold font-primary mt-2 mb-6">
                Why Choose US ?
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                <div className="flex justify-start items-start gap-2 ">
                  <h1 className="text-4xl">
                    <RiListIndefinite />
                  </h1>
                  <p className="w-[80%] text-justify">
                    <span className="font-bold">Comprehensive Listings:</span>{" "}
                    Access a vast array of events from different categories,
                    ensuring there's something for everyone.
                  </p>
                </div>
                <div className="flex justify-start items-start gap-2 ">
                  <h1 className="text-4xl">
                    <FaRegUser />
                  </h1>
                  <p className="w-[80%] text-justify">
                    <span className="font-bold">User-Centric Design:</span>{" "}
                    Enjoy a seamless and intuitive user experience, from
                    browsing events to purchasing tickets and managing your
                    event calendar.
                  </p>
                </div>
                <div className="flex justify-start items-start gap-2 ">
                  <h1 className="text-4xl">
                    <RiCommunityLine />
                  </h1>
                  <p className="w-[80%] text-justify">
                    <span className="font-bold">Community Focus:</span> Join a
                    vibrant community of event enthusiasts, share your
                    experiences, and connect with like-minded individuals.
                  </p>
                </div>
                <div className="flex justify-start items-start gap-2 ">
                  <h1 className="text-4xl">
                    <MdSecurity />
                  </h1>
                  <p className="w-[80%] text-justify">
                    <span className="font-bold">Secure Transactions:</span> We
                    prioritize your safety and security, ensuring that all
                    transactions and personal information are protected.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
