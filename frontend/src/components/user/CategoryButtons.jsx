import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

function CategoryButtons() {
  const navigate = useNavigate();

  const handleButtonClick = (keyword) => {
    navigate(`/jobs/query=${keyword}`); // Navigate to the URL with the keyword
  };

  return (
    <div className="div-category-buttons mt-10 flex flex-row justify-evenly items-center gap-x-4">
      {[
        "Development",
        "AI / ML",
        "DevOps",
        "Cloud",
        "Database",
        "Networking",
        "Design",
      ].map((category) => (
        <Button
          key={category}
          className="rounded-full hover:bg-mainGreen hover:text-black"
          onClick={() => handleButtonClick(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}

export default CategoryButtons;
