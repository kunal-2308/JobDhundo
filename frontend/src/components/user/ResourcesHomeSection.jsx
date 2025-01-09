import React from "react";
import { FlipWords } from "../ui/flip-words";
import { Button } from "../ui/button";
import { AnimatedTooltipResources } from "./resourcesTooltip";
import { Link } from "react-router-dom";

export function FlipWordsResources() {
  const words = ["Informed", "Empowered", "Ahead", "Resourceful"];

  return (
    <>
      <div className="div-main flex flex-row justify-evenly items-center">
        <div className="flex flex-col justify-start items-start px-4 bg-white pl-36 pb-20">
          <div className="text-4xl font-medium text-black pt-20">
            Be
            <FlipWords words={words} /> <br />
            with our curated resources.
          </div>
          <div className="div-button-redirect mt-5">
            <Link to='/resources'><Button className=''>View Resources</Button></Link>
          </div>
        </div>
        <div className="div-main-2">
        <AnimatedTooltipResources/>
        </div>
        
      </div>


    </>
  );
}
