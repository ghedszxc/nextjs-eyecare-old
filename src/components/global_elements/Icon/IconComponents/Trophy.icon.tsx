// Modules
import { IIcon } from "@/models/components/IIcons";

// Components

const TrophyIcon: React.FC<IIcon> = ({ className }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="19.556"
      viewBox="0 0 22 19.556"
      className={className}
      fill="inherit"
    >
      {/* !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
      <path d="M6.722,0h8.556a1.79,1.79,0,0,1,1.8,1.841c-.008.2-.015.4-.027.6h4.033A.914.914,0,0,1,22,3.361a10.235,10.235,0,0,1-3,7.666,12.25,12.25,0,0,1-5.275,2.9,1.942,1.942,0,0,0-1.5,1.742,1.449,1.449,0,0,0,1.448,1.448h1a1.222,1.222,0,1,1,0,2.444H7.333a1.222,1.222,0,0,1,0-2.444h1a1.449,1.449,0,0,0,1.448-1.448,1.933,1.933,0,0,0-1.5-1.742,12.24,12.24,0,0,1-5.278-2.9A10.248,10.248,0,0,1,0,3.361a.914.914,0,0,1,.917-.917H4.95c-.011-.2-.019-.4-.027-.6A1.79,1.79,0,0,1,6.722,0Zm13.41,4.278H16.909a18.616,18.616,0,0,1-1.982,7.28,9.487,9.487,0,0,0,2.8-1.845,8.12,8.12,0,0,0,2.406-5.435ZM4.274,9.713a9.487,9.487,0,0,0,2.8,1.845,18.616,18.616,0,0,1-1.982-7.28H1.864A8.155,8.155,0,0,0,4.27,9.713Z" />
    </svg>
  );
};

export default TrophyIcon;
