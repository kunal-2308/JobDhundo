import React from 'react'
import { IoMdArrowRoundUp } from "react-icons/io";

function AboutProfile({ desc, skills,languages }) {
  return (
    <>
      <div className="div-main-container px-20 pt-3 mb-10">
        <div className="div-main-title-about">
          <span className='text-lg font-semibold'>About</span>
        </div>
        <div className="div-2-about-content mt-5 text-xs font-light text-neutral-800">
          {desc}
        </div>
        <div className="div-skills-Section flex flex-col mt-10 justify-start items-start gap-y-3">
          <div className="div-skills-title pl-1">
            <span className='text-xs font-semibold text-neutral-500'>Expertise</span>
          </div>
          <div className="skills-Section-content flex flex-row gap-x-2 w-full flex-wrap gap-y-3">
            {skills.map((ele, index) => {
              return (
                <div className="div text-xs" key={index}>
                  <div className="div-tech-element bg-gray-100 px-4 py-1 rounded-full w-max flex flex-row justify-center gap-x-1 items-center border-[1px] border-neutral-200">
                  <IoMdArrowRoundUp className='text-neutral-400'/> 
                  <span className='font-semibold text-xs text-black/70'>{ele}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="div-skills-Section flex flex-col mt-10 justify-start items-start gap-y-3">
          <div className="div-skills-title pl-1">
            <span className='text-xs font-semibold text-neutral-500'>Fluent in</span>
          </div>
          <div className="skills-Section-content flex flex-row gap-x-2 w-full flex-wrap gap-y-3">
            {languages.map((ele, index) => {
              return (
                <div className="div text-xs" key={index}>
                  <div className="div-tech-element bg-gray-100 px-3 py-1 rounded-full w-max flex flex-row justify-between gap-x-3 items-center border-[1px] border-neutral-200">
                  <IoMdArrowRoundUp className='text-neutral-400'/> 
                  <span className='font-semibold text-xs text-black/70'>{ele}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>

    </>
  )
}

export default AboutProfile
