// Modules

import Picture from "@/components/Picture/Picture";
import { ICopyright, ILogo } from "../IFooter.interface";
import Anchor from "@/components/Anchor/Anchor";
import AppConfig from "@/lib/AppConfig";

// Components

type IFooterLogosProps = {
  logos: ILogo[];
  copyRight: ICopyright;
};

const FooterLogos: React.FC<IFooterLogosProps> = ({ logos, copyRight }) => {
  // Hooks
  // Variables
  // Functions
  // Effects
  return (
    <div className="lg:w-1/2 lg:ml-[8.33333333%] float-left">
      <div className="flex items-center flex-col lg:flex-row px-[15px]">
        {/* Logos */}
        {logos.map((logo, key) => (
          <div
            key={key}
            className="mx-[15px] mb-[15vw] last-of-type:mb-0 last-of-type:pb-[14vw] lg:last-of-type:pb-0 max-w-[25%] flex lg:mr-[3.5em] lg:mb-0 lg:ml-0"
          >
            {
              logo.link != '#' && (
                <Anchor href={logo.link} className="leading-[48px] inline-block">
                  <Picture
                    className="object-contain w-full"
                    src={logo.photo}
                    alt={logo.link}
                    width={300}
                    height={100}
                    unoptimized
                  />
                </Anchor>
              )
            }

            {
              logo.link == '#' && (
                <Picture
                  className="object-contain w-full"
                  src={logo.photo}
                  alt={logo.link}
                  width={300}
                  height={100}
                  unoptimized
                />
              )
            }
          </div>
        ))}
      </div>

      <div className="border-b-[1px] last-of-type:border-white w-full max-w-[25%] m-auto mb-[8vw] lg:hidden"></div>

      {/* Desktop disclaimer */}
      {copyRight && (
        <div className="mt-[3.125vw] px-[15px] text-white hidden lg:block">
          <div className="text-[.83333vw] tracking-[.0625em] font-light leading-5 lg:leading-[1.04167vw] mb-5">
            {AppConfig.html(copyRight.disclaimer.text)}
          </div>
          <div className="text-[.83333vw] tracking-[.0625em] font-light leading-5 lg:leading-[1.04167vw]">
            {AppConfig.html(copyRight.copyRight)}
          </div>
        </div>
      )}
    </div>
  );
};
export default FooterLogos;
