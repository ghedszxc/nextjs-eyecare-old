// Modules
import { ILRdynamicText } from "./LRdynamicText.interface";
import AppConfig from "@/lib/AppConfig";

// Components
import { Button } from "@/components/global_elements/Button/Button";
import ResponsivePicture from "@/components/Picture/ResponsivePicture";
import Anchor from "@/components/Anchor/Anchor";
const LRDynamicText = ({ title, subtitle, cta, picture, fallbackImage, isCropped }: ILRdynamicText) => {
  // Hooks
  // Variables
  // Functions
  // Effects
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-stretch">
        <div className="w-full lg:w-50">
          {picture && (
            <ResponsivePicture
              crops={picture}
              name="HeroBanner"
              type="widgets"
              url={fallbackImage}
              isCropped={isCropped}
            />
          )}
        </div>

        <div className="w-full lg:w-50 flex flex-col justify-center px-8 lg:px-24">
          {title && (
            <h3 className="text-3xl/[75px] lg:text-6xl/[75px] font-light tracking-wider mb-0 lg:mb-4">
              {title}
            </h3>
          )}

          {subtitle && (
            <div className="font-light text-sm lg:text-[1.5vw] leading-[1.5] text-gray-500 tracking-widest mb-6">
              {AppConfig.html(subtitle)}
            </div>
          )}

          <div className="text-center lg:text-start">
            {cta?.label && cta?.url && (
              <Anchor
                href={cta?.url}
                isExternal={!!cta?.isExternal}
              >
                {/* mb-6 rounded-full py-2 lg:py-5  border-[1px] border-black */}
                <Button
                  className="
                    mb-6
                    bg-white
                    rounded-full
                    font-medium 
                    py-2
                    px-7 lg:px-0
                    tracking-[3px] lg:tracking-wider
                    text-base lg:text-xl
                    border-[1px] border-black lg:border-[2px] lg:border-black
                    lg:w-[35%]"
                >
                  {cta?.label}
                </Button>
              </Anchor>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LRDynamicText;
