// Modules
import { IIcon } from "@/models/components/IIcons";

// Components

const ArrowLeftCTA: React.FC<IIcon> = ({ className }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="inheirt"
      className={className}>
      <path strokeWidth="2" d="M15 6L9 12L15 18"></path>
    </svg>
  );
};

export default ArrowLeftCTA;
