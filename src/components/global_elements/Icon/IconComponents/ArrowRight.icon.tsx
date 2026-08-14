// Modules
import { IIcon } from "@/models/components/IIcons";

// Components

const ArrowRight: React.FC<IIcon> = ({ className }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.707 47.707L12.293 46.293L34.586 24L12.293 1.707L13.707 0.292999L37.414 24L13.707 47.707Z"
        fill="inherit"
      />
    </svg>
  );
};

export default ArrowRight;
