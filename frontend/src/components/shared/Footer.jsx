import React, { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { AiFillFacebook } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";


function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    toast.success("Subscribed Successfully, kindly check your E-mail");
    setEmail("");
  };

  const handleEmailChange = (e) => {
    let { value } = e.target;
    setEmail(value);
  };

  return (
    <>
      <div className="div-main-container-footer bg-black flex flex-row justify-between p-10 w-full">
        <div className="div-user-section flex flex-col justify-start items-start p-10 w-[80%]">
          <div className="title-section-logo">
            <img src="../../logos/JD-Logo.png" alt="" className="w-28" />
          </div>
          <div className="emailSubsription mt-5 flex flex-col gap-y-5">
            <span className="text-white font-thin pl-1 text-sm">
              Subscribe to our monthly newsletter
            </span>
            <div className="div-input-section flex flex-row gap-x-4 border-b-[1px] border-mainGreen">
              <input
                type="email"
                name="email"
                id="emailNewsletter"
                value={email}
                required
                className="bg-black text-gray-400 focus:outline-none focus:ring-0 font-light text-sm"
                onChange={handleEmailChange}
              />
              <span
                className="pl-2 text-sm text-neutral-500 hover:cursor-pointer"
                onClick={handleSubscribe}
              >
                Subscribe
              </span>
            </div>
          </div>
          <div className="div-social-media-icons flex flex-row justify-evenly items-center gap-x-5 mt-4 text-white">
            <FaYoutube size={28} className="hover:cursor-pointer text-neutral-500 hover:text-white" />
            <AiFillFacebook size={24} className="hover:cursor-pointer text-neutral-500 hover:text-white" />
            <FaInstagram size={24} className="hover:cursor-pointer text-neutral-500 hover:text-white" />
            <BsTwitterX size={20} className="hover:cursor-pointer text-neutral-500 hover:text-white" />
          </div>
        </div>
        <div className="div-employeer-section flex pr-40 pt-10">
          <div className="div-title-section flex flex-col justify-start items-start gap-y-2">
            <span className="text-white text-lg">Recruiter Section</span>
            <span className="text-xs font-thin text-neutral-400">Log in to your organization account to streamline your recruitment process and connect with top talent effortlessly.</span>
          </div>

        </div>
      </div>
    </>
  );
}

export default Footer;
