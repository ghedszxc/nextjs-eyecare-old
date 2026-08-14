// Modules
import { IIcon } from "@/models/components/IIcons";

// Components

const ArrowRightCard: React.FC<IIcon> = ({ className }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 8H15M15 8L8 1M15 8L8 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default ArrowRightCard;
