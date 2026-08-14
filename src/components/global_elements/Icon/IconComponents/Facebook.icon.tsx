// Modules
import { IIcon } from "@/models/components/IIcons";

// Components

const FacebookIcon: React.FC<IIcon> = ({ className }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <svg
      width="11"
      height="20"
      viewBox="0 0 11 20"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.98306 6.00643V4.40717C6.98306 3.62132 7.50345 3.4421 7.87186 3.4421C8.24028 3.4421 10.1238 3.4421 10.1238 3.4421V0.0183824L7.02911 0C3.59362 0 2.80613 2.56434 2.80613 4.19577V6.00643H0.821289V8.42371V10.0046H2.82455C2.82455 14.5312 2.82455 20 2.82455 20H6.83109C6.83109 20 6.83109 14.4807 6.83109 10.0046H9.81066L9.95802 8.4329L10.1791 6.00643H6.98306Z"
        fill="inherit"
      ></path>
    </svg>
  );
};

export default FacebookIcon;
