import React from "react";
import { IconStar, IconStarFilled } from "@tabler/icons-react";

const StarRating = ({
  rating,
  className = "w-3.5 h-3.5 md:w-4.5 md:h-4.5",
}: {
  rating: number;
  className?: string;
}) => {
  const maxRating = 5;
  const filledStars = Math.round(rating);
  const emptyStars = maxRating - filledStars;

  if (isNaN(filledStars) || isNaN(emptyStars)) {
    return null;
  }

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(filledStars)]?.map((_, index) => (
        <IconStarFilled key={index} className={`text-[#FB8E48] ${className}`} />
      ))}
      {[...Array(emptyStars)]?.map((_, index) => (
        <IconStar key={index} className={`text-[#FB8E48] ${className}`} />
      ))}
    </div>
  );
};

export default StarRating;
