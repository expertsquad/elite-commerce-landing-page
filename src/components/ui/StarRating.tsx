import React from "react";
import { IconStar, IconStarFilled } from "@tabler/icons-react";

const StarRating = ({
  rating,
  className = "flex items-center gap-2",
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
    <div className="flex items-center gap-2">
      {[...Array(filledStars)]?.map((_, index) => (
        <IconStarFilled
          size={28}
          key={index}
          className={`text-[#FB8E48] ${className}`}
        />
      ))}
      {[...Array(emptyStars)]?.map((_, index) => (
        <IconStar
          key={index}
          size={28}
          className={`text-[#FB8E48] ${className}`}
        />
      ))}
    </div>
  );
};

export default StarRating;
