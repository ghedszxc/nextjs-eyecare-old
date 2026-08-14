"use client";

import Icon from "@/components/global_elements/Icon/Icon";
// Modules
import { IDialog } from "./TextCenterWithAvatar.interface";
import { useEffect, useRef } from "react";
import AppConfig from "@/lib/AppConfig";

// Components

interface ReadMoreModalProps extends IDialog {
  onClose: () => void;
  isActive: boolean;
}

const ReadMoreModal: React.FC<ReadMoreModalProps> = ({
  readMoreText,
  onClose,
  isActive,
}) => {
  // Hooks
  const modalRef = useRef<HTMLDivElement | null>(null);
  // Functions
  // Effects
  useEffect(() => {
    if (modalRef.current) modalRef.current.style.display = isActive ? "block" : "none";
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } 
    return () => {
      document.body.style.overflow = "hidden auto";
    };
  }, [isActive]);

  return (
    <div
      ref={modalRef}
      className="prose-readMoreModalMobile lg:prose-readMoreModalDesktop"
      style={{ display: isActive ? "block" : "none" }} >
      <div className="bg-white shadow-2xl border pb-7">
        <div className="absolute
              right-[4vw] lg:right-[26.5vw] xl:right-[26.1vw]
              top-[28.5vh] md:top-[28vh] lg:top-[32vh]">
          <span className="cursor-pointer" onClick={onClose}>
            <Icon className="w-3 h-3 lg:w-5 md:h-5" type={"close"} />
          </span>
        </div>

        <div className="font-[100] text-[16px] lg:text-[1.40625vw] leading-[28px] lg:leading-[2.5vw] text-[#5e6b74] mt-16 px-6">
          {AppConfig.html(readMoreText)}
        </div>
      </div>
    </div>
  );
};

export default ReadMoreModal;
