"use client";

import useScrolledTop from "@/hooks/useScrolledTop";
// Modules
import { URL } from "../INavigation.interface";

// Components
import Picture from "@/components/Picture/Picture";
import { useRef } from "react";
import AnimateOnScreen from "@/components/Animations/AnimateOnScreen";

type ILogoProps = {
  logos: URL[];
};

const LogoList: React.FC<ILogoProps> = ({ logos }) => {
  // Hooks
  const ref = useRef<HTMLDivElement>(null);
  const top = useScrolledTop();
  // Variables
  // Functions
  // Effects
  return (
    <AnimateOnScreen
      start={!top}
      styleVariants={{
        hide: {
          maxHeight: 66,
          opacity: 1,
          transform: "translateY(0%)",
        },
        show: {
          maxHeight: 0,
          opacity: 0,
          transform: "translateY(-50px)",
        },
      }}
      duration={0.5}
    >
      <div
        className="flex pt-[14px] pb-[5px] lg:py-0  justify-start lg:justify-center h-[35px] lg:h-[66px] pointer-events-none"
        ref={ref}
      >
        {logos.map((logo, index) => (
          <div className="flex items-center lg:mr-[0.7em] lg:last-of-type:mr-[0]" key={index}>
            <Picture
              src={logo}
              alt="Essilor Luxottica Eyecare"
              width={800}
              height={600}
              unoptimized
              className="w-full h-auto max-w-[77%] lg:max-w-[150px] object-contain"
            />
          </div>
        ))}
      </div>
    </AnimateOnScreen>
  );
};
export default LogoList;
