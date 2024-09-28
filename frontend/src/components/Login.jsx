import NavbarLogo from "./NavbarLogo";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { url } from "../App";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Login = ({onLogin}) => {
  const [psswdEye, setPsswdEye] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputField = psswdEye ? "text" : "password";
  const navigate = useNavigate();

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/users/loginuser`, {
        email: email.toLowerCase(),
        password,
    });
    if (response.data.success) {
        // console.log("response.data.token",response.data.token)
        onLogin(response.data.token);
        // toast.success("loggedin Successfully");
        navigate('/')
      } else {
        // console.log(response.data);
        // toast.error("Something Went Wrong");
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      // toast.error("An error occurred while logging the account.");
    }
  };

  return (
    <>
   
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
              <h1>Login</h1>
              <IoCloseSharp
                onClick={() => {
                  navigate("/");
                }}
              />
            </header>
            <section className="w-full h-[80%] flex flex-col justify-center">
              <form
                className="w-full flex flex-col items-start gap-7 mt-8"
                onSubmit={onHandleSubmit}
              >
                <div className="w-full flex flex-col items-start gap-2">
                  <p className="text-[#636363] text-xl w-full">
                    E-mail Address
                  </p>
                  <input
                    type="text"
                    placeholder="Enter your e-mail"
                    className="text-lg px-2 w-[90%] rounded-lg border-[1px] border-[#828282B2] py-3 outline-none"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
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
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </h3>
                    <h3
                      className="pr-8 text-2xl text-[#858585] cursor-pointer"
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
                  value="Login"
                  className="bg-[#2B293D] cursor-pointer mt-4 text-2xl font-semibold w-[90%] py-3 rounded-lg text-white"
                />
              </form>
              <p className="mt-7 text-[#636363] font-primary tracking-tighter">
                Don’t have an account ?
                <span className="text-[#343232] underline inline-block p-3">
                  {" "}
                  <Link to="/Signup"> Sign up</Link>
                </span>
              </p>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
