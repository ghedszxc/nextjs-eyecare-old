// Modules
import { ILongTextCenterCtaBottom } from "./LongTextCenterCtaBottom.interface";
import AppConfig from "@/lib/AppConfig";
import ResponsivePicture from "@/components/Picture/ResponsivePicture";

// Components
import { Button } from "@/components/global_elements/Button/Button";
import Anchor from "@/components/Anchor/Anchor";
//props

const LongTextCenterCtaBottom = ({ title, subtitle, fallbackImage, picture, cta, isCropped}: ILongTextCenterCtaBottom) => {
  // Hooks
  // Variables
  // Functions
  // Effects
  return (
    <div className="flex justify-center text-center py-10 lg:py-[50px]">
      <div className="w-[90%] lg:w-[74%] font-light">
        {
          picture && (
            <div className="flex lg:flex justify-center mb-20">
              <ResponsivePicture
                crops={picture}
                name="LongTextCenterCtaBottom"
                type="widgets"
                url={fallbackImage}
              />                
          </div>
        )} 
       
        {
          title && (
            <div className={`
              text-[18px] lg:text-[2vw]
              font-[700]
              leading-[30px] lg:leading-[3vw]
              text-gray-600
              ${subtitle && "mb-8 lg:mb-20"}`}>
              {title}
            </div>
          )
        }
        
        {
          subtitle && 
          (
            <div className="prose-longTextCenterCtaBottomMobile lg:prose-longTextCenterCtaBottomDesktop">{AppConfig.html(subtitle)}</div>
          )
        }

        
        {cta?.label && cta?.url && (
          <Anchor
            href={cta?.url}
            isExternal={!!cta?.isExternal}
          >
            <Button
              className="
                mt-8 lg:mt-20
                rounded-full
                px-[16vw] lg:px-14
                py-3 lg:py-5
                font-medium
                tracking-wider
                text-xl
                border-[2px] border-black">
              {cta?.label}
            </Button>
          </Anchor>
        )}
      </div>
    </div>
  );
};
export default LongTextCenterCtaBottom;
