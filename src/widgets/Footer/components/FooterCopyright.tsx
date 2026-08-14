// Modules

import AppConfig from "@/lib/AppConfig";
import { ICopyright } from "../IFooter.interface";

// Components

type IFooterCopyrightProps = {
  copyrights: ICopyright;
};

const FooterCopyright: React.FC<IFooterCopyrightProps> = ({ copyrights }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <div className="mt-[12vw] px-[8vw] text-white lg:hidden">
      <div className="font-light text-center leading-5 mb-5">{AppConfig.html(copyrights.disclaimer.text)}</div>
      <div className="font-light text-center leading-5">{AppConfig.html(copyrights.copyRight)}</div>
    </div>
  );
};
export default FooterCopyright;
