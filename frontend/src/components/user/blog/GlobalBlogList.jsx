import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';

function GlobalBlogList() {

let [blogList, setBlogList] = useState([
    {
        _id: "65b9f0a01c4a3d9b8f0c1234", // Example ObjectId
        title: "The Auth0 Concept",
        description: "Auth0 is a flexible, drop-in solution to add authentication and authorization services to applications. It provides developers with secure login functionality, multi-factor authentication, single sign-on (SSO), and support for various identity providers including social logins and enterprise SSO integrations. Auth0 simplifies the implementation of authentication using industry standards such as OAuth 2.0, OpenID Connect, and SAML. Whether you're building web, mobile, or API-driven applications, Auth0 offers a secure and scalable solution. With features like role-based access control (RBAC), customizable login flows, and analytics for tracking user behavior, it empowers businesses to maintain compliance and enhance user experience.",
        date: "2024-01-21T12:00:00Z",
        category: "Development",
        user: {
            auth0Id: "auth0|123456789",
            email: "dummyuser@example.com",
            userName: "TechGuru",
            bio: "Passionate about web security and authentication.",
            About: "I am a full-stack developer with a keen interest in secure web applications and authentication protocols.",
            phoneNumber: "+1234567890",
            role: "User",
            profilePhoto: "/logos/guestMemoji-icon.png",
            appliedJobs: [],
            savedJobs: [],
            skills: ["JavaScript", "Node.js", "React", "Auth0", "Security"],
            profileIsComplete: true,
            isBlocked: false,
            createdAt: "2024-01-20T10:30:00Z",
            updatedAt: "2024-01-21T09:45:00Z"
        },
        tags: ["Authentication", "OAuth", "Identity Management", "Security", "MFA"],
        Links: [
            "https://auth0.com/",
            "https://auth0.com/docs",
            "https://developer.mozilla.org/en-US/docs/Web/Security",
            "https://oauth.net/2/"
        ]
    },
    {
        _id: "65b9f0a01c4a3d9b8f0c5678", // Another example ObjectId
        title: "The Auth0 Concept",
        description: "Auth0 is a flexible, drop-in solution to add authentication and authorization services to applications. It provides developers with secure login functionality, multi-factor authentication, single sign-on (SSO), and support for various identity providers including social logins and enterprise SSO integrations. Auth0 simplifies the implementation of authentication using industry standards such as OAuth 2.0, OpenID Connect, and SAML. Whether you're building web, mobile, or API-driven applications, Auth0 offers a secure and scalable solution. With features like role-based access control (RBAC), customizable login flows, and analytics for tracking user behavior, it empowers businesses to maintain compliance and enhance user experience.",
        date: "2024-01-21T12:00:00Z",
        category: "Artificial Intelligence",
        user: {
            auth0Id: "auth0|123456789",
            email: "dummyuser@example.com",
            userName: "TechGuru",
            bio: "Passionate about web security and authentication.",
            About: "I am a full-stack developer with a keen interest in secure web applications and authentication protocols.",
            phoneNumber: "+1234567890",
            role: "User",
            profilePhoto: "/logos/guestMemoji-icon.png",
            appliedJobs: [],
            savedJobs: [],
            skills: ["JavaScript", "Node.js", "React", "Auth0", "Security"],
            profileIsComplete: true,
            isBlocked: false,
            createdAt: "2024-01-20T10:30:00Z",
            updatedAt: "2024-01-21T09:45:00Z"
        },
        tags: ["Authentication", "OAuth", "Identity Management", "Security", "MFA"],
        Links: [
            "https://auth0.com/",
            "https://auth0.com/docs",
            "https://developer.mozilla.org/en-US/docs/Web/Security",
            "https://oauth.net/2/"
        ]
    }
]);

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div className='container p-5 flex flex-col gap-y-5 w-full'>
            {blogList.map((ele, index) => {
                const truncatedCategory = truncateText(ele.category, 15); // Adjust the maxLength as needed
                return (
                    <div className="div-main-content w-full flex flex-row justify-between items-center gap-y-3 shadow-neutral-600 shadow-sm text-sm rounded-3xl cursor-pointer" key={index}>
                        <div className="div-left-section w-[70%] flex flex-col justify-start items-start gap-y-3 px-5 py-5">
                            <div className="title-section flex flex-row justify-start items-center gap-x-3">
                                <span className='text-lg font-semibold w-max'>{ele.title}</span>
                                <span 
                                    className='bg-mainGreen rounded-full text-xs px-2 py-1 font-medium w-max'
                                    title={ele.category} // Tooltip with full category text
                                >
                                    {truncatedCategory}
                                </span>
                            </div>
                            <div className="descriptionSection">
                                <span className='description-content text-xs font-medium'>{ele.description.length < 200 ? ele.description : ele.description.slice(0, 200).concat('....')}</span>
                            </div>
                            <div className="tags-section flex flex-row justify-start items-start gap-x-5 mt-2">
                                {ele.tags.map((item, index) => (
                                    <span key={index} className='bg-black text-white rounded-full p-1 text-xs px-2 w-max'>{item}</span>
                                ))}
                            </div>
                        </div>
                        <div className="div-right-section w-[30%] flex justify-center items-end">
                            <Link to= {`view/v1/user/${ele._id}`}>
                                <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block mt-5">
                                    <span className="absolute inset-0 overflow-hidden rounded-full">
                                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    </span>
                                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                                        <span>View More</span>
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
                                </button>
                            </Link>
                        </div>
                    </div>
                    
                );
            })}
        </div>
    );
}

export default GlobalBlogList;