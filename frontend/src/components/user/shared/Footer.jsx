import React, { useState } from "react";
import { Button } from "../../ui/button";
import { toast } from "sonner";
import { AiFillFacebook } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { LuCopyright } from "react-icons/lu";
import { Link } from "react-router-dom";

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
      <div className="box bg-black p-10">
        <div className="div-main-container-footer  flex flex-row justify-between w-full border-b-[1px] border-neutral-800">
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
            <div className="div-grid-sections grid grid-cols-3 text-neutral-300 gap-x-6 gap-y-2 mt-5 font-thin text-xs">
              <span className="hover:text-white hover:cursor-pointer">Home</span>
              <span className="hover:text-white hover:cursor-pointer">Jobs</span>
              <span className="hover:text-white hover:cursor-pointer">Blogs</span>
              <span className="hover:text-white hover:cursor-pointer">Resouces</span>
              <span className="hover:text-white hover:cursor-pointer">About us</span>
              <span className="hover:text-white hover:cursor-pointer">ContactUs</span>
            </div>
            <div className="copyright-section text-white flex flex-row justify-start items-center gap-x-1 mt-9">
              <LuCopyright className="text-neutral-500" />
              <p className="text-neutral-500 text-xs">2025 JobDhundo.com, LLC. All Rights Reserved.</p>
            </div>
          </div>
          <div className="div-employeer-section flex flex-col pr-40 pt-10 gap-y-10">
            <div className="div-title-section flex flex-col justify-start items-start gap-y-2">
              <span className="text-white text-lg">Recruiter Section</span>
              <span className="text-xs font-thin text-neutral-400">Log in to your organization account to streamline your recruitment process and connect with top talent effortlessly.</span>
              <Link to='/recruiter/orgaisation/signup'><button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block mt-5">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                  <span>
                    Register Organisation
                  </span>
                  <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button></Link>
            </div>
            <div className="div-office-address text-neutral-400 flex flex-col gap-y-2">
              <span className="text-white text-lg">Office Address</span>
              <span className="text-xs font-thin text-neutral-400">Developed under supervision of Team JobDhundo.com <br /> Baramati, Pune - 412201</span>
            </div>
          </div>
        </div>
        <div className="extra-sections text-neutral-500 w-[100%] flex flex-row justify-evenly items-center text-xs mt-2">
          <span className="hover:text-white hover:cursor-pointer">Careers</span>
          <span>|</span>
          <span className="hover:text-white hover:cursor-pointer">Website Terms</span>
          <span>|</span>
          <span className="hover:text-white hover:cursor-pointer">Privacy Policy</span>
          <span>|</span>
          <span className="hover:text-white hover:cursor-pointer">Do Not Sell or Share My Personal Information</span>
          <span>|</span>
          <span className="hover:text-white hover:cursor-pointer">Accessibility Statement</span>
          <span>|</span>
          <span className="hover:text-white hover:cursor-pointer">Marketing Code of Conduct</span>
          <span>|</span>
          <span className="hover:text-white hover:cursor-pointer">Subscriptions</span>
          <span>|</span>
          <span className="hover:text-white hover:cursor-pointer">Trademark and Copyright Guidelines</span>
          <span>|</span>
          <span className="hover:text-white hover:cursor-pointer">Refund Policy</span>
        </div>
      </div>

    </>
  );
}

export default Footer;
