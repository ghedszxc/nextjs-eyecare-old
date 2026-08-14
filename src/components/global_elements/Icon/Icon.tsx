// Modules
import { IIcon, IIconTypes } from "@/models/IIcons";
import { ComponentType } from "react";
import dynamic from "next/dynamic";

// Components
const icons: { [name in IIconTypes]: ComponentType<any> | null } = {
  share: dynamic(() => import("./IconComponents/Share.icon")),
  external: dynamic(() => import("./IconComponents/External.icon")),
  spinner: dynamic(() => import("./IconComponents/Spinner.icon")),
  play: dynamic(() => import("./IconComponents/Play.icon")),
  playBlue: dynamic(() => import("./IconComponents/PlayBlue.icon")),
  pauseBlue: dynamic(() => import("./IconComponents/PauseBlue.icon")),
  close: dynamic(() => import("./IconComponents/Close.icon")),
  arrowRight: dynamic(() => import("./IconComponents/ArrowRight.icon")),
  arrowRightCTA: dynamic(() => import("./IconComponents/ArrowRightCTA.icon")),
  arrowLeftCTA: dynamic(() => import("./IconComponents/ArrowLeftCTA.icon")),
  arrowLeft: dynamic(() => import("./IconComponents/ArrowLeft.icon")),
  arrowLeftCircle: dynamic(() => import("./IconComponents/ArrowLeftCircle.icon")),
  arrowRightCircle: dynamic(() => import("./IconComponents/ArrowRightCircle.icon")),
  arrowRightCard: dynamic(() => import("./IconComponents/ArrowRightCard.icon")), 
  facebook: dynamic(() => import("./IconComponents/Facebook.icon")),
  twitter: dynamic(() => import("./IconComponents/Twitter.icon")),
  linkedin: dynamic(() => import("./IconComponents/Linkedin.icon")),
  mail: dynamic(() => import("./IconComponents/Mail.icon")),
  trophy: dynamic(() => import("./IconComponents/Trophy.icon")),
  medal: dynamic(() => import("./IconComponents/Medal.icon")),
};

const Icon: React.FC<IIcon> = ({ type, className }) => {
  // Hooks
  // Variables
  const MappedIcon = icons[type];
  // Functions
  // Effects

  if (MappedIcon) return <MappedIcon className={className} />;

  return null;
};

export default Icon;
