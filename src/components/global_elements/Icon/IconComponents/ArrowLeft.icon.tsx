// Modules
import { IIcon } from "@/models/components/IIcons";

// Components

const ArrowLeft: React.FC<IIcon> = ({ className }) => {
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
        d="M35.293 47.707L11.586 24L35.293 0.292999L36.707 1.707L14.414 24L36.707 46.293L35.293 47.707Z"
        fill="inherit"
      />
    </svg>
  );
};

export default ArrowLeft;
