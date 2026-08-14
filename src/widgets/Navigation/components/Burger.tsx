"use client"

// Modules
import useToggle from "@/hooks/useToggle";
import { cx } from "class-variance-authority";
import MobileLinkList from "./MobileLinkList";
import { TLink } from "../INavigation.interface";
import AnimateOnScreen from "@/components/Animations/AnimateOnScreen";
import { useEffect } from "react";

// Components

type IBurgerProps = {
    onClickHandler?: () => void;
    links: TLink[];
    loginLink: TLink;
};

const Burger = ({ onClickHandler, links, loginLink }: IBurgerProps) => {
  // Hooks
  const { toggle, toggleHandler } = useToggle();

  // Functions
  const handler = () => {
    toggleHandler();
    if(onClickHandler) onClickHandler();
  };


  useEffect(() => {
    globalThis.document.body.style.overflow = toggle ? "hidden" : "auto";
    // if (toggle) {
    //   globalThis.document.body.style.position = "fixed";
    //   globalThis.document.body.style.overflow = "hidden";
    // } else {
    //   globalThis.document.body.style.removeProperty("position");
    //   globalThis.document.body.style.removeProperty("overflow");
    // }
  }, [toggle]);

  return (
    <>
      <div className="lg:hidden cursor-pointer -scale-100 flex flex-col justify-center" onClick={handler}>
        <div className={cx(`${toggle ? "rotate-[45deg] translate-x-[0] translate-y-[8.2px] bg-black" : ""} w-[27px] h-[2px] bg-[#999] mb-[6px] last-of-type:mb-0 transition-all duration-500`)}></div>
        
        <div className={cx(`${toggle ? "opacity-0 bg-black" : ""} w-[27px] h-[2px] bg-[#999] mb-[6px] transition-all duration-500`)}></div>

        <div className={cx(`${toggle ? "-rotate-[45deg] translate-x-[0] -translate-y-[8.2px] bg-black" : ""} w-[27px] h-[2px] bg-[#999] mb-[6px] last-of-type:mb-0 transition-all duration-500`)}></div>
      </div>

      {links && (
        <AnimateOnScreen 
          start={toggle} 
          className="fixed w-full h-[calc(100dvh-55px)] md:h-[calc(100dvh-90px)] bottom-0 left-0 z-[1] overflow-hidden"
          styleVariants={{
            hide: {
              opacity: 0,
              transform: "translateY(10%)",
              pointerEvents: "none",
            },
            show: {
              opacity: 1,
              transform: "translateY(0%)",
              pointerEvents: "all",
            },
          }}
          duration={0.5}
        >
          <MobileLinkList links={links} loginLink={loginLink} />
        </AnimateOnScreen>
      )}
    </>
  );
};
export default Burger;
