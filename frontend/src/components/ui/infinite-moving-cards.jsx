import React, { useEffect, useState } from "react";
import { cn } from "../../utils/cn"; // Ensure this import path is correct for your Vite project
import { useNavigate } from "react-router-dom";
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className = "",
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  let navigate = useNavigate();

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 max-w-7xl overflow-hidden",
        className
      )}
    >
      <div className="bg-white rounded-md p-6 shadow-md h-[200px] flex justify-start items-center">
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-x-10 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              className="flex-shrink-0"
              key={item.id || idx}
             
            >
              <img
                src={`${item.src}`}
                alt={item.name || `Image ${idx}`}
                className="h-[70px] w-[86px] rounded-md hover:cursor-pointer"
                onClick={()=>{navigate(`/user/v1/organisation/query=${item.name}`)}}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
