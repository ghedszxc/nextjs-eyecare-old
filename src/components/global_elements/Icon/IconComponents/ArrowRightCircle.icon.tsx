// Modules
import { IIcon } from "@/models/components/IIcons";

// Components

const ArrowLeftCircle: React.FC<IIcon> = ({ className }) => {
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
    //     d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
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
        d="M19.6147 27.0627H34.1365V28.9363H19.6147V27.0627Z"
        fill="black"
      />
      <path
        d="M30.1086 34.2776L28.7964 32.9653L33.7626 28L28.7964 23.0347L30.1086 21.7224L36.3853 28L30.1086 34.2776Z"
        fill="black"
      />
      <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" stroke="#BFBFBF" />
    </svg>
  );
};

export default ArrowLeftCircle;
