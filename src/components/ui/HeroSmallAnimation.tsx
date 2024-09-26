import Image from "next/image";
const HeroSmallAnimation = ({
  className,
  src,
}: {
  className?: string;
  src: string;
}) => {
  return (
    <div className="w-fit">
      <Image
        alt="Hero animation"
        src={src}
        height={30}
        width={30}
        className={className}
      />
    </div>
  );
};

export default HeroSmallAnimation;
