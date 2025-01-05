import React from "react";
import { Spotlight } from "../ui/spotlight"; // Adjust the path based on your project structure
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export function SpotlightPreview() {
  return (
    <div
      className="h-[40rem] w-full  flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 mb-5 mt-10">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          JobDhundo <br /> the house of opportunities.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        Streamlining recruitment for students and recruiters. Discover jobs, enhance skills, and analyze your readiness with tools designed to make the hiring process seamless and efficient.
        </p>
      </div>
      <div className="div-button-view-more">
         <Link to='/user/signup'><Button className='hover:animate-pulse'>Get Started</Button></Link>
      </div>
    </div>
  );
}
