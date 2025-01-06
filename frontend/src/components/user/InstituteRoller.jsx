import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsIntitute() {
  return (
    <div
      className="h-[300px] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mt-16 gap-y-4"
    >
      <span className="text-2xl font-bold text-black/70 hover:cursor-pointer">Our Institutions Partner</span>
      <InfiniteMovingCards items={testimonials} direction="right" speed="normal" />
    </div>
  );
}

//get all the images from the Db for each organisation registered

const testimonials = [
  {
    id:1,
    src:'../brands/Adobe-company-official-logo-partners.png',
    name:'adobe'
  },
  {
    id:2,
    src:'../brands/Google-company-official-logo-partners.png',
    name:'google'
  },
  {
    id:3,
    src:'../../brands/mircosoft-company-official-logo-partners.png',
    name:'microsoft'
  },
  {
    id:4,
    src:'../brands/Meta-company-official-logo-partners.png',
    name:'meta'
  },
  {
    id:5,
    src:'../brands/hsbc-company-official-logo-partners.png',
    name:'hsbc'
  },
  {
    id:6,
    src:'../brands/IBM-company-official-logo-partners.png',
    name:'IBM'
  },
  {
    id:7,
    src:'../brands/amazon-company-official-logo-partners.png',
    name:'amazon'
  },
];

