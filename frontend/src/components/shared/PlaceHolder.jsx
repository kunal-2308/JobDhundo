import React from "react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import CategoryButtons from "../user/CategoryButtons";
import TopJobs from "../user/TopJobs";

export function PlaceholdersAndVanishInputDemo() {
    const placeholders = [
        "Software Developer Engineer",
        "UI Designer / Developer",
        "Aritifical Intelligence and Machine Learning",
        "Devops Engineer",
        "Database Administrator",
        "React Developer",
        "Native Developer"
    ];

    const handleChange = (e) => {
        console.log(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    };

    return (
        <div className="div-main bg-black">
            <div className="h-[22rem] flex flex-col justify-center items-center px-4">
                <h2 className="mb-8  text-4xl font-semibold text-center  dark:text-white text-white">
                    Find Your Dream Job <span className="text-sm font-light text-mainGreen">with JobDhundo.com</span>
                </h2>
                <PlaceholdersAndVanishInput
                    placeholders={placeholders}
                    onChange={handleChange}
                    onSubmit={onSubmit}
                />
                <CategoryButtons/>
            </div>
            <TopJobs/>
        </div>

    );
}
