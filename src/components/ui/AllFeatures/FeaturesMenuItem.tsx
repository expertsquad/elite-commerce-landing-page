import MegaMenuIcon from "@/assets/icons/MegaMenuIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import CustomHoverIconColor from "@/components/Shared/CustomHoverIconColor";
import {
  IconAdjustments,
  IconAdjustmentsHorizontal,
  IconBolt,
  IconCarouselHorizontal,
  IconCashRegister,
  IconChartHistogram,
  IconEye,
  IconHeart,
  IconLayout,
  IconLayout2,
  IconMessageCircle,
  IconPlus,
  IconSearch,
  IconSettingsSpark,
  IconShip,
  IconShoppingBag,
  IconSlideshow,
  IconStar,
  IconTriangleSquareCircle,
  IconTruckDelivery,
  IconUser,
  IconUsers,
  IconX,
} from "@tabler/icons-react";
import React from "react";

const FeaturesMenuItem = ({
  onClick,
  className,
  title,
  icon,
}: {
  onClick?: () => void;
  className?: string;
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      onClick={onClick}
      className={`${className}  py-[clamp(10px,2.5vw,13px)] rounded-full px-[clamp(10px,2.5vw,20px)] flex items-center justify-center md:justify-start gap-[clamp(6px,2.5vw,6px)] font-medium [font-size:_clamp(12px,2.5vw,16px)] border cursor-pointer border-white bg-[#119F5B0D ] duration-300 transition-all hover:bg-gradient-primary hover:text-white text-black-70 `}
    >
      <span className="md:block hidden">
        {title === "Mega Menu" ? (
          <IconAdjustmentsHorizontal stroke={1.5} size={18} />
        ) : title === "Search" ? (
          <IconSearch stroke={1.5} size={18} />
        ) : title === "Quick View" ? (
          <IconEye stroke={1.5} size={18} />
        ) : title === "Quick Order" ? (
          <IconBolt stroke={1.5} size={18} />
        ) : title === "Wishlist" ? (
          <IconHeart stroke={1.5} size={18} />
        ) : title === "Order Tracking" ? (
          <IconTruckDelivery stroke={1.5} size={18} />
        ) : title === "Product Review" ? (
          <IconStar stroke={1.5} size={18} />
        ) : title === "Live Message" ? (
          <IconMessageCircle stroke={1.5} size={18} />
        ) : title === "Dashboard" ? (
          <IconLayout2 stroke={1.5} size={18} />
        ) : title === "Analytics" ? (
          <IconChartHistogram stroke={1.5} size={18} />
        ) : title === "POS Order" ? (
          <IconCashRegister stroke={1.5} size={18} />
        ) : title === "Add New Product" ? (
          <IconPlus stroke={1.5} size={18} />
        ) : title === "Category" ? (
          <IconTriangleSquareCircle stroke={1.5} size={18} />
        ) : title === "Promotion" ? (
          <IconCarouselHorizontal stroke={1.5} size={18} />
        ) : title === "Shop Setup" ? (
          <IconSettingsSpark stroke={1.5} size={18} />
        ) : title === "Administration" ? (
          <IconUsers stroke={1.5} size={18} />
        ) : (
          ""
        )}
      </span>
      <span>{title}</span>
    </div>
  );
};

export default FeaturesMenuItem;
