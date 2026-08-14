// Modules
import { IIcon } from "@/models/components/IIcons";

// Components

const MailIcon: React.FC<IIcon> = ({ className }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <svg
      width="23"
      height="18"
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21.1787 3C21.1787 1.9 20.2787 1 19.1787 1H3.17871C2.07871 1 1.17871 1.9 1.17871 3M21.1787 3V15C21.1787 16.1 20.2787 17 19.1787 17H3.17871C2.07871 17 1.17871 16.1 1.17871 15V3M21.1787 3L11.1787 10L1.17871 3"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default MailIcon;
