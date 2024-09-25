import React, { useRef, useEffect, ReactNode } from "react";

interface CursorHoverProps {
  hoverScale?: number; // Scale factor for hover
  cursorSize?: string; // Tailwind width and height classes
  customClass?: string; // Additional CSS classes
  customCursorContent?: React.ReactNode; // Optional custom content for the cursor
  children: ReactNode; // Elements inside the CursorHover wrapper
}

const CursorHover: React.FC<CursorHoverProps> = ({
  hoverScale = 0, // Default hover scale
  cursorSize = "w-0 h-0", // Default cursor size using Tailwind classes
  customClass = "", // Additional CSS classes for customization
  customCursorContent = null, // Option to provide custom cursor content
  children,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const hoverElement = hoverRef.current;

    if (!hoverElement || !cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hoverElement.getBoundingClientRect();
      // Position the custom cursor relative to the hover element
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      cursor.style.opacity = "1"; // Make cursor visible during hover
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0"; // Hide cursor when not hovering
    };

    // Add event listeners to the hover element
    hoverElement.addEventListener("mousemove", handleMouseMove);
    hoverElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hoverElement.removeEventListener("mousemove", handleMouseMove);
      hoverElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hoverScale]);

  return (
    <div ref={hoverRef} className="relative inline-block">
      <div
        ref={cursorRef}
        className={`absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-200 opacity-0 z-[100] ${cursorSize} ${customClass}`}
        style={{
          transform: `scale(1)`, // Ensure the cursor is scaled correctly
        }}
      >
        {customCursorContent ? (
          <div className="flex justify-center items-center">
            {customCursorContent}
          </div>
        ) : (
          <div className="bg-white w-full h-full"></div>
        )}
      </div>
      {/* Render the children that will be hovered over */}
      {children}
    </div>
  );
};

export default CursorHover;
