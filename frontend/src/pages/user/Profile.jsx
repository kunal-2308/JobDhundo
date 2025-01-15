import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/user/shared/Navbar';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { BsThreeDots } from "react-icons/bs";
import { TbExternalLink } from "react-icons/tb";
import AboutProfile from '@/components/user/profile/AboutProfile';
import AppliedJobsProfile from '@/components/user/profile/AppliedJobsProfile';
import SavedJobsProfileSection from '@/components/user/profile/SavedJobsProfileSection';
import PostedBlogsSectionProfile from '@/components/user/profile/PostedBlogsSectionProfile';
import { useAuth0 } from "@auth0/auth0-react";


function Profile() {

  var { logout, user } = useAuth0();

  const [suser, setUserProfile] = useState({
    "_id": "64cf56b21f5d3c45e07b8d3b",
    "auth0Id": "auth0|123456789",
    "email": "kunaltaware210@@example.com",
    "userName": "Kunal Taware",
    "bio": "Web developer with a passion for building impactful projects.",
    "About": "Passionate Web Developer 💻 | Crafting seamless user experiences with a focus on responsive design 📱 and intuitive interfaces 🎨. Proficient in JavaScript, React, and Node.js 🚀, with a knack for turning ideas into functional, scalable solutions 🌟. Always eager to learn and adapt to emerging technologies 🧑‍💻, I thrive in collaborative environments 🤝 and enjoy tackling complex challenges head-on 🧩. Let’s create something amazing together! 🌐",
    "phoneNumber": "1234567890",
    "role": "User",
    "profilePhoto": "/logos/guestMemoji-icon.png",
    "appliedJobs": [],
    "savedJobs": [],
    "skills": [
      "JavaScript",
      "React",
      "Node.js",
      "HTML5",
      "CSS3",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "Next.js",
      "Redux",
      "Git",
      "RESTful APIs"
    ],
    "languages": [
      "English",
      "Spanish",
      "Marathi",
      "Hindi",
    ],
    "profileIsComplete": true,
    "isBlocked": false,
    "createdAt": "2025-01-13T10:00:00.000Z",
    "updatedAt": "2025-01-13T10:00:00.000Z",
    "__v": 0
  });

  const [date, setDate] = useState('');
  const [openModalStatus, setOpenModalStatus] = useState(false);
  const modalRef = useRef(null);
  const [activeSection, setActiveSection] = useState('Profile'); // Default section is 'profile'

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenModalStatus(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

  }, []);

  useEffect(() => {
    const convertDate = (date) => {
      const year = date.split('-')[0];
      const monthNumber = date.split('-')[1];
      const monthMap = {
        "01": "Jan",
        "02": "Feb",
        "03": "Mar",
        "04": "Apr",
        "05": "May",
        "06": "Jun",
        "07": "Jul",
        "08": "Aug",
        "09": "Sep",
        "10": "Oct",
        "11": "Nov",
        "12": "Dec",
      };

      const month = monthMap[monthNumber];
      const formattedDate = `${month} ${year}`;
      setDate(formattedDate);
    };

    convertDate(suser.createdAt);
  }, [suser.createdAt]);

  const renderContent = () => {
    switch (activeSection) {
      case 'Profile':
        return <AboutProfile desc={suser.About} skills={suser.skills} languages={suser.languages} />;
      case 'AppliedJobs':
        return <AppliedJobsProfile />;
      case 'SavedJobs':
        return <SavedJobsProfileSection />;
      case 'Blogs':
        return <PostedBlogsSectionProfile />;
      default:
        return null;
    }
  };


  return (
    <>
      <div className="main-profile-page">
        {/* Background Section */}
        <div className="bg-img-poster-section w-full h-[150px] bg-neutral-100 shadow-md flex justify-start items-center p-5 relative">
          <Link to='/'>
            <span>
              <IoIosArrowBack
                size={30}
                className="bg-white border-[1px] border-neutral-400 rounded-full hover:shadow-2xl p-1 hover:cursor-pointer hover:bg-neutral-500 hover:text-white"
              />
            </span>
          </Link>
          <div className="div-profile-image absolute bottom-[-40px] left-1/2 transform -translate-x-1/2">
            <img
              src={suser.profilePhoto}
              alt="userProfileImage"
              className="w-[80px] h-[80px] rounded-full border-4 border-white shadow-lg bg-white"
            />
          </div>
        </div>
        <div className="div-profile-name w-full flex justify-center items-center mt-14">
          <span className='text-2xl font-semibold'>{user.name}</span>
        </div>
        <div className="div-short-bio flex justify-center items-center mt-2">
          <span className='text-center w-[500px] text-sm text-neutral-700'>
            Crafting responsive, user-friendly websites with precision & creativity🚀 Turning ideas into reality! 🌟
          </span>
        </div>
        <div className="div-email-section flex flex-row justify-center items-center gap-x-[8px] font-medium text-xs mt-4 text-neutral-500">
          <span>{user.email}</span>
          <span className='pb-2'>.</span>
          <span>Joined {date}</span>
          <span className='pb-2'>.</span>
          <span>Global</span>
        </div>
        <div className="div-button-section flex flex-row justify-center items-center mt-7 gap-x-4">
          <div className="div-1-likes flex flex-col justify-start items-start border-r-[1px] pr-5 border-neutral-300">
            <span className='font-semibold text-sm'>2819</span>
            <span className='text-neutral-500 text-xs'>Star Points</span>
          </div>
          <Button onClick={() => { toast.success('Download Resume Feature') }}>Resume</Button>
          <Button className='bg-white text-black border-[1px] shadow-none hover:bg-white hover:shadow-lg' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Button>
          <div className="div-edit-button-Section flex relative">
            <Button
              className='bg-white text-black border-[1px] shadow-none hover:bg-white'
              onClick={() => { setOpenModalStatus(!openModalStatus) }}
            >
              <BsThreeDots />
            </Button>
            {openModalStatus && (
              <div
                ref={modalRef}
                className="absolute top-10 right-0 bg-white shadow-lg border rounded-md p-2 z-50 mt-2"
              >
                <Button
                  className="w-full bg-black text-white"
                  onClick={() => { toast.success('Edit Profile Clicked'); setOpenModalStatus(!openModalStatus) }}
                >
                  Edit Profile
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="div-sections-container border-b-[0.5px] border-t-[0.5px] mt-10 border-neutral-200 flex flex-row justify-center items-center h-[60px] gap-x-14 text-neutral-500 text-sm">
          {['Profile', 'AppliedJobs', 'SavedJobs', 'Blogs'].map((section) => (
            <div
              key={section}
              className={`div-1 flex items-center justify-center h-full ${activeSection === section ? 'text-black font-semibold border-b-2 border-black' : 'text-neutral-500'
                } cursor-pointer`}
              onClick={() => setActiveSection(section)}
            >
              <span>{section === 'profile' ? 'Profile' : section.replace(/([A-Z])/g, ' $1')}</span>
            </div>
          ))}
        </div>
        <div className="div-content mt-5 px-6 flex flex-row">
          <div className="div-main-page-content w-[70%]">
            {renderContent()}
          </div>
          <div className="div-container-section pl-10 flex flex-col justify-start items-center">
            <div className="div-social-container w-full flex flex-col justify-start items-start border-[1px] pt-2 pb-3 px-4 rounded-xl">
              <div className="div-title">
                <span className='text-lg font-semibold'>Social Links</span>
              </div>
              <div className="div-content flex flex-col gap-y-2 mt-3">
                <a href='https://github.com/kunal-2308' target="_blank"
                  rel="noopener noreferrer"><div className='bg-lightSkin/100 py-3 px-2 rounded-lg flex flex-row justify-between items-center gap-x-7'>
                    <span className='text-xs font-semibold text-neutral-700'>https://github.com/kunal-2308</span>
                    <TbExternalLink size={16} className='text-sky-400 font-semibold' />
                  </div></a>
                <a
                  href="https://www.linkedin.com/in/kunal-taware-a76832233/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className='bg-lightSkin/100 py-3 px-2 rounded-lg flex flex-row justify-between items-center gap-x-7'>
                    <span className='text-xs font-semibold text-neutral-700'>https://github.com/kunal-2308</span>
                    <TbExternalLink size={16} className='text-sky-400 font-semibold' />
                  </div>
                </a>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Profile;
