import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../../utils/cn"; // Update the import path for `utils` as needed
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [profileModal, setModalStatus] = useState(false);

  const navigate = useNavigate();
  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
  } = useAuth0();

  if (isAuthenticated) {
    console.log(user);
  }

  // Handle logout with Auth0
  const handleLogout = (e) => {
    e.preventDefault();
    logout({ returnTo: window.location.origin });
    toast.success("Logged Out");
  };

  return (
    <div
      className={cn(
        "fixed top-6 inset-x-0 w-[100%] z-50 flex flex-row justify-between items-center px-10",
        className
      )}
    >
      <div className="div-1">
        <img src="/logos/JD-Logo.png" alt="" className="h-16" />
      </div>
      <div className="div-2">
        <Menu setActive={setActive} className="">
          <Link to="/">
            <span className="text-white border-black border-b-[2px] hover:border-b-[2px] hover:border-mainGreen pb-1">
              Home
            </span>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Jobs">
            <div className="flex flex-col space-y-4 text-sm">
              <Link to="/jobs">View All Jobs</Link>
              <Link to="/jobs/applied">List of Applied Jobs</Link>
              <Link to="/job/watchlist">WatchList</Link>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Blogs">
            <div className="flex flex-col space-y-4 text-sm">
              <Link to="/blogs">View Blogs</Link>
              <Link to="/blog/post">Post a Blog</Link>
              <Link to="/blog/review">Review your Blogs</Link>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Resources">
            <div className="text-sm grid grid-cols-2 gap-10 p-4 overflow-y-scroll h-[200px]">
              <ProductItem
                title="DSA Beginner Sheet"
                href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2"
                src="/resources/SDE-A-Z.png"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Basics of Development"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Master Core Languages"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Advanced Development"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
            </div>
          </MenuItem>
          <Link to="/about">
            <span className="text-white border-black border-b-[2px] hover:border-b-[2px] hover:border-mainGreen pb-1">
              About Us
            </span>
          </Link>
        </Menu>
      </div>
      <div
        className="div-3 relative flex flex-col"
        onMouseEnter={() => setModalStatus(true)}
        onMouseLeave={() => setModalStatus(false)}
      >
        <Avatar className="h-12 w-12 hover:cursor-pointer border-[1px] border-slate-700 rounded-full hover:border-slate-200 hover:shadow-xl">
          <AvatarImage
            src={isAuthenticated && user?.picture ? user.picture : "/logos/guestMemoji-icon.png"}
            alt={user?.name || 'User Avatar'}
          />
          {/* Fallback image in case picture is still unavailable */}
          <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
        </Avatar>


        {/* User Profile Modal */}
        {profileModal ? (
          isAuthenticated ? (
            <div className="absolute right-0 top-full mt-2 w-max bg-black text-white rounded-lg shadow-lg p-4 z-50 flex flex-col">
              <p className="text-center mb-4">
                <span className="font-medium text-lg text-mainGreen">Welcome</span>{" "}
                <span className="pl-1">
                  {user?.name
                    ? user?.name.split(" ")[0]?.charAt(0).toUpperCase() + user?.name.split(" ")[0]?.slice(1)
                    : user?.email?.split("@")[0]
                  } !
                </span>

              </p>
              <Link to="/user/profile">
                <div className="div-1 border-slate-300 border-b-[1px] py-1 hover:cursor-pointer hover:text-mainGreen hover:font-medium">
                  <span>View Profile</span>
                </div>
              </Link>
              <div
                className="div-1 border-slate-300 py-1 hover:cursor-pointer hover:animate-pulse hover:text-mainGreen hover:font-medium"
                onClick={handleLogout}
              >
                <span>Logout</span>
              </div>
            </div>
          ) : (
            <div className="absolute right-0 top-full mt-2 w-48 bg-black text-white rounded-lg shadow-lg p-4 z-50 flex flex-col">
              <p className="text-center mb-2">
                <span className="font-medium text-lg text-mainGreen">Welcome</span>{" "}
                <span>Guest!</span>
              </p>
              <Button
                className="bg-black/95 border-[1px] border-slate-200"
                onClick={() => {
                  navigate('/login')
                }}
              >
                Signup / Login
              </Button>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
}
