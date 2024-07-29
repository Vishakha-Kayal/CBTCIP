import NavbarLogo from "./NavbarLogo";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { useRef, useState } from "react";
import { url } from "../App";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateAccount = ({ onSignup }) => {
  const [psswdEye, setPsswdEye] = useState(false);
  const inputField = psswdEye ? "text" : "password";
  const navigate = useNavigate();
  const usernameValue = useRef("");
  const emailValue = useRef("");
  const passwordValue = useRef("");

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const email = emailValue.current.value;
      const username = usernameValue.current.value;
      const password = passwordValue.current.value;

      const response = await axios.post(
        `${url}/users/createAccount`,
        {
          email,
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        onSignup(response.data.token);
        toast.success("Account Created");
        navigate("/");
      } else {
        console.log(response.data);
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

  return (
    <>
      <ToastContainer />
      <div className="flex w-full h-screen bg-[#2B293D]">
        <section className="w-[40%] h-full  hidden md:flex flex-col gap-[10rem]">
          <div className="w-[15rem] h-14">
            <NavbarLogo />
          </div>
          <h3 className="ml-7 w-[75%] text-4xl text-white font-primary font-semibold">
            Discover tailored events. <br />{" "}
            <span className="inline-block pt-4">
              Sign up for personalized recommendations today!
            </span>{" "}
          </h3>
        </section>
        <section className="w-full md:w-[60%] h-full bg-white md:rounded-tl-[70px] md:rounded-bl-[70px]">
          <div className="w-[75%] m-auto h-full py-11">
            <header className="flex justify-between items-center text-2xl md:text-4xl font-primary font-bold">
              <h1>Create Account</h1>
              <IoCloseSharp
                onClick={() => {
                  navigate("/");
                }}
              />
            </header>
            <section className="w-full h-[50%]">
              <form
                onSubmit={onHandleSubmit}
                className="w-full flex flex-col items-start gap-7 mt-8"
              >
                <div className="w-full flex flex-col items-start gap-2">
                  <p className="text-[#636363] text-xl w-full">Username</p>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="text-lg px-2 w-[90%] rounded-lg border-[1px] border-[#828282B2] py-3 outline-none"
                    ref={usernameValue}
                  />
                </div>

                <div className="w-full flex flex-col items-start gap-2">
                  <p className="text-[#636363] text-xl w-full">
                    E-mail Address
                  </p>
                  <input
                    type="email"
                    placeholder="Enter your e-mail"
                    className="text-lg px-2 w-[90%] rounded-lg border-[1px] border-[#828282B2] py-3 outline-none"
                    ref={emailValue}
                  />
                </div>

                <div className="w-full flex flex-col items-start gap-2">
                  <p className="text-[#636363] text-xl w-full">Password</p>
                  <div className="w-[90%] flex justify-between items-center border-[1px] border-[#828282B2] rounded-lg overflow-hidden">
                    <h3>
                      <input
                        type={inputField}
                        placeholder="Enter password"
                        className="text-lg px-2 w-[90%] py-3 outline-none"
                        ref={passwordValue}
                      />
                    </h3>
                    <h3
                      className="pr-8 text-2xl text-[#858585]"
                      onClick={() => {
                        setPsswdEye(!psswdEye);
                        console.log(psswdEye);
                      }}
                    >
                      {psswdEye ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
                    </h3>
                  </div>
                </div>

                <input
                  type="submit"
                  value="Create Account"
                  className="bg-[#2B293D] mt-4 cursor-pointer text-2xl font-semibold w-[90%] py-3 rounded-lg text-white"
                />
              </form>
              <p className="mt-7 text-[#636363] font-primary tracking-tighter">
                Already have an account ?
                <span className="text-[#343232] underline inline-block p-3">
                  {" "}
                  <Link to="/Login"> Log In</Link>
                </span>
              </p>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default CreateAccount;
