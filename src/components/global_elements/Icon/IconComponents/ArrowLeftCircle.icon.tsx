// Modules
import { IIcon } from "@/models/components/IIcons";

// Components

const ArrowLeftCircls: React.FC<IIcon> = ({ className }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    // <svg
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={className}
    // >
    //   <path
    //     d="M12 8L8 12M8 12L12 16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
    //     stroke="inherit"
    //     strokeWidth="2"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    // </svg>
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M36.3853 27.0627H21.8635V28.9363H36.3853V27.0627Z"
        fill="#000"
      />
      <path
        d="M25.8914 34.2776L27.2036 32.9653L22.2374 28L27.2036 23.0347L25.8914 21.7224L19.6147 28L25.8914 34.2776Z"
        fill="#000"
      />
      <rect
        x="-0.5"
        y="0.5"
        width="55"
        height="55"
        rx="27.5"
        transform="matrix(-1 0 0 1 55 0)"
        stroke="#BFBFBF"
      />
    </svg>
  );
};
export default ArrowLeftCircls;
