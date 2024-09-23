interface Button3dProps {
  button3dMainClass?: string;
  background3dclass?: string;
  buttonText?: string;
  showHoverText?: boolean; // Add this line
  textClasss?: string;
  mainButtonDiv?: string;
  boldText?: string;
  boldTextClass?: string;
}
const Button3d = ({
  button3dMainClass,
  background3dclass,
  buttonText,
  showHoverText = false, // Set default to false
  textClasss,
  mainButtonDiv,
  boldText,
  boldTextClass,
}: Button3dProps) => {
  return (
    <button className={`group relative ${button3dMainClass}`}>
      {/* <!-- Background Shadow/Effect Div --> */}
      <div
        className={`absolute mr-1 ml-1 inset-0 h-full -z-10 transform translate-x-3 translate-y-2  transition-all duration-300 ease-in-out group-hover:-translate-x-1 group-hover:scale-[40px] group-hover:-ml-1.5 group-hover:right-3.5 group-hover:mt-2  ${background3dclass}`}
      ></div>

      {/* Conditionally rendered hover text */}
      {showHoverText && (
        <span
          className={`absolute z-0 group-hover:z-20 right-0 w-8 h-[41.5px] mt-1  transition-all duration-1000 transform  -translate-x-4 bg-white opacity-10 rotate-12 group-hover:-translate-x-24 ease`}
        ></span>
      )}

      {/* <!-- Main Button Div --> */}
      <div
        className={`relative w-[145px] text-black transform translate-x-2 translate-y-2 px-3 py-3 bg-gradient-secondary transition-transform duration-300 ease-in-out group-hover:translate-x-3 group-hover:translate-y-1 group-hover:scale-105  ${mainButtonDiv}`}
      >
        {/* <!-- Button Content --> */}
        <div>
          <p className={`${textClasss}`}>
            {buttonText} <span className={`${boldTextClass}`}>{boldText}</span>
          </p>
        </div>
      </div>
    </button>
  );
};

export default Button3d;
