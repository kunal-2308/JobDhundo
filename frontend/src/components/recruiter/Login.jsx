import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '../ui/button';

function RecruiterLogin() {
    const {
        loginWithRedirect,
      } = useAuth0();
    return (
        <>
            <div className="div-main-container bg-white h-full w-full flex justify-center items-center mt-48 mb-40">
                <div className="main-login-box h-[450px] w-[650px] rounded-2xl shadow-2xl flex flex-row justify-between">
                    <div className="div-1 w-[50%] flex flex-col justify-start items-center gap-y-8 mt-20">
                        <img src="../../logos/JD-Logo.png" alt="" className='w-24' />
                        <div className="div-content flex flex-col justify-center items-center gap-y-4">
                            <span className='text-xl font-normal text-neutral-800'>Welcome User</span>
                            <span className='text-xs text-center'>Enhance your login experience with personalized <br /> and secure access.</span>
                        </div>
                        <div className="div-3-powered-by flex flex-col justify-center items-center gap-y-2">
                            <span className='font-medium text-sm text-slate-600'>Powered By</span>
                            <img src="../../brands/Auth0.png" alt="" className='w-16' />
                        </div>
                        <div className="div-button">
                            <Button onClick={()=>{loginWithRedirect()}}>Redirect to Login</Button>
                        </div>


                    </div>
                    <div className="div-2">
                        <img src="../../other/loginPageCover.png" alt="" className='h-[450px] rounded-r-2xl' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecruiterLogin
