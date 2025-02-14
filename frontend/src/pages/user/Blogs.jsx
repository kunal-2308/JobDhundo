import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/user/shared/Navbar'
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import GlobalBlogList from '@/components/user/blog/GlobalBlogList';
function Blogs() {
    let { isAuthenticated } = useAuth0();
    let navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className="div-main-blogs-section-container mt-32">
                <div className="div-title-section bg-black h-[30vh] flex flex-col justify-center items-center text-black gap-y-5">
                    <div className="div-content flex flex-col justify-center items-center">
                        <span className=' text-6xl font-semibold text-neutral-300'>Tech Talks</span>
                        <span className='font-thin text-mainGreen'>Insights. Ideas. Innovation</span>
                    </div>
                    <div className="div-button flex flex-col justify-start items-center">
                        {isAuthenticated ? <Button className='hover:animate-pulse w-[160px]' onClick={() => { toast.success('Open Post Modal') }}>Post a Blog</Button> : <Button className='hover:animate-pulse w-[160px]' onClick={() => { navigate('/user/login') }}>Get Started</Button>}
                    </div>
                </div>
                <div className="main-section-container w-full flex flex-row p-5">
                    <div className="div-left-list-section-main  w-[75%] p-5">
                        <div className="div-list-section-container shadow-lg rounded-lg h-[60vh] flex flex-col justify-start items-center mt-5 gap-y-5">
                            <div className="div-title-section">
                                <span className='text-2xl font-semibold'>Top Blogs Posted Today</span>
                            </div>
                            <div className="div-list-section-main w-[90%] overflow-y-scroll">
                                <GlobalBlogList />
                            </div>
                        </div>
                    </div>

                    <div className="div-right-extra-section">
                        <div className="div-trending-categories-section shadow-lg rounded-lg p-5 pt-10 w-full">
                            <div className="div-title-section mb-4">
                                <span className="text-xl font-semibold">Trending Categories</span>
                            </div>
                            <div className="div-categories-list flex flex-wrap gap-3 text-black">
                                <span className="bg-mainGreen text-black px-3 py-1 rounded-full text-xs font-semibold cursor-pointer hover:bg-opacity-80">Development</span>
                                <span className="bg-mainGreen text-black px-3 py-1 rounded-full text-xs font-semibold cursor-pointer hover:bg-opacity-80">Artificial Intelligence</span>
                                <span className="bg-mainGreen text-black px-3 py-1 rounded-full text-xs font-semibold cursor-pointer hover:bg-opacity-80">Machine Learning</span>
                                <span className="bg-mainGreen text-black px-3 py-1 rounded-full text-xs font-semibold cursor-pointer hover:bg-opacity-80">Cloud Computing</span>
                                <span className="bg-mainGreen text-black px-3 py-1 rounded-full text-xs font-semibold cursor-pointer hover:bg-opacity-80">Cybersecurity</span>
                                <span className="bg-mainGreen text-black px-3 py-1 rounded-full text-xs font-semibold cursor-pointer hover:bg-opacity-80">Micoservices</span>
                                <span className="bg-mainGreen text-black px-3 py-1 rounded-full text-xs font-semibold cursor-pointer hover:bg-opacity-80">User Experience</span>

 
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Blogs
