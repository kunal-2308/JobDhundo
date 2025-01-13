import React from 'react'

function Testimonials() {
    return (
        <div className="div-main bg-black w-full flex flex-col gap-y-20 pt-20 pb-20 justify-center items-center">
            <div className="div-student-reviews flex flex-col gap-y-20  justify-center items-center">
                <div className="div-title-section text-center flex flex-col justify-center items-center gap-y-1  w-max">
                    <h2 className='text-white text-4xl font-medium'>Voices of Success</h2>
                    <span className='text-xs font-light text-mainGreen'>From The Alumini's of JobDhundo.com</span>
                </div>
                <div className="div-video-section flex flex-row justify-evenly items-center w-full gap-x-10">
                    <div className="div-1">
                        <iframe width="408" height="403" src="https://www.youtube.com/embed/lXqHjBoSiGs" title="Student Testimonias"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="div-1">
                        <iframe width="408" height="403" src="https://www.youtube.com/embed/DIFCMtzg7xg" title="Student Testimonial - Varnika Chauhan"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="div-1">
                        <iframe width="408" height="403" src="https://www.youtube.com/embed/L-fm0Fvygi0" title="Student Testimonial - Rishika Singh"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Testimonials
