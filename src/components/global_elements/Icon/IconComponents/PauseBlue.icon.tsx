// Modules

import { IIcon } from "@/models/components/IIcons";

// Components

const PauseBlue: React.FC<IIcon> = ({ className }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_b_6752_4651)">
        <circle cx="64" cy="64" r="64" fill="#085293" fillOpacity="0.9" />
      </g>
      <path d="M50 37l0 55 M80 37l0 55" stroke="white" strokeWidth="13" />

      <defs>
        <filter
          id="filter0_b_6752_4651"
          x="-20"
          y="-20"
          width="168"
          height="168"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_6752_4651"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_6752_4651"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default PauseBlue;
