import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function LoginLanding() {
    let [companyDetails, setCompanyDetails] = useState({
        companyEmail: "",
        password: ""
    });

    const [visible, setVisible] = useState(false); // State for toggling password visibility

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        alert(companyDetails.password);
        setCompanyDetails({
            companyEmail: "",
            password: ""
        });
    };

    const handleChange = (e) => {
        let { name, value } = e.target;
        setCompanyDetails((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <div className="div-title flex flex-col justify-center items-center mt-20 gap-y-1">
                <span className='text-3xl font-semibold text-neutral-700'>Welcome Recruiter</span>
                <div className="div-1 flex flex-row justify-center items-center gap-x-2">
                    <span className='text-xs font-light'>Streamline your hiring journey with advanced placement solutions at JobDhundo.com</span>
                </div>
            </div>
            <div className="div-main-container bg-white h-full w-full flex justify-center items-center mt-20 mb-40">
                <div className="main-login-box h-[540px] w-[800px] rounded-2xl shadow-2xl flex flex-row justify-between">
                    <div className="div-1 w-[60%] flex flex-col justify-start items-center gap-y-6 mt-16 px-6 pb-10">
                        <img src="../../logos/JD-Logo.png" alt="JD Logo" className="w-24" />
                        <div className="div-form-section w-full px-16 mt-3">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 mt-6">
                                <div className="div-email flex flex-col gap-y-1">
                                    <label htmlFor="email" className="text-sm font-medium pl-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="companyEmail"
                                        value={companyDetails.companyEmail}
                                        id="email"
                                        className="border-[1px] border-neutral-300 text-sm p-2 text-neutral-500 w-full  rounded-sm placeholder:font-light placeholder:text-neutral-400"
                                        placeholder="Email address"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="div-password relative flex flex-col gap-y-1">
                                    <label htmlFor="password" className="text-sm font-medium pl-1">Password</label>
                                    <input
                                        type={visible ? "text" : "password"}
                                        value={companyDetails.password}
                                        name="password"
                                        id="password"
                                        className="border-[1px] border-neutral-300 text-sm p-2 text-neutral-500 w-full rounded-sm pr-10 placeholder:font-light placeholder:text-neutral-400"
                                        placeholder="Password"
                                        required
                                        onChange={handleChange}
                                    />
                                    <span
                                        className="absolute top-9 right-3 text-neutral-500 hover:cursor-pointer"
                                        onClick={() => setVisible(!visible)}
                                        aria-label={visible ? "Hide password" : "Show password"}
                                    >
                                        {visible ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                <div className="div-button-section">
                                    <Button type="submit" className="mt-4 w-full bg-black text-white py-2 ">
                                        Login
                                    </Button>
                                    <div className="div-login flex justify-center items-center text-sm gap-x-2 mt-4 font-medium text-neutral-600">
                                        <span>Don't have an account?</span>
                                        <Link to='/redirect/organisation/signup'><span className='text-sky-500 underline underline-offset-2 hover:cursor-pointer'>Sign up</span></Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="div-2 w-[40%]">
                        <img src="../../other/loginPageCover.png" alt="Login Page Cover" className="h-[540px] w-full rounded-r-2xl object-cover" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginLanding;
