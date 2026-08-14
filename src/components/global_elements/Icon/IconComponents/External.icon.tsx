// Modules
import { IIcon } from "@/models/components/IIcons";

// Components

const ExternalIcon: React.FC<IIcon> = ({ className }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g opacity="0.9">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 3H3V30H30V3ZM0 0V33H33V0H0Z"
          fill="inherit"
        />
        <path
          d="M14.7813 7.31376L14.8215 10.3531L20.3644 10.4351L10.3529 20.4466L12.5423 22.6361L22.5538 12.6246L22.6359 18.1674L25.6752 18.2076L25.5417 7.44722L14.7813 7.31376Z"
          fill="inherit"
        />
      </g>
    </svg>
  );
};

export default ExternalIcon;
