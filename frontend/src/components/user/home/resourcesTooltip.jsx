import React from "react";
import { AnimatedTooltip } from "../../ui/animated-tooltip"; // Ensure this path points to your actual component file

const people = [
    {
        id: 1,
        name: "React",
        designation: "Development",
        image:
            "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-svg-vector.svg"
    },
    {
        id: 2,
        name: "MongoDb",
        designation: "Database",
        image:
            "https://www.svgrepo.com/show/331488/mongodb.svg"
    },
    {
        id: 3,
        name: "Python",
        designation: "Machine Learning",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqbr2RpgfntcBKFVPwtTtVwifVRY7jPXb-TA&s"
    },
    {
        id: 4,
        name: "Tableau",
        designation: "Analytics",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH5u043Wyl-BWnUo9FcWSuh2hv62v-Kc98WQ&s",
    },
    {
        id: 5,
        name: "NodeJs",
        designation: "Backend Development",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ki9EwgSEDLZx2dajFEG_KW-oshuGGq5p5g&s"
    },
    {
        id: 6,
        name: "C++",
        designation: "Basics",
        image:
            "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    },
];

export function AnimatedTooltipResources() {
    return (
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={people} />
        </div>
    );
}
