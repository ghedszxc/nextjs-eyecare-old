"use client";

import Icon from "@/components/global_elements/Icon/Icon";
// Modules
import { IDialog } from "./TextCenterWithMedia.interface";
import ReactPlayer from "react-player";
import { useEffect, useRef } from "react";

// Components

interface VideoModalProps extends IDialog {
  onClose: () => void;
  isActive: boolean;
  className?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  videoUrl,
  onClose,
  isActive,
  className
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
      className={`prose-modalDesignMobile lg:prose-modalDesignDesktop shadow-2xl border ${className}`}
      style={{ display: isActive ? "block" : "none" }}
    >
      <div className="absolute right-5 top-5">
        <span
          className="cursor-pointer"
          onClick={onClose}
        >
          <Icon className="w-5 h-5 lg:w-10 md:h-10" type={"close"} />
        </span>
      </div>

      <div className="h-full p-[72px] lg:py-[70px] lg:px-[108px] px-0 lg:mt-0">
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          controls
          loop
          playsinline
          playing={isActive}
        />
      </div>
    </div>
  );
};

export default VideoModal;
